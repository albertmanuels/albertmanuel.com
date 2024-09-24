"use client";
import Link from "next/link";
import React from "react";

const TableOfContents = () => {
  return (
    <div className="py-1">
      <aside className="sticky top-20">
        <h3 className="text-xl font-semibold">Table Of Content</h3>
        <Link href="#">Heading 1</Link>
        <Link href="#">Heading 2</Link>
      </aside>
    </div>
  );
};

export default TableOfContents;
