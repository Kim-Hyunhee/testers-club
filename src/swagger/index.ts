import swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "testers_club",
      version: "1.0.0",
      description: "testers_club swagger",
    },
    host: "localhost:8005",
    basePath: "/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["src/router/*.ts", "src/swagger/*.yml"],
};
const specs = swaggerJSDoc(options);

export { swaggerUi, specs };
