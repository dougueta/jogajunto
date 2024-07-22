import React from 'react';
import { Field, FieldProps } from 'formik';
import TextField from '@mui/material/TextField';

//TODO: estudar uma forma de compartilhar os tipos em comum no contrato back/front
interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
}) => (
  <Field
    label={label}
    variant="outlined"
    fullWidth
    name={name}
    type={type}
    component={TextField}
  />
);

export default FormField;
