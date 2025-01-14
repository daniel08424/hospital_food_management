import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function getDietCharts(req, res) {
    try {
        const dietCharts = await prisma.dietChart.findMany();
        res.status(200).json(dietCharts);
    } catch (error) {
        console.error("Error fetching diet charts:", error);
        res.status(500).json({ error: "Failed to fetch diet charts" });
    }
}

export async function addDietChart(req, res) {
    try {
        const newChart = await prisma.dietChart.create({
            data: req.body,
        });
        res.status(201).json(newChart);
    } catch (error) {
        console.error("Error adding diet chart:", error);
        res.status(500).json({ error: "Failed to add diet chart" });
    }
}

export async function deleteDietChart(req, res) {
    const { id } = req.params;
    try {
        await prisma.dietChart.delete({
            where: { id },
        });
        res.status(200).json({ message: "Diet chart deleted successfully" });
    } catch (error) {
        console.error("Error deleting diet chart:", error);
        res.status(500).json({ error: "Failed to delete diet chart" });
    }
}
