import React from "react";
import ProductCard from "@/components/ProductCard";

const Category = () => {
  return (
    <div className="w-full md:py-20 relative">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {/* {category?.data?.[0]?.attributes?.name} */}
            Running
          </div>
        </div>

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5">
          {/* {data?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))} */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Category;
