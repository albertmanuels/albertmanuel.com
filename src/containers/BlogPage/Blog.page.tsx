import CloudinaryImage from "@/src/components/CloudinaryImage";
import { formatDate } from "@/src/helpers";
import React from "react";

const BlogPage = () => {
  return (
    <section className="gap-4 layout-post-content min-h-mobile md:min-h-desktop">
      <h1 className="not-prose text-[30px] font-semibold text-primary-200 dark:text-txt-300 mb-1">
        TEST
      </h1>
      <p className="m-0 mb-3 font-light not-prose text-primary-200 dark:text-txt-200">
        Published on TEST
      </p>

      <CloudinaryImage
        className="mb-[3rem] object-cover rounded-md"
        publicId={`albertmanuel/banner/TEST`}
        width={1200}
        height={(1200 * 2) / 4}
        aspect={{ width: 4, height: 2 }}
        alt="banner"
      />
    </section>
  );
};

export default BlogPage;
