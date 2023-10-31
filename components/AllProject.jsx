import getAllProjects from "@/lib/getAllProjects";

const AllProject = async () => {
  const data = await getAllProjects();

  return (
    <section>
      <div className="container  mx-auto">
        <div className="mb-8 lg:mb-16 text-left ">
          <p className="text-[#20B15A]">All Project</p>
          <h2>
            Better Agency/SEO Solution At <br />
            Your Fingertips
          </h2>
        </div>
        <div className="grid grid-cols-2 m-auto gap-5">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="block  p-6 bg-white border border-gray-200 rounded-[12px] shadow 
                hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
              >
                <a target="_blank" href={item["live"]}>
                  <img
                    className="h-80 w-full mx-auto object-cover rounded-[12px]"
                    src={item["image"]}
                    alt=""
                  />
                </a>
                <h2 className="mt-5 text-[14px]">{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AllProject;
