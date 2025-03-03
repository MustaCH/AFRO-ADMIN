import {
  Datagrid,
  DateField,
  EditButton,
  List,
  TextField,
  ImageField,
} from "react-admin";

export const VideoList = () => (
  <List>
    <Datagrid>
      <ImageField
        source="thumbnail"
        title=" "
        sx={{ width: 100, height: "auto" }}
      />
      <TextField source="title" />
      <TextField source="description" />
      <DateField
        source="date"
        locales="es-AR"
        options={{ day: "2-digit", month: "2-digit", year: "numeric" }}
      />
      <TextField source="score" />
      <TextField source="id" />
      <EditButton />
    </Datagrid>
  </List>
);
