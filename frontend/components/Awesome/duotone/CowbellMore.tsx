import * as React from "react";

const SvgCowbellMore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M480 192a160 160 0 10160 160 160 160 0 00-160-160zm80 168a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-16a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-16a8 8 0 018-8h56v-56a8 8 0 018-8h16a8 8 0 018 8v56h56a8 8 0 018 8zM336.81 96V48a48.05 48.05 0 00-48-48h-128a48.05 48.05 0 00-48 48v48h64V64h96v32z"
      opacity={0.4}
    />
    <path
      d="M552 336h-56v-56a8 8 0 00-8-8h-16a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v16a8 8 0 008 8h56v56a8 8 0 008 8h16a8 8 0 008-8v-56h56a8 8 0 008-8v-16a8 8 0 00-8-8zM394.7 180.24l-10.41-57.89A32.06 32.06 0 00352.73 96H95.38a32 32 0 00-31.56 26.35l-63.31 352A32 32 0 0032.07 512h342c-51.93-34.42-86.27-93.26-86.27-160-.02-75.21 43.64-140.27 106.9-171.76z"
      className="cowbell-more_svg__fa-primary"
    />
  </svg>
);

SvgCowbellMore.displayName = "SvgCowbellMore";
SvgCowbellMore.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCowbellMore;
