FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

# Copy csproj and nuget config and restore as distinct layers
COPY API/*.csproj .
COPY API/NuGet.Config .
RUN dotnet restore --verbosity n

# Copy everything else and build
COPY ./API/. .
RUN dotnet build -c Release -o out

FROM build AS publish
WORKDIR /app
RUN dotnet publish -c Release -o out

# Build runtime image
FROM base AS final
ENV ASPNETCORE_URLS=http://0.0.0.0:5000
WORKDIR /app
COPY --from=publish /app/out .
ENTRYPOINT ["dotnet", "API.dll"]