import * as React from "react";

const SvgMugTea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M601.9 448H6.1c-13.1 0-4.5 32 20 32h555.8c24.5 0 33.1-32 20-32zM544 32H128a32 32 0 00-32 32v224a96 96 0 0096 96h192a96 96 0 0096-96v-64h64a96 96 0 000-192zm-96 256a64.07 64.07 0 01-64 64H192a64.07 64.07 0 01-64-64V64h96v32l-38.63 38.63a32 32 0 00-9.37 22.62V224a32 32 0 0032 32h64a32 32 0 0032-32v-66.75a32 32 0 00-9.37-22.62L256 96V64h192zM240 125.25l32 32V224h-64v-66.75zM544 192h-64V64h64a64 64 0 010 128z" />
  </svg>
);

SvgMugTea.displayName = "SvgMugTea";
SvgMugTea.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMugTea;
