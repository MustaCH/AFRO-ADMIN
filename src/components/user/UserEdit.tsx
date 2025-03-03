import { Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
  <Edit confirm="¿Estás seguro?">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="subscription" />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);
// Compare this snippet from src/components/user/UserCreate.tsx:
