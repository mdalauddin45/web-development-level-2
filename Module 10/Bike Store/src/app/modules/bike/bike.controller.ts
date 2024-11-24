import { Request, Response } from "express";
import { BikeServices } from "./bike.service";
import { IBike, IOrder } from "./bike.interface";
import { bikeValidation } from "./bike.validation";

const createBike = async (req: Request, res: Response) => {
  try {
    const { bike: bikeData } = req.body;

    const zodParsedData = bikeValidation.bikeValidationSchema.parse(bikeData);
    const result = await BikeServices.createBikeIntoDB(zodParsedData);

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
const getAllBikes = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    let result;
    if (searchTerm) {
      result = await BikeServices.getBikesBySearchTerm(searchTerm as string);
    } else {
      result = await BikeServices.getAllBikeFromDB();
    }
    res.status(200).json({
      success: true,
      message: "Bikes retrieved successfully",
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

const getSingleBike = async (req: Request, res: Response) => {
  try {
    const bikeId = req.params.id;
    const result = await BikeServices.getSingleBikeFromDB(bikeId);

    res.status(200).json({
      success: true,
      message: "Bike is retrieved succesfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};
const updateBike = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedBike = await BikeServices.updateBikeInDB(id, updateData);
    res.status(200).json({
      success: true,
      message: "Bike updated successfully",
      data: updatedBike,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

const deleteBike = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await BikeServices.deleteBikeFromDB(id);

    res.status(200).json({
      success: true,
      message: "Bike deleted succesfully",
      data: {},
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};
const placeOrder = async (req: Request<{}, {}, IOrder>, res: Response) => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    const validatedData = bikeValidation.createOrderSchema.parse({
      email,
      product,
      quantity,
      totalPrice,
    });

    const order = await BikeServices.placeOrder(
      validatedData.email,
      validatedData.product,
      validatedData.quantity,
      validatedData.totalPrice
    );

    // const zodParsedData = bikeValidation.createOrderSchema.parse({ email, product, quantity, totalPrice } );
    // const order = await BikeServices.placeOrder(email, product, quantity, totalPrice);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};
const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await BikeServices.calculateTotalRevenue();

    res.status(200).json({
      success: true,
      message: "Revenue calculated successfully",
      data: {
        totalRevenue,
      },
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
  getAllBikes,
  getSingleBike,
  deleteBike,
  updateBike,
  placeOrder,
  getRevenue,
};
