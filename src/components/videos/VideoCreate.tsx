import { Create, SimpleForm, TextInput } from "react-admin";
import * as yup from "yup";

const userSchema = yup.object({
  id: yup.string(),
  title: yup.string().required().min(3, "Mínimo 3 caracteres"),
  description: yup.string().required(),
  src: yup.string().required(),
  date: yup.string().email("Email inválido").required(),
});

export const VideoCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="src" />
      <TextInput source="date" />
    </SimpleForm>
  </Create>
);
