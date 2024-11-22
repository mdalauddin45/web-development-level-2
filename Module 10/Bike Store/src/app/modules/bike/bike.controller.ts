import { Request, Response } from "express";
import { BikeServices } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  try {
    const { bike: bikeData } = req.body;

    const result = await BikeServices.createBikeIntoDB(bikeData);

    res.status(200).json({
      success: true,
      message: "Bike is created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const BikeControllers = {
  createBike,
};
