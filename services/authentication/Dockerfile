FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app
ENV SERVICE="./src"
COPY ${SERVICE} ${SERVICE} 
RUN dotnet nuget add source http://nuget.kn01.fhict.nl/v3/index.json
WORKDIR /app/src
RUN dotnet publish -o "../out" -c:Release

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "grouper-api.dll"]