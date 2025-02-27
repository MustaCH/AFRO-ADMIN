import {
  Create,
  SelectField,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UserCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="password" />
      <SelectInput
        source="subscription"
        defaultValue="NONE"
        choices={[
          { id: "NONE", name: "NONE" },
          { id: "BASIC", name: "BASIC" },
          { id: "SILVER", name: "SILVER" },
          { id: "GOLD", name: "GOLD" },
        ]}
      />
      <SelectInput
        source="role"
        defaultValue="USER"
        choices={[
          { id: "USER", name: "USER" },
          { id: "ADMIN", name: "ADMIN" },
        ]}
      />
    </SimpleForm>
  </Create>
);
