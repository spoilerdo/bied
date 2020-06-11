FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ./API/*.csproj .
RUN dotnet restore

# Copy everything else and build
COPY ./API/. ./
RUN dotnet build -c Release -o out

from build AS publish
RUN dotnet publish -c Release -o out

# Build runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/out .
ENTRYPOINT ["dotnet", "EmailService.dll", "--urls", "http://0.0.0.0:5000"]
EXPOSE 5000