import { Request, Response } from "express";

import Employee from "../models/Employee.model";

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.findAll();
        res.json({ data: employees });
    } catch (error) {}
};

export const getEmployeeById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);

        if (!employee) {
            res.status(404).json({ message: "Empleado no encontrado" });
            return;
        }

        res.json({ data: employee });
    } catch (error) {}
};

export const createEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json({ data: employee });
    } catch (error) {
        console.log(error);
    }
};

export const updateEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);

    if (!employee) {
        res.status(404).json({ message: "Empleado no encontrado" });
        return;
    }
    await employee.update(req.body);
    await employee.save();
    res.json({ data: employee });
};
// PUT = Reemplazar todo
// PATCH = Actualizar parcialmente

export const deleteEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);

    if (!employee) {
        res.status(404).json({ message: "Empleado no encontrado" });
        return;
    }
    await employee.destroy();
    res.json({ data: "Empleado eliminado" });
};
