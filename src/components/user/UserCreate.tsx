import { Create, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="subscription" />
      <TextInput source="role" />
    </SimpleForm>
  </Create>
);
