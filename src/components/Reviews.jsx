import React from 'react'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'

const reviews = [
  {
    text: "3 mahine se MB-360 le raha hoon. Cravings bahut kam ho gayi hai. Berberine wala combination kaafi effective hai. Packaging bhi premium lagti hai.",
    name: "Rahul S. — Delhi NCR"
  },
  {
    text: "3 mahine se MB-360 le raha hoon. Cravings bahut kam ho gayi hai. Berberine wala combination kaafi effective hai. Packaging bhi premium lagti hai.",
    name: "Rahul S. — Delhi NCR"
  }
]

const Reviews = () => {
  return (
    <div id='reviews' className='min-h-dvh flex flex-col items-center gap-10 justify-center font-lex-reg bg-(--white) py-20 px-[100px]' >
       <div className='flex flex-col items-center justify-center' > 
            <div className="font-lex-reg rounded-full h-10 px-4 bg-(--color-primary) text-(--white) flex items-center justify-center">Reviews</div>
            <h1 className='text-[65px] text-(--color-primary) font-lex-reg ' >Join 1000+ Happy Customers</h1>
        </div>

        <div className="flex items-center justify-center w-full gap-6" >

          {/* 4.8 reviews div */}
          <div className="w-1/3 h-90 flex flex-col justify-between bg-(--color-primary) text-(--accent) rounded-2xl p-10" >

            <div className="flex items-end justify-between" >
              <h1 className="text-5xl">4.8</h1>

              <div className="flex gap-1">
                {[...Array(5)].map((_,i)=>(
                  <Star key={i} fill="currentColor"/>
                ))}
              </div>
            </div>

            <p className="text-xl my-2">Based on 100+ verified reviews</p>

            <div className="flex flex-col gap-2">

              {[
                {star:5, percent:82},
                {star:4, percent:12},
                {star:3, percent:4},
                {star:2, percent:1},
                {star:1, percent:1}
              ].map((item,i)=>(
                <div key={i} className="flex items-center justify-between">
                  <span>{item.star}</span>

                  <span className="w-[80%] h-1 bg-(--white) rounded-full flex items-center justify-start">
                    <span className="h-full bg-(--accent)" style={{width:`${item.percent}%`}}></span>
                  </span>

                  <span>{item.percent}%</span>
                </div>
              ))}

            </div>

          </div>


          {/* sample reviews */}
          <div className="flex items-center justify-center gap-4 w-2/3 h-90">

            {reviews.map((review,i)=>(
              <div key={i} className="h-full w-1/2 bg-(--bg-light) rounded-2xl p-8 flex flex-col justify-between">

                <div>
                  <Quote size={40} className="text-(--color-primary) mb-4 rotate-180"/>

                  <div className="flex gap-1 mb-3 text-(--color-primary)">
                    {[...Array(5)].map((_,i)=>(
                      <Star key={i} size={18} fill="currentColor"/>
                    ))}
                  </div>

                  <p className="text-(--color-primary)">
                    {review.text}
                  </p>
                </div>

                <p className="text-(--color-primary) mt-4">
                  {review.name}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* arrows */}
        <div className="flex gap-3 self-end ">

          <div className="h-10 w-10 rounded-full bg-(--bg-light) flex items-center justify-center cursor-pointer hover:bg-(--color-primary) hover:text-(--white) transition-all duration-300">
            <ArrowLeft size={18}/>
          </div>

          <div className="h-10 w-10 rounded-full bg-(--bg-light) flex items-center justify-center cursor-pointer hover:bg-(--color-primary) hover:text-(--white) transition-all duration-300">
            <ArrowRight size={18}/>
          </div>

        </div>

    </div>
  )
}

export default Reviews