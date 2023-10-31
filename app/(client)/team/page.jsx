import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "@/components/Team";
const pathway = [
  {
    caption: "Home",
    url: "/",
  },
  {
    caption: "Team",
    url: "",
  },
];
const Page = () => {
  return (
    <>
      <Breadcrumbs pathway={JSON.stringify(pathway)} title="Team" />
      <Team />
    </>
  );
};

export default Page;
