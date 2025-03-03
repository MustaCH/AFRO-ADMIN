import {
  ArrayField,
  Datagrid,
  DeleteButton,
  DeleteWithConfirmButton,
  EditButton,
  EmailField,
  List,
  TextField,
} from "react-admin";

export const ActorList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="lastname" />
      <TextField source="nickname" />
      <TextField source="social" />
      <TextField source="id" />
      <EditButton />
      <DeleteWithConfirmButton
        confirmTitle="Borrar usuario"
        confirmContent="Seguro deseas eliminar a éste usuario?"
      />
    </Datagrid>
  </List>
);
