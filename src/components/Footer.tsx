import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto py-2">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Albert Manuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
