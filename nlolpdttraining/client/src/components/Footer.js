import React from "react";

function Footer() {
  return (
    <footer className="text-center py-4 bg-dark text-white mt-5">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} J.Zyph Dog Training. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
