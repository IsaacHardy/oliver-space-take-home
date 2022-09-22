import React from "react";
import "./App.css";

import MainLayout from "./Layouts/Main";

export default function OliverTakeHome() {
  const isUser = true;

  if (isUser) {
    return <MainLayout />;
  }

  return null;
}
