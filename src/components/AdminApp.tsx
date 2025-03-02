"use client";

import { Admin, Resource } from "react-admin";
import { UserList } from "./user/UserList";
import { LuUsersRound, LuVideo } from "react-icons/lu";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { VideoList } from "./videos/VideoList";
import { VideoEdit } from "./videos/VideoEdit";
import { VideoCreate } from "./videos/VideoCreate";
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
    <Resource
      name="videos"
      icon={LuVideo}
      list={VideoList}
      edit={VideoEdit}
      create={VideoCreate}
      recordRepresentation="name"
    />
    {/* <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default AdminApp;
