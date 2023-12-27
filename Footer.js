import React from "react";
function Footer() {

  
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 ">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="/"
          target="_blank"
          rel="noreferrer noopener"
        >
           <span className=" text-[white] font-extrabold"> Bethwel-Dev</span>
        </a>{" "}
        with
        <span className=" text-[white] font-extrabold"> Love</span> &
        <span className=" font-extrabold text-[white]"> Coffee</span>
      </p>
    </footer>
  );
}
export default Footer;