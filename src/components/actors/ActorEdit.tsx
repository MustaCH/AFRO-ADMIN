import {
  ArrayInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ActorEdit = () => (
  <Edit confirm="¿Estás seguro?">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="nickname" />
      <ArrayInput source="social">
        <SimpleFormIterator>
          <TextInput source="platform" label="Plataforma (ej: instagram)" />
          <TextInput source="url" label="URL" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
