import * as React from "react";

const SvgHeadSideCoughSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M288 384a32 32 0 0132-32h19.54L20.73 105.59A190.86 190.86 0 000 192c0 56.75 24.75 107.62 64 142.88V512h224v-32h64a64 64 0 0064-64h-96a32 32 0 01-32-32zm328-80a24 24 0 10-24-24 24 24 0 0024 24zm-64 16a24 24 0 1024 24 24 24 0 00-24-24zM404.1 88.25A208.13 208.13 0 00234.1 0H192A190.64 190.64 0 0084.18 33.3L263.61 172c5.88-7.14 14.43-12 24.36-12a32.06 32.06 0 0132 32c0 7-2.73 13.17-6.58 18.45l140.72 108.76c19.56-3.81 31.62-25 23.11-44.21-21-47.12-48.5-151.75-73.12-186.75zM616 360a24 24 0 1024 24 24 24 0 00-24-24z"
      opacity={0.4}
    />
    <path
      d="M636.62 480.55L617 505.82a16 16 0 01-22.45 2.81L6.18 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.46-2.81L633.81 458.1a16 16 0 012.81 22.45z"
      className="head-side-cough-slash_svg__fa-primary"
    />
  </svg>
);

SvgHeadSideCoughSlash.displayName = "SvgHeadSideCoughSlash";
SvgHeadSideCoughSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideCoughSlash;
