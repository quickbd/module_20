import getServices from "@/lib/getServices";

const Services = async () => {
  const data = await getServices();

  return (
    <div>
      <section>
        <div className="contanier">
          <div className="py-20 bg-gray-50 radius-for-skewed">
            <div className="container mx-auto">
              <div className="mb-8 lg:mb-16 text-left ">
                <p className="text-[#20B15A]">Our All Services</p>
                <h2>We Provide Best Web Design Services</h2>
              </div>
              <div className="grid  grid-cols-2 gap-5 ">
                {data.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="block  p-6 bg-white border border-gray-200 rounded-[12px] shadow 
                hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
                    >
                      <h2 className="mb-3 text-[16px] text-bold uppercase">
                        {item.title}
                      </h2>
                      <p className="mb-5">{item.des}</p>
                      <a target="_blank" href={item["live"]}>
                        <img
                          className="h-80 w-full mx-auto object-cover rounded-[12px]"
                          src={item["image1"]}
                          alt=""
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
