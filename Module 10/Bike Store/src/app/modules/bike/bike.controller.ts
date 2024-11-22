import { Request, Response } from 'express';
import {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
} from './bike.service';

export const createBikeHandler = async (req: Request, res: Response) => {
  try {
    const bike = await createBike(req.body);
    res.status(201).json({
      message: 'Bike created successfully',
      success: true,
      data: bike,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

export const getAllBikesHandler = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const bikes = await getAllBikes(searchTerm);
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      status: true,
      data: bikes,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

export const getBikeByIdHandler = async (req: Request, res: Response) => {
  try {
    const bike = await getBikeById(req.params.productId);
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found', status: false });
    }
    res.status(200).json({
      message: 'Bike retrieved successfully',
      status: true,
      data: bike,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

export const updateBikeHandler = async (req: Request, res: Response) => {
  try {
    const bike = await updateBike(req.params.productId, req.body);
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found', status: false });
    }
    res.status(200).json({
      message: 'Bike updated successfully',
      status: true,
      data: bike,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

export const deleteBikeHandler = async (req: Request, res: Response) => {
  try {
    await deleteBike(req.params.productId);
    res.status(200).json({
      message: 'Bike deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};
