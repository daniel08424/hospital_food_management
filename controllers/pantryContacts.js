import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addDeliveryPersonnel = async (req, res) => {
  const { name, contactInfo, otherDetails,patientName,mealType,status,roomId } = req.body;

  try {
    const newPersonnel = await prisma.deliveryPersonnel.create({
      data: {
        name,
        contactInfo,
        otherDetails,
        patientName,
        mealType,
        status,
        roomId
      }
    });
    res.json(newPersonnel);
  } catch (error) {
    res.status(400).json({ message: 'Error adding delivery personnel', error: error.message });
  }
};

export const getDeliveryPersonnel = async(req, res)=> {
    try {
        const dietCharts = await prisma.deliveryPersonnel.findMany();
        res.status(200).json(dietCharts);
    } catch (error) {
        console.error("Error fetching diet charts:", error);
        res.status(500).json({ error: "Failed to fetch diet charts" });
    }
}

export const deleteDeliveryPersonnel = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.deliveryPersonnel.delete({
      where: { id }
    });
    res.json({ message: "Delivery Personnel deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting delivery personnel" });
  }
};

export const editDeliveryPersonnel = async (req, res) => {
  const { id } = req.params; 
  const updateData = { ...req.body }; 

 
  delete updateData.id;
  delete updateData.createdAt;

  try {
    const updatedPersonnel = await prisma.deliveryPersonnel.update({
      where: {
        id: id,
      },
      data: updateData,
    });

    res.status(200).json(updatedPersonnel);
  } catch (error) {
    console.error('Error updating delivery personnel:', error);
    res.status(500).json({ message: 'Failed to update delivery personnel', error });
  }
};

