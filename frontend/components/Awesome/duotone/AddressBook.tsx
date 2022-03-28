import * as React from "react";

const SvgAddressBook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M416 48a48 48 0 00-48-48H48A48 48 0 000 48v416a48 48 0 0048 48h320a48 48 0 0048-48zm-208 80a64 64 0 11-64 64 64.06 64.06 0 0164-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H118.4C106 384 96 375.4 96 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5a103 103 0 0079.6 0h5c37.1 0 67.2 25.8 67.2 57.6z"
      opacity={0.4}
    />
    <path
      d="M252.8 288h-5a103 103 0 01-79.6 0h-5c-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6zM208 256a64 64 0 10-64-64 64.06 64.06 0 0064 64zm228-32h-20v64h20a12 12 0 0012-12v-40a12 12 0 00-12-12zm0 128h-20v64h20a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-256h-20v64h20a12 12 0 0012-12v-40a12 12 0 00-12-12z"
      className="address-book_svg__fa-primary"
    />
  </svg>
);

SvgAddressBook.displayName = "SvgAddressBook";
SvgAddressBook.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAddressBook;
