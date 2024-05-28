# Simple Math via RabbitMQ

Welcome to your Nest.js project! This project is built using the Nest.js framework, a powerful and extensible Node.js framework for building scalable and maintainable server-side applications.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/HakobjanyanHayk/rabbit-math.git
    cd rabbit-math
    ```

2. **Install dependencies:**

    ```bash
    yarn
    ```

   This command will install all the required dependencies for the project.

## Building Microservices

Before starting the services, you need to pre-install dependencies for microservices M1 and M2. Run the following command:

```bash
yarn build
```

## Running M1 and M2 Microservices

Running already built files from M1 and M2 `dist\main.js` . Run the following command:

```bash
yarn start
```

## Usage

To perform a calculation, make a `POST` request to the endpoint with the following payload:

### Request

`POST /api/calculation`

    curl -d '{"number": 17}' -H "Content-Type: application/json" -X POST http://localhost:8001/api/calculation

`Payload`
```json
{
    "number": 17
}
```

`Response`
```json
34
```