import * as React from "react";

const SvgComputerSpeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M288 416H128a32 32 0 000 64h176.41A79.24 79.24 0 01288 432zM0 80v256a48 48 0 0048 48h240v-64H64V96h224V80a79.24 79.24 0 0116.41-48H48A48 48 0 000 80zm592-48H368a48 48 0 00-48 48v352a48 48 0 0048 48h224a48 48 0 0048-48V80a48 48 0 00-48-48zM480 96a32 32 0 11-32 32 32 32 0 0132-32zm0 320a96 96 0 1196-96 96 96 0 01-96 96zm0-160a64 64 0 1064 64 64 64 0 00-64-64z" />
  </svg>
);

SvgComputerSpeaker.displayName = "SvgComputerSpeaker";
SvgComputerSpeaker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgComputerSpeaker;
