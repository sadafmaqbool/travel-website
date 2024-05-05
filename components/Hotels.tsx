import React from "react";
import HotelCard from "./HotelCard";

const Hotels = () => {
  return (
    <div className="pt-[5rem] bg-gray-200 pb-[4rem]">
        <h1 className="heading">Best Hotel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem] ">
            <div data-aos="fade-left">
                <HotelCard
                 name="Hotel Nextus" 
                 city="Rajshahi" 
                 price="$123" 
                 revieNum="21" 
                 img="/img/h1.png"
                 />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
                <HotelCard
                 name="Hotel Reactive" 
                 city="Dhaka" 
                 price="$223" 
                 revieNum="31" 
                 img="/img/h2.png"
                 />
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
                <HotelCard
                 name="Hotel Typescript " 
                 city="Japan" 
                 price="$423" 
                 revieNum="51" 
                 img="/img/h3.png"
                 />
            </div>
            <div data-aos="fade-left" data-aos-delay="900">
                <HotelCard
                 name="Hotel Mangohouse" 
                 city="England" 
                 price="$523" 
                 revieNum="91" 
                 img="/img/h4.png"
                 />
            </div>
            <div data-aos="zoom-in" data-aos-delay="1200">
                <HotelCard
                 name="Hotel tailwind" 
                 city="India" 
                 price="$323" 
                 revieNum="61" 
                 img="/img/h5.png"
                 />
            </div>
            <div data-aos="fade-right" data-aos-delay="1600">
                <HotelCard
                 name="Hotel Webdev " 
                 city="USA" 
                 price="$723" 
                 revieNum="291" 
                 img="/img/h6.png"
                 />
            </div>
            

        </div>
        </div>
  )
}

export default Hotels;