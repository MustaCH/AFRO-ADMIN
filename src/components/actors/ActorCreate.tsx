import { yupResolver } from "@hookform/resolvers/yup";
import {
  Create,
  SelectField,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import * as yup from "yup";

const userSchema = yup.object({
  id: yup.string(),
  name: yup.string().required().min(3, "Mínimo 3 caracteres"),
  lastname: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email("Email inválido").required(),
  password: yup.string().required(),
  subscription: yup.string().required(),
  role: yup.string().optional(),
});

export const ActorCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="nickname" />
      <TextInput source="social" title="social media" />
    </SimpleForm>
  </Create>
);
