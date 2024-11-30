import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        tags: [
            {
                name: "Employees",
                description: "API operations related to employees",
            },
        ],
        info: {
            title: "Employees API",
            version: "1.0.0",
            description: "API REST",
        },
    },
    apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
