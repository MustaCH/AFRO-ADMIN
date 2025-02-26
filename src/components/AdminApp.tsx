"use client";

import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./user/UserList";
import { LuUsersRound, LuVideo } from "react-icons/lu";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import dataProvider from "./dataProvider";


const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      icon={LuUsersRound}
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      recordRepresentation="name"
    />
    {/* <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default AdminApp;
