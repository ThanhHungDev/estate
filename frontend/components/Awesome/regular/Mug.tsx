import * as React from "react";

const SvgMug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M464 64H64a32 32 0 00-32 32v256a96 96 0 0096 96h192a96 96 0 0096-96v-64h48a112 112 0 000-224zm-96 288a48 48 0 01-48 48H128a48 48 0 01-48-48V112h288zm96-112h-48V112h48a64 64 0 010 128z" />
  </svg>
);

SvgMug.displayName = "SvgMug";
SvgMug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMug;
