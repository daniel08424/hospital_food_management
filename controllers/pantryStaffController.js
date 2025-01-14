import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPantryStaff(req, res) {
    try {
        const staffList = await prisma.pantryStaff.findMany();
        res.status(200).json(staffList);
    } catch (error) {
        console.error("Error fetching pantry staff:", error);
        res.status(500).json({ error: "Failed to fetch pantry staff" });
    }
}


export async function addPantryStaff(req, res) {
    try {
        const newStaff = await prisma.pantryStaff.create({
            data: req.body,
        });
        res.status(201).json(newStaff);
    } catch (error) {
        console.error("Error adding pantry staff:", error);
        res.status(500).json({ error: "Failed to add pantry staff" });
    }
}


export async function deletePantryStaff(req, res) {
    const { id } = req.params;
    try {
        await prisma.pantryStaff.delete({
            where: { id },
        });
        res.status(200).json({ message: "Pantry staff deleted successfully" });
    } catch (error) {
        console.error("Error deleting pantry staff:", error);
        res.status(500).json({ error: "Failed to delete pantry staff" });
    }
}
