import {
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  TextField,
} from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="subscription" />
      <TextField source="role" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
