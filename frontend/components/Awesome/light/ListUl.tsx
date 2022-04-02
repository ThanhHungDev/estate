import * as React from "react";

const SvgListUl = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M32.39 224C14.73 224 0 238.33 0 256s14.73 32 32.39 32a32 32 0 000-64zm0-160C14.73 64 0 78.33 0 96s14.73 32 32.39 32a32 32 0 000-64zm0 320C14.73 384 0 398.33 0 416s14.73 32 32.39 32a32 32 0 000-64zM504 80H136a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8V88a8 8 0 00-8-8zm0 160H136a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8zm0 160H136a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgListUl.displayName = "SvgListUl";
SvgListUl.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgListUl;
