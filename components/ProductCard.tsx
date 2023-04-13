// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductAttributes } from "@/utils/types";
const ProductCard = ({
  data: { attributes, id },
}: {
  data: {
    id: string | number | undefined;
    attributes: ProductAttributes;
  };
}) => {
  return (
    <Link
      href={`/product/1`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={attributes.thumbnail.data.attributes.url}
        alt={attributes.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{attributes.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            &#8377;
            {attributes.price}
          </p>

          {attributes.original_price && (
            <>
              <p className="text-base  font-medium line-through">
                &#8377;
                {attributes.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                30% off
                {/* {getDiscountedPricePercentage(p.original_price, p.price)}% off */}
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
