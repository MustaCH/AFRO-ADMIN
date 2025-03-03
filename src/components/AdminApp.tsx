"use client";

import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import { UserList } from "./user/UserList";
import { LuSquareUserRound, LuUsersRound, LuVideo } from "react-icons/lu";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { VideoList } from "./videos/VideoList";
import { VideoEdit } from "./videos/VideoEdit";
import { VideoCreate } from "./videos/VideoCreate";
import dataProvider from "./dataProvider";
import { ActorList } from "./actors/ActorList";
import { ActorEdit } from "./actors/ActorEdit";
import { ActorCreate } from "./actors/ActorCreate";

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
    <Resource
      name="actors"
      icon={LuSquareUserRound}
      list={ActorList}
      edit={ActorEdit}
      create={ActorCreate}
    />
  </Admin>
);

export default AdminApp;
