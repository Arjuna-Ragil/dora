"use client";

import Image from "next/image";

export default function SvgIcon({ src, size = 24 }) {
  return (
    <Image
      src={src}
      alt="icon"
      width={size}
      height={size}
      className="scale-300"
      priority
    />
  );
}
