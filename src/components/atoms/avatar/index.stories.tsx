import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Avatar from "./";

export const basicAvatar = () => (
  <Avatar userId={`de13f57b-aa19-470c-9ad3-c09f0e6a215b`} />
);

export default {
  component: Avatar,
  decorators: [withKnobs],
  title: "atoms/Avatar",
};
