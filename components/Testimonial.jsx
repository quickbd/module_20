import getTestimonialList from "@/lib/getTestimonialList";

const Testimonial = async () => {
  const data = await getTestimonialList();
  return (
    <div>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
          <div className="container">
            <div className="mb-8 lg:mb-16 text-left ">
              <p className="text-[#20B15A]">Testimonial List</p>
              <h2>Check our awesome team members</h2>
            </div>
            <div className="grid grid-cols-3 m-auto gap-4">
              {data.map((item, i) => {
                return (
                  <div key={i} className="mb-4">
                    <div className="p-8 bg-white rounded shadow text-center">
                      <div
                        className="bg-no-repeat bg-left-top"
                        style={{
                          backgroundImage:
                            'url("atis-assets/elements/quote-grey.svg")',
                        }}
                      >
                        <img
                          className="mb-2 mx-auto w-12 h-12 rounded-[12px] object-cover"
                          src={item["image"]}
                          alt=""
                        />

                        <p className="mb-8 text-gray-500 leading-loose">
                          {item["msg"]}
                        </p>

                        <h4 className="mb-1 text-2xl font-bold font-heading">
                          {item["name"]}
                        </h4>
                        <p className="text-gray-500">{item["designation"]}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
