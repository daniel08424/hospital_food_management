import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPatients(req, res) {
    try {
        const patients = await prisma.patient.findMany();
        res.status(200).json(patients);
    } catch (error) {
        console.error("Error fetching patients:", error);
        res.status(500).json({ error: "Failed to fetch patients" });
    }
}

export async function addPatient(req, res) {
    try {
        const data = req.body;
        const newPatient = await prisma.patient.create({ data });
        res.status(201).json(newPatient);
    } catch (error) {
        console.error("Error adding patient:", error);
        res.status(500).json({ error: "Failed to add patient" });
    }
}

export async function deletePatient(req, res) {
    const { id } = req.params;
    try {
        await prisma.patient.delete({
            where: { id },
        });
        res.status(200).json({ message: "Patient deleted successfully" });
    } catch (error) {
        console.error("Error deleting patient:", error);
        res.status(500).json({ error: "Failed to delete patient" });
    }
}
