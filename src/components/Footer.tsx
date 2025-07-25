import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto py-2">
      <div className="max-w-2xl mx-auto text-center px-4">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Albert Manuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
