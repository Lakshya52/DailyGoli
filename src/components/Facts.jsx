import React from "react";
import { Leaf, Funnel } from "lucide-react";

const Facts = () => {
  return (
    <div className="px-[100px] relative h-[80dvh] bg-(--white) flex items-center justify-between pb-10 pt-15">
      <img
        src="/images/bottleWithPills.png"
        alt="MB-360 bottle with pills"
        className="absolute w-[32%] h-auto top-5"
      />
      <div className="ml-[40%] w-[60%] h-full flex flex-col items-start justify-center gap-2">
        <div className="font-lex-reg rounded-full h-10 px-4 bg-(--color-primary) text-(--white) flex items-center justify-center">
          Facts & Benefits{" "}
        </div>
        {/* <p className="text-[40px] font-lex-reg text-(--color-primary)">✦ WELLNESS FACTS ✦</p> */}
        <div className="flex gap-4 w-full overflow-x-scroll ">
          {/* plant based */}
          <div className="h-70 min-w-80 bg-(--bg-light) rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <Leaf className="text-(--color-primary)" size={40} />
            <span className="font-lex-med text-(--color-primary) text-2xl">
              Plant Based
            </span>
            <span className="text-xl font-lex-light text-(--color-primary)">
              Made with carefully selected botanical ingredients for clean,
              natural wellness support.
            </span>
          </div>
          {/* clinically tested */}
          <div className="h-70 min-w-80 bg-(--bg-light) rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <Funnel  className="text-(--color-primary)" size={40} />
            <span className="font-lex-med text-(--color-primary) text-2xl">
              Clinically Tested
            </span>
            <span className="text-xl font-lex-light text-(--color-primary)">
              Formulated with scientifically studied ingredients backed by modern research.
            </span>
          </div>
          {/*  */}
          <div className="h-70 min-w-80 bg-(--bg-light) rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <Leaf className="text-(--color-primary)" size={40} />
            <span className="font-lex-med text-(--color-primary) text-2xl">
              Plant Based
            </span>
            <span className="text-xl font-lex-light text-(--color-primary)">
              Made with carefully selected botanical ingredients for clean,
              natural wellness support.
            </span>
          </div>
          <div className="h-70 min-w-80 bg-(--bg-light) rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <Leaf className="text-(--color-primary)" size={40} />
            <span className="font-lex-med text-(--color-primary) text-2xl">
              Plant Based
            </span>
            <span className="text-xl font-lex-light text-(--color-primary)">
              Made with carefully selected botanical ingredients for clean,
              natural wellness support.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// {ingredientsData.map((item, index) => (
//   <div
//     key={index}
//     className="flex flex-col items-center justify-center gap-2 text-center"
//   >
//     <span className="font-lex-light text-(--color-primary) text-5xl">
//       {item.amount}
//     </span>

//     <span className="font-lex-med text-(--color-primary) text-2xl">
//       {item.name}
//     </span>

//     <span className="text-xl font-lex-light text-(--color-primary)">
//       {item.desc}
//     </span>
//   </div>
// ))}

export default Facts;
