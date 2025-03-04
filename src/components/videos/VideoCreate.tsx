import {
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

export const VideoCreate = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />
        <FileInput source="file" accept={{ video: [".mp4", ".mov", ".avi"] }}>
          <FileField source="src" title="title" />
        </FileInput>
        <DateInput
          disabled
          source="date"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
        <ReferenceArrayInput source="actors" reference="actors">
          <SelectArrayInput optionText="nickname" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
