# BIED

In 2020 the Big Data project called BIED (Big data voor Inzicht in EenzaamheiD) will start. This project is a cooperation between Fontys Applied University and the Dutch national health service (GGD). It’s goal is to explore and register the perceived loneliness of Dutch citizens.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

These are the requirements for a development environment.

- [Docker](https://www.docker.com/) - Container manager
- [Helm](https://helm.sh) - Application deployment for Kubernetes

### Installing

A step by step series of examples that tell you how to get a development env running.

1. Build Docker images

```
$ docker-compose build
```

2. Start docker containers

```
$ docker-compose up
```

## Running the tests

Explain how to run the automated tests for this system

## Deployment

It is expected that the system will be deployed on a [Kubernetes](https://kubernetes.io/) cluster. Therefore the given [Helm](https://helm.sh/) can be used for deployment.

"_Helm Charts help you define, install, and upgrade even the most complex Kubernetes application._"

The following command will install the `./charts/bied` chart on the kubernetes cluster under the namespace `bied` using the values from `values.prod.yml`.

```sh
helm install bied ./charts/bied -n bied -f values.prod.yml
```

## Built With

- \[Example\]\(http://the-link/\) - Short description

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Choem/bied/tags).

## Authors

See also the list of [contributors](https://github.com/Choem/BIED/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- **Billie Thompson** - _Readme template_ - [PurpleBooth](https://github.com/PurpleBooth)
