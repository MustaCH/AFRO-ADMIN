import {
  ArrayField,
  Datagrid,
  DeleteWithConfirmButton,
  EditButton,
  EmailField,
  List,
  SingleFieldList,
  TextField,
  UrlField,
} from "react-admin";

export const ActorList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="lastname" />
      <TextField source="nickname" />
      <TextField source="id" />
      <EditButton />
      <DeleteWithConfirmButton
        confirmTitle="Borrar usuario"
        confirmContent="Seguro deseas eliminar a este usuario?"
      />
    </Datagrid>
  </List>
);
