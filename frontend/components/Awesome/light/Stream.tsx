import * as React from "react";

const SvgStream = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M8 128h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm496 112H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-64 144H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgStream.displayName = "SvgStream";
SvgStream.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStream;
