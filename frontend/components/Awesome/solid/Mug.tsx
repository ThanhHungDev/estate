import * as React from "react";

const SvgMug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M448 63H56a23.94 23.94 0 00-24 24v264a96 96 0 0096 96h192a96 96 0 0096-96v-32h32a128 128 0 000-256zm0 192h-32V127h32a64 64 0 010 128z" />
  </svg>
);

SvgMug.displayName = "SvgMug";
SvgMug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMug;
