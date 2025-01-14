import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMeals = async (req, res) => {
  try {
    const meals = await prisma.mealTracking.findMany();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Error fetching meals" });
  }
};

export const addMeal = async (req, res) => {
  
  try {
    const newMeal = await prisma.mealTracking.create({
      data: req.body
    });
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(500).json({ error: "Error adding meal" });
  }
};

export const deleteMeal = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.mealTracking.delete({
      where: { id }
    });
    res.json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting meal" });
  }
};

export const updateMeals = async (req, res) => {
  const { id } = req.params;
  const { status, deliveryTime } = req.body;

  try {
    const updatedMeal = await prisma.mealTracking.update({
      where: { id: id },
      data: { status, deliveryTime},
    });
    res.json(updatedMeal);
  } catch (error) {
    res.status(400).json({ message: 'Error updating meal', error: error.message });
  }
};



