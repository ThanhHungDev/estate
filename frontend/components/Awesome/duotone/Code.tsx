import * as React from "react";

const SvgCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M422.12 18.16a12 12 0 018.2 14.9l-136.5 470.2a12 12 0 01-14.89 8.2l-61-17.7a12 12 0 01-8.2-14.9l136.5-470.2a12 12 0 0114.89-8.2z"
      opacity={0.4}
    />
    <path
      d="M636.23 247.26l-144.11-135.2a12.11 12.11 0 00-17 .5L431.62 159a12 12 0 00.81 17.2L523 256l-90.59 79.7a11.92 11.92 0 00-.81 17.2l43.5 46.4a12 12 0 0017 .6l144.11-135.1a11.94 11.94 0 00.02-17.54zm-427.8-88.2l-43.5-46.4a12 12 0 00-17-.5l-144.11 135a11.94 11.94 0 000 17.5l144.11 135.1a11.92 11.92 0 0017-.5l43.5-46.4a12 12 0 00-.81-17.2L117 256l90.6-79.7a11.92 11.92 0 00.83-17.24z"
      className="code_svg__fa-primary"
    />
  </svg>
);

SvgCode.displayName = "SvgCode";
SvgCode.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCode;
