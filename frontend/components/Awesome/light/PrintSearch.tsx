import * as React from "react";

const SvgPrintSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M637.66 487l-89-89c39-50.21 35.94-122.46-10.17-168.57a128 128 0 00-181 181c46.11 46.11 118.36 49.13 168.57 10.17l89 89a8 8 0 0011.32 0l11.31-11.31a8 8 0 00-.03-11.29zM448 416a96 96 0 1196-96 96 96 0 01-96 96zm-64 64H128v-96h173.75a159.68 159.68 0 01-10.33-32H32v-80a48.05 48.05 0 0148-48h240.88c11.62-15.39 13.51-18.17 32.06-32H128l.1-160H288v64a32 32 0 0032 32h64v45.56a157.9 157.9 0 0132-10.32v-54a32 32 0 00-9.37-22.63L329.37 9.37A32 32 0 00306.74 0H126.48C109.64 0 96 14.33 96 32v160H80a80 80 0 00-80 80v96a16 16 0 0016 16h80v112a16 16 0 0016 16h288a16 16 0 0016-16v-19.24a157.9 157.9 0 01-32-10.32zM320 45.25L370.75 96H320z" />
  </svg>
);

SvgPrintSearch.displayName = "SvgPrintSearch";
SvgPrintSearch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPrintSearch;
