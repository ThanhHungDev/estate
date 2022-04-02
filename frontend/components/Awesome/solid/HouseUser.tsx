import * as React from "react";

const SvgHouseUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M570.69 236.27L512 184.44V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.78 10.3C308.5 4.61 296.53 0 288 0s-20.46 4.61-26.74 10.3l-256 226A18.27 18.27 0 000 248.2a18.64 18.64 0 004.09 10.71L25.5 282.7a21.14 21.14 0 0012 5.3 21.67 21.67 0 0010.69-4.11l15.9-14V480a32 32 0 0032 32H480a32 32 0 0032-32V269.88l15.91 14a21.94 21.94 0 0010.72 4.12 20.89 20.89 0 0011.87-5.31l21.41-23.81a21.64 21.64 0 004.09-10.69 21 21 0 00-5.31-11.92zM288 176a64 64 0 11-64 64 64 64 0 0164-64zm112 272H176a16 16 0 01-16-16 96 96 0 0196-96h64a96 96 0 0196 96 16 16 0 01-16 16z" />
  </svg>
);

SvgHouseUser.displayName = "SvgHouseUser";
SvgHouseUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouseUser;
