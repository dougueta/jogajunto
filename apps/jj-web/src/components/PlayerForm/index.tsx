import React from 'react';
import { useFormik, FormikHelpers } from 'formik';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import FormField from 'components/FormField';
import { validationSchema } from './validationSchema';

interface PlayerFormProps {
  initialValues: PlayerForm;
  onSubmit: (
    values: PlayerForm,
    formikHelpers: FormikHelpers<PlayerForm>
  ) => void;
}

interface PlayerForm {
  firstName: string;
  nickName: string;
  // isGoalkeeper?: boolean
}

// const PlayerForm: React.FC<PlayerFormProps> = ({ initialValues, onSubmit }) => {

//   return (
//     <Card>
//         <CardHeader title="Inserir Jogador"></CardHeader>
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//         {() => (
//             <Form>
//             <CardContent>
//                 <FormField label="Nome" name="firstName" />
//                 <FormField label="Apelido" name="nickname" />
//                 {/* <FormField label="isGoalkeeper" name="É Goleiro?" /> */}
//             </CardContent>
//             <CardActions>
//                 <Button variant="contained" color="primary" type="submit">
//                 Adicionar ao Fut
//                 </Button>
//             </CardActions>
//             </Form>
//         )}
//         </Formik>
//     </Card>
//   );
// };

// TODO: criar componente generico para TextField e Form
// para que seja possivel re-aproveitalos em outros cadastratos passando as configs via props

const PlayerForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      nickname: '',
      isGoalKeeper: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('value', values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="nickname"
          name="nickname"
          label="nickname"
          // type="nickname"
          value={formik.values.nickname}
          onChange={formik.handleChange}
          error={formik.touched.nickname && Boolean(formik.errors.nickname)}
          helperText={formik.touched.nickname && formik.errors.nickname}
        />
        <FormControl>
          <RadioGroup>
            <FormControlLabel
              id="isGoalKeeper"
              name="isGoalKeeper"
              value={formik.values.isGoalKeeper}
              control={<Radio />}
              label="Sim"
            />
            <FormControlLabel
              id="isGoalKeeper"
              name="isGoalKeeper"
              value={formik.values.isGoalKeeper}
              control={<Radio />}
              label="Não"
            />
          </RadioGroup>
        </FormControl>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PlayerForm;
