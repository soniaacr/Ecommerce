import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h3 className="text-3xl font-semibold hover:text-pink-300 cursor-pointer duration-200">
        CHICXCLUSIVE.
      </h3>
    </Link>
  );
};

export default Logo;
