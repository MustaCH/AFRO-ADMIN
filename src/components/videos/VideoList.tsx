import { Datagrid, List, TextField } from "react-admin";

export const VideoList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="src" />
      <TextField source="date" />
      <TextField source="score" />
    </Datagrid>
  </List>
);
