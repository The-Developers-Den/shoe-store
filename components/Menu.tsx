import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { Category } from "@/utils/types";

const data: { id: number; name: string; url?: string; subMenu?: boolean }[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const Menu = ({
  showCatMenu,
  setShowCatMenu,
  categories,
}: {
  showCatMenu: boolean;
  setShowCatMenu: (value: boolean) => void;
  categories: Category[] | undefined;
}) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {categories?.map(({ attributes, id }: Category) => {
                      return (
                        <Link
                          key={id}
                          href={`/category/${attributes.slug}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {attributes.name}
                            <span className="opacity-50 text-sm">
                              {`(${attributes.products.data.length})`}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url!}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
