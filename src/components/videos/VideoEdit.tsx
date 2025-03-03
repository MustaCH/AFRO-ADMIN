import { DateField, Edit, SimpleForm, TextInput } from "react-admin";

export const VideoEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput disabled source="src" />
      <DateField
        source="date"
        locales="es-AR"
        options={{ day: "2-digit", month: "2-digit", year: "numeric" }}
      />
    </SimpleForm>
  </Edit>
);
