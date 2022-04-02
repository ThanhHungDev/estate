import * as React from "react";

const SvgHouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 72L64 269.85V480a32 32 0 0032 32h384a32 32 0 0032-32V269.85zm64 258.66A21.4 21.4 0 01330.63 352h-85.29A21.4 21.4 0 01224 330.66v-85.34A21.4 21.4 0 01245.34 224h85.29A21.4 21.4 0 01352 245.32z"
      opacity={0.4}
    />
    <path
      d="M571.9 258.87l-21.41 23.81c-1.8 2-12.46 10.23-22.59 1.22L288 72 48.12 283.9c-9.3 8.37-19.81 1.9-22.59-1.2L4.12 258.9c-8.37-9.3-1.9-19.81 1.2-22.6l256-226C267.59 4.61 279.57 0 288 0s20.44 4.61 26.72 10.3L416 99.67V48a16 16 0 0116-16h64a16 16 0 0116 16v136.44l58.69 51.83c3.1 2.79 9.54 13.27 1.21 22.6z"
      className="house_svg__fa-primary"
    />
  </svg>
);

SvgHouse.displayName = "SvgHouse";
SvgHouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouse;
