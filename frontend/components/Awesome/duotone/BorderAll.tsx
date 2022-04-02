import * as React from "react";

const SvgBorderAll = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M384 288H256v128h-64V288H64v-64h128V96h64v128h128z"
      opacity={0.4}
    />
    <path
      d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 384H64V96h320z"
      className="border-all_svg__fa-primary"
    />
  </svg>
);

SvgBorderAll.displayName = "SvgBorderAll";
SvgBorderAll.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderAll;
