import Testimonial from "@/components/Testimonial";

import Breadcrumbs from "@/components/Breadcrumbs";
const pathway = [
  {
    caption: "Home",
    url: "/",
  },
  {
    caption: "Testimonial List",
    url: "",
  },
];
const Page = () => {
  return (
    <>
      <Breadcrumbs pathway={JSON.stringify(pathway)} title="Testimonial List" />
      <Testimonial />
    </>
  );
};

export default Page;
