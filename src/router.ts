import { Router } from "express";
import { body, param } from "express-validator";
import {
    createEmployee,
    deleteEmployee,
    getEmployeeById,
    getEmployees,
    updateEmployee,
} from "./handlers/employee";
import { handleInputErrors } from "./middleware";

const router = Router();

router.get("/", getEmployees);
router.get(
    "/:id",
    // Validación
    param("id").isInt().withMessage("El ID debe ser un número"),
    handleInputErrors,
    getEmployeeById
);
router.post(
    "/",

    // Validación
    body("name").notEmpty().withMessage("El nombre es requerido"),

    body("email").notEmpty().withMessage("El correo es requerido"),

    body("phone").notEmpty().withMessage("El teléfono es requerido"),

    body("position").notEmpty().withMessage("El puesto es requerido"),
    handleInputErrors,
    createEmployee
);
router.put(
    "/:id",
    param("id").isInt().withMessage("El ID debe ser un número"),
    handleInputErrors,
    updateEmployee
);
router.delete(
    "/:id",
    param("id").isInt().withMessage("El ID debe ser un número"),
    handleInputErrors,
    deleteEmployee
);
export default router;
