import Joi from 'joi';

// UserName schema
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.base': 'First name must be a string.',
      'string.max': 'First name must not exceed 20 characters.',
      'string.empty': 'First name is required.',
      'any.required': 'First name is required.',
      'string.pattern.base': 'First name must be capitalized.',
    }),
  middleName: Joi.string().allow('', null), // Optional
  lastName: Joi.string()
    .required()
    .regex(/^[A-Za-z]+$/)
    .messages({
      'string.base': 'Last name must be a string.',
      'string.empty': 'Last name is required.',
      'any.required': 'Last name is required.',
      'string.pattern.base': 'Last name must only contain alphabets.',
    }),
});

// Guardian schema
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.base': 'Father name must be a string.',
    'string.empty': 'Father name is required.',
    'any.required': 'Father name is required.',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.base': 'Father occupation must be a string.',
    'string.empty': 'Father occupation is required.',
    'any.required': 'Father occupation is required.',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.base': 'Father contact number must be a string.',
    'string.empty': 'Father contact number is required.',
    'any.required': 'Father contact number is required.',
  }),
  motherName: Joi.string().required().messages({
    'string.base': 'Mother name must be a string.',
    'string.empty': 'Mother name is required.',
    'any.required': 'Mother name is required.',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.base': 'Mother occupation must be a string.',
    'string.empty': 'Mother occupation is required.',
    'any.required': 'Mother occupation is required.',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.base': 'Mother contact number must be a string.',
    'string.empty': 'Mother contact number is required.',
    'any.required': 'Mother contact number is required.',
  }),
});

// Local Guardian schema
const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'any.required': 'Name is required.',
  }),
  occupation: Joi.string().required().messages({
    'string.base': 'Occupation must be a string.',
    'string.empty': 'Occupation is required.',
    'any.required': 'Occupation is required.',
  }),
  contactNo: Joi.string().required().messages({
    'string.base': 'Contact number must be a string.',
    'string.empty': 'Contact number is required.',
    'any.required': 'Contact number is required.',
  }),
  address: Joi.string().required().messages({
    'string.base': 'Address must be a string.',
    'string.empty': 'Address is required.',
    'any.required': 'Address is required.',
  }),
});

// Main Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.base': 'ID must be a string.',
    'string.empty': 'ID is required.',
    'any.required': 'ID is required.',
  }),
  name: userNameSchema.required().messages({
    'object.base': 'Name must be an object.',
    'any.required': 'Name is required.',
  }),
  gender: Joi.string()
    .valid('male', 'female')
    .required()
    .messages({
      'string.base': 'Gender must be a string.',
      'any.only': 'Gender must be one of [male, female].',
      'any.required': 'Gender is required.',
    }),
  dateOfBirth: Joi.string().isoDate().messages({
    'string.base': 'Date of birth must be a string.',
    'string.isoDate': 'Date of birth must be in ISO 8601 format.',
  }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email must be a string.',
      'string.email': 'Email must be a valid email address.',
      'string.empty': 'Email is required.',
      'any.required': 'Email is required.',
    }),
  contactNo: Joi.string().required().messages({
    'string.base': 'Contact number must be a string.',
    'string.empty': 'Contact number is required.',
    'any.required': 'Contact number is required.',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.base': 'Emergency contact number must be a string.',
    'string.empty': 'Emergency contact number is required.',
    'any.required': 'Emergency contact number is required.',
  }),
  bloogGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'string.base': 'Blood group must be a string.',
      'any.only': 'Blood group must be one of [A+, A-, B+, B-, AB+, AB-, O+, O-].',
      'any.required': 'Blood group is required.',
    }),
  presentAddress: Joi.string().required().messages({
    'string.base': 'Present address must be a string.',
    'string.empty': 'Present address is required.',
    'any.required': 'Present address is required.',
  }),
  permanentAddres: Joi.string().required().messages({
    'string.base': 'Permanent address must be a string.',
    'string.empty': 'Permanent address is required.',
    'any.required': 'Permanent address is required.',
  }),
  guardian: guardianSchema.required().messages({
    'object.base': 'Guardian must be an object.',
    'any.required': 'Guardian is required.',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'object.base': 'Local guardian must be an object.',
    'any.required': 'Local guardian is required.',
  }),
  profileImg: Joi.string().uri().optional().messages({
    'string.base': 'Profile image URL must be a string.',
    'string.uri': 'Profile image must be a valid URL.',
  }),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'string.base': 'Active status must be a string.',
      'any.only': 'Active status must be one of [active, blocked].',
    }),
});

export default studentValidationSchema;
