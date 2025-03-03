import { Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ActorEdit = () => (
  <Edit confirm="¿Estás seguro?">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="nickname" />
      <SelectInput source="social" />
    </SimpleForm>
  </Edit>
);
// Compare this snippet from src/components/user/UserCreate.tsx:
