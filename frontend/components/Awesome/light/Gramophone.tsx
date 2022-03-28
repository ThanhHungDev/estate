import * as React from "react";

const SvgGramophone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M45.51 314.12a32 32 0 0036.57.28c59.69-40.87 119.58-66.14 178-75 1.45-.18 75.92-10.49 75.92 40.6a40 40 0 01-40 40H192a32 32 0 00-32 32h130.41c36.73 0 70.27-25.2 76.48-61.4 7.82-45.66-10.28-55.79-88.76-118.51C232 135.21 192.72 83.42 161.45 18.17A32 32 0 00132.61 0a29.52 29.52 0 00-3 .14 32 32 0 00-28 23.58l-68.59 256a32 32 0 0012.49 34.4zM132.57 32C166 101.63 208.2 157.17 258.15 197.09l11.32 9c-4.58.4-9.32 1-14.18 1.7C192.06 217.4 127.7 244.38 64 288zM376 480h-24v-64a32 32 0 00-32-32H64a32 32 0 00-32 32v64H8a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8zm-56 0H64v-64h256z" />
  </svg>
);

SvgGramophone.displayName = "SvgGramophone";
SvgGramophone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGramophone;
