import React from "react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="min-h-[500px] flex items-center bg-[#c4c3c320]">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto ">
        <div className="max-w-[600px] rounded-lg p-5 border bg-white border-black mx-auto flex flex-col shadow-sm text-center">
          <h1 className="text-2xl font-bold">Thanks for shopping with us!</h1>
          <h2 className="text-lg font-bold mt-1">
            Your order has been placed successfully.
          </h2>
          <div className="text-base mt-2">
            For any product related query, drop an email to
          </div>
          <Link className="underline" href="mailto:shoeshopcontact@shop.com">
            shoeshopcontact@shop.com
          </Link>

          <Link href="/" className="font-bold mt-5">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
