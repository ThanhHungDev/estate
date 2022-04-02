import * as React from "react";

const SvgLineHeight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M175 144c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 00-22.63 0l-80 80C-5.64 126-.64 144 15 144h64v224H15C.71 368-6.31 385.31 3.71 395.31l80 80a16 16 0 0022.63 0l80-80C195.65 386 190.65 368 175 368h-64V144zm-38.62 256L95 441.37 53.65 400h82.73zM79 112H53.63L95 70.63 136.36 112H79zm552 128H263a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8zm0 128H263a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8zm0-256H263a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgLineHeight.displayName = "SvgLineHeight";
SvgLineHeight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLineHeight;
