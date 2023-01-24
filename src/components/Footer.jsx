import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className=" flex flex-col items-center justify-center footer p-3 bg-neutral-900 w-full text-white">
      <div className="">
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
