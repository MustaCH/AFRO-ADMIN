import { Edit, SimpleForm, TextInput } from "react-admin";

export const VideoEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput disabled source="src" />
      <TextInput disabled source="date" />
    </SimpleForm>
  </Edit>
);
