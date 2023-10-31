import Breadcrumbs from "@/components/Breadcrumbs";
import Services from "@/components/Services";
const pathway = [
  {
    caption: "Home",
    url: "/",
  },
  {
    caption: "Our Services",
    url: "",
  },
];
const Page = () => {
  return (
    <>
      <Breadcrumbs pathway={JSON.stringify(pathway)} title="Our Services" />
      <Services />
    </>
  );
};

export default Page;
