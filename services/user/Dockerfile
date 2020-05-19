#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS base
WORKDIR /src
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src

#copy csproj and nuget config for presention layer
COPY ./PresentationLayer/*.csproj PresentationLayer/
COPY ./PresentationLayer/NuGet.Config PresentionLayer/
RUN dotnet restore ./PresentationLayer --verbosity n

# Copy everything else and build
COPY ./PresentationLayer/. PresentationLayer/

#copy csproj and nuget config for business layer
COPY ./PersistenceLayer/*.csproj PersistenceLayer/
COPY ./PersistenceLayer/NuGet.Config PersistenceLayer/
RUN dotnet restore ./PersistenceLayer --verbosity n

# Copy everything else and build
COPY ./PersistenceLayer/. PersistenceLayer/

#copy csproj and nuget config for business layer
COPY ./BusinessLayer/*.csproj BusinessLayer/
COPY ./BusinessLayer/NuGet.Config BusinessLayer/
RUN dotnet restore ./BusinessLayer --verbosity n

# Copy everything else and build
COPY ./BusinessLayer/. BusinessLayer/

#copy sln files
COPY . .
RUN dotnet build -c Release -o out

from build AS publish
RUN dotnet publish -c Release -o out

FROM base AS final
WORKDIR /src
COPY --from=publish /src/out .
ENTRYPOINT ["dotnet", "PresentationLayer.dll"]