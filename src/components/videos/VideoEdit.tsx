import { DateField, Edit, ReferenceArrayInput, SelectArrayInput, SimpleForm, TextField, TextInput } from "react-admin";

export const VideoEdit = () => (
  <Edit>
    <SimpleForm>
      <div className="flex justify-between w-full px-2 mb-5">
        <TextField source="id" sx={{ opacity: "0.6" }} />
        <DateField
          source="date"
          locales="es-AR"
          options={{ day: "2-digit", month: "2-digit", year: "numeric" }}
        />
      </div>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput disabled source="src" />
      <TextInput source="category" />
      <ReferenceArrayInput source="actors" reference="actors">
        <SelectArrayInput optionText="nickname" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);
