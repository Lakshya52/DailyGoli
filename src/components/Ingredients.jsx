import React from "react";

const ingredientsData = [
  {
    amount: "296mg",
    name: "CQR-300",
    desc: (
      <>
        Patented extract for metabolic <br /> health and weight management.
      </>
    ),
  },
  {
    amount: "296mg",
    name: "Berberine HCl",
    desc: (
      <>
        Blood sugar balance and <br /> metabolic function support.
      </>
    ),
  },
  {
    amount: "148mg",
    name: "Eriocitrin (Citrus Fruit)",
    desc: (
      <>
        GLP-1 pathway support and <br /> metabolic efficiency.
      </>
    ),
  },
  {
    amount: "148mg",
    name: "Ceylon Cinnamon",
    desc: (
      <>
        (10:1) Purest cinnamon for blood <br /> sugar balance and metabolism.
      </>
    ),
  },
  {
    amount: "112mg",
    name: "Inulin (Chicory Root)",
    desc: (
      <>
        Prebiotic fiber for gut <br /> health and satiety.
      </>
    ),
  },
  {
    amount: "300mcg",
    name: "Chromium Picolinate",
    desc: (
      <>
        Gold-standard for appetite <br /> and cravings control.
      </>
    ),
  },
];

const Ingredients = () => {
  return (
    // <div className="px-[100px] relative h-[90dvh] flex items-center justify-between py-10">
      
    //   <div className="mr-[40%] w-[60%] h-full flex flex-col items-end justify-end gap-2">
    //     <p className="text-[65px] font-lex-reg text-(--color-primary)">
    //       ✦ INGREDIENTS
    //     </p>
    //     <div className="flex gap-4 w-full overflow-x-scroll ">
    //       <div className="h-70 min-w-80 bg-(--white) rounded-2xl"></div>
    //       <div className="h-70 min-w-80 bg-(--white) rounded-2xl"></div>
    //       <div className="h-70 min-w-80 bg-(--white) rounded-2xl"></div>
    //       <div className="h-70 min-w-80 bg-(--white) rounded-2xl"></div>
    //     </div>
    //   </div>
    //   <img
    //     src="/images/Pill.png"
    //     alt="MB-360 pill"
    //     className="absolute w-[20%] h-auto top-5 right-[150px] mt-10"
    //   />
    // </div>   

    <>
      <div id="ingredients" className="min-h-dvh py-30  flex flex-col items-center justify-center gap-4 px-[100px]">
        <div className="flex flex-col items-center justify-center gap-0  ">

        <div className="font-lex-reg w-fit rounded-full h-10 px-4 bg-(--color-primary) text-(--white) flex items-center justify-center">Ingredients</div>
        <p className="text-(--color-primary) text-[65px] font-lex-reg">
          ✦ In The Pill ✦
        </p>
        </div>
        <div className="h-[90dvh] w-full bg-(--white) rounded-2xl grid grid-cols-3 grid-rows-2 p-10 gap-5">
          {ingredientsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <span className="font-lex-reg text-(--color-primary) text-5xl">
                {item.amount}
              </span>

              <span className="font-lex-med text-(--color-primary) text-2xl">
                {item.name}
              </span>

              <span className="text-xl font-lex-light text-(--color-primary)">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ingredients;