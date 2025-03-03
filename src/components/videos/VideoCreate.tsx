import {
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
} from "react-admin";
import { useNotify, useRedirect } from "react-admin";

export const VideoCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />
        <FileInput source="file" accept={{ video: [".mp4", ".mov", ".avi"] }}>
          <FileField source="src" title="title" />
        </FileInput>
        <TextInput source="date" />
      </SimpleForm>
    </Create>
  );
};
