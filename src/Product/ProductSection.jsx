import React from "react";
import firstproduct from "../assets/first-product-image.jpg";
import secondproduct from "../assets/second-product-image.jpg";
import thirdproduct from "../assets/third-product-image.jpg";
import fourthproduct from "../assets/fourth-product-image.jpg";
/* import fifthproduct from "../assets/fifth-product-image.jpg";
import sixthproduct from "../assets/sixth-product-image.jpg"; */

const products = [
  {
    imageSrc: firstproduct,
    title: "Apartment in London, Hoxton",
    tag: "2 bedrooms • 2 bathrooms • 800 ft²",
    pricing: "£2,499  -  £5,999  ",
  },
  {
    imageSrc: secondproduct,
    title: "600 California",
    tag: "2 bedrooms • 2 bathrooms • 800 ft²",
    pricing: "£2,499  -  £5,999  ",
  },
  {
    imageSrc: thirdproduct,
    title: "Independent house London,P..",
    tag: "2 bedrooms • 2 bathrooms • 800 ft²",
    pricing: "£2,499  -  £5,999  ",
  },
  {
    imageSrc: fourthproduct,
    title: "1 bedroom flat, London",
    tag: "2 bedrooms • 2 bathrooms • 800 ft²",
    pricing: "£2,499  -  £5,999  ",
  },
  {
    imageSrc: firstproduct,
    title: "Two Embarcadero",
    tag: "2 bedrooms • 2 bathrooms • 800 ft²",
    pricing: "£2,499  -  £5,999  ",
  },
  {
    imageSrc: secondproduct,
    title: "Two Embarcadero",
    tag: "2 bedrooms • 2 bathrooms • 800 ft²",
    pricing: "£2,499  -  £5,999  ",
  },
];

const ProductCard = ({ imageSrc, title, tag, pricing }) => {
  return (
    <div className="product-card-item drop-shadow-sm shadow-inner border p-5 bg-white rounded-lg flex flex-col justify-start gap-y-4">
      <div className="product-card-item-image overflow-hidden bg-[#E5E6E9] w-fit shadow-sm rounded-xl">
        <img
          className="rounded-xl rounded-b-none hover:scale-[1.03] transition duration-200 cursor-pointer"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="product-card-item-content flex flex-col justify-start gap-y-2">
        <h4 className="text-xl font-bold text-black text-center lg:text-left">
          {title}
        </h4>
        <p className="text-[#24242480] text-base">{tag}</p>
        <p className="text-black font-semibold text-base text-center lg:text-left">
          {pricing}
        </p>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="product__section max-w-5xl mx-auto py-10 px-10 xl:px-0">
      <div className="product__headline flex flex-col gap-y-2">
        <div className="flex flex-col items-center gap-y-3.5">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold leading-[1.15] text-black">
            Find new best workplaces
          </h3>
        </div>
        <div className="product-card grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
