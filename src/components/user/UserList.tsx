import {
  Datagrid,
  DeleteButton,
  DeleteWithConfirmButton,
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
      <DeleteWithConfirmButton
        confirmTitle="Borrar usuario"
        confirmContent="Seguro deseas eliminar a éste usuario?"
      />
    </Datagrid>
  </List>
);
