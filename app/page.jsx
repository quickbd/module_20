import Hero_banner from "@/components/Hero_banner";
import StatList from "@/components/StatList";
import Work_list from "@/components/Work_list";
export default function Home() {
  return (
    <main className="  items-center justify-between">
      <Hero_banner />

      <Work_list />
      <StatList />
      <Featured_post />
    </main>
  );
}
