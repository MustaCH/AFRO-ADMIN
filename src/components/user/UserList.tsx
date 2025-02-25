import { Datagrid, EmailField, List, TextField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="subscription" />
    </Datagrid>
  </List>
);
