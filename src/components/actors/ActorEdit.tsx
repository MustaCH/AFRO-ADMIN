import { Edit, SimpleForm, TextInput } from "react-admin";

export const ActorEdit = () => (
  <Edit confirm="¿Estás seguro?">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="nickname" />
    </SimpleForm>
  </Edit>
);
