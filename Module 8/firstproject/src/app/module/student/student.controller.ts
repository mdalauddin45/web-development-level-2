import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { error } from 'console';
import Joi from 'joi';
import studentValidationSchema from '../student/student.joi.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const {error, value}= studentValidationSchema.validate(studentData);
    console.log(error, value);
    if(error){
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.details,
      });
    }
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
