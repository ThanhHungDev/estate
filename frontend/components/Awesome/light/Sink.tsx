import * as React from "react";

const SvgSink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504 288h-88v-32h56a8 8 0 008-8v-16a8 8 0 00-8-8h-72a16 16 0 00-16 16v48h-80V112a16 16 0 0132 0v16a32 32 0 0032 32h32a32 32 0 0032-32v-13.74c0-20.8-4.79-41.61-15.56-59.4A112.58 112.58 0 00297.81 2.12C245.77 12.23 208 60 208 115.77V288h-80v-48a16 16 0 00-16-16H40a8 8 0 00-8 8v16a8 8 0 008 8h56v32H8a8 8 0 00-8 8v16a8 8 0 008 8h24v96a96 96 0 0096 96h256a96 96 0 0096-96v-96h24a8 8 0 008-8v-16a8 8 0 00-8-8zM240 115.77c0-40.45 26.88-75 63.91-82.24A80.17 80.17 0 01400 112v16h-32v-16a48 48 0 00-96 0v176h-32zM448 416a64.07 64.07 0 01-64 64H128a64.07 64.07 0 01-64-64v-96h384z" />
  </svg>
);

SvgSink.displayName = "SvgSink";
SvgSink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSink;
