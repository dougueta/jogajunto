import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Campo obrigatório'),
  nickname: Yup.string(),
  isGoalkeeper: Yup.string(),
});
