import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Project Management API",
      version: "1.0.0",
      description: "API documentation for Project Management System",
    },
    servers: [
      {
        url: process.env.API_URL,
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // <-- Scan JSDoc comments trong routes
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📌 Swagger Docs available at: http://localhost:3001/api-docs");
};
