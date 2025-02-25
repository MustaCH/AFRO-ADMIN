"use client";

import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./user/UserList";
import { LuUsersRound, LuVideo } from "react-icons/lu";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      icon={LuUsersRound}
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      recordRepresentation="name"
    />
    <Resource
      name="posts"
      icon={LuVideo}
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    {/* <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default AdminApp;
