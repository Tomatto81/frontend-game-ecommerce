import React from "react";
import ProductCard from "./helper/ProductCard";

const BestSeller = () => {
  return (
    <div className="bg-gray-900 pt-[4rem] pb-[3rem]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Best Seller
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-500">
          View all products
        </button>
      </div>
      <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ProductCard
            title="Call of Duty"
            actualPrice="$59.99"
            discountPrice="$49.99"
            category="Shooting"
            image="/images/g1.jpg"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-anchor-placement="top-center"
        >
          <ProductCard
            title="Super Cars 2024"
            actualPrice="$79.99"
            discountPrice="$65.99"
            category="Racing"
            image="/images/g7.jpg"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-anchor-placement="top-center"
        >
          <ProductCard
            title="Wild Wolf"
            actualPrice="$39.99"
            discountPrice="$29.99"
            category="Adventure"
            image="/images/g8.jpg"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="750"
          data-aos-anchor-placement="top-center"
        >
          <ProductCard
            title="Assasin's Creed"
            actualPrice="$49.99"
            discountPrice="$39.99"
            category="Action"
            image="/images/g5.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
