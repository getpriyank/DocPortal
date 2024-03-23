import { ArrowRightOutlined } from "@ant-design/icons";

const Sample = () => {
  return (
    <div>
      {/* <div className="mt-16 bg-red-400 pb-3">
        <StaticText text={"Sample Header"} />
      </div> */}
      <div className="pl-7 text-black mt-16 z-30 p-10 ">
        <h1 className=" text-5xl font-bold mb-7">Heading</h1>
        <h2 className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit
          mollitia minima a, vel qui voluptas. Impedit incidunt, ratione animi
          assumenda harum, quas recusandae totam earum quo, quasi commodi
          officia.
        </h2>
      </div>
      <div className="bg-[#6BBFBC] ">
        <div className="flex flex-row">
          <div className="w-2/3 pt-14 pl-7 pr-10">
            <h1 className="text-4xl text-[#342E39] font-bold mb-4">
              Banking Services
            </h1>
            <div className="flex flex-row">
              <p className="text-xl font-normal w-2/3 pr-3 text-[#342E39]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos molestias beatae reiciendis veniam, animi
                consequatur vitae perferendis et. Aspernatur quae delectus
                adipisci soluta. A dolor expedita maxime voluptas quasi sequi.
              </p>
              <div className="w-1/3">
                <span className="text-xl text-[#342E39] font-normal">
                  Our offerings
                </span>
                <ul className="mt-3">
                  <h3 className="font-bold">
                    <span className="mr-2 ext-[#342E39]">
                      Find our website here
                    </span>
                    <a href={""} target="_blank" rel="noreferrer">
                      <ArrowRightOutlined
                        style={{
                          color: "#342E39",
                          fontSize: "20px",
                        }}
                      />
                    </a>
                  </h3>
                </ul>
              </div>
            </div>
            <button className="bg-white text-black font-bold rounded-full px-5 py-2 my-6">
              Learn more
            </button>
          </div>
          <div className="w-1/3">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
              alt="laptop image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
