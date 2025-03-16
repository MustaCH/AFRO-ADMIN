import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export const ActorCreate = () => (
  <Create redirect="list">
    <SimpleForm>
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
  </Create>
);
