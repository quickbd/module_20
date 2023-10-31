import React from "react";
import AllProject from "@/components/AllProject";
import Breadcrumbs from "@/components/Breadcrumbs";
const pathway = [
  {
    caption: "Home",
    url: "/",
  },
  {
    caption: "Projects",
    url: "",
  },
];

const Page = () => {
  return (
    <>
      <Breadcrumbs pathway={JSON.stringify(pathway)} title="Our Projects" />

      <AllProject />
    </>
  );
};

export default Page;
