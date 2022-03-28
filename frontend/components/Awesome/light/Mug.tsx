import * as React from "react";

const SvgMug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M480 64H64a32 32 0 00-32 32v256a96 96 0 0096 96h192a96 96 0 0096-96v-96h64a96 96 0 000-192zm-96 288a64.07 64.07 0 01-64 64H128a64.07 64.07 0 01-64-64V96h320zm96-128h-64V96h64a64 64 0 010 128z" />
  </svg>
);

SvgMug.displayName = "SvgMug";
SvgMug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMug;
