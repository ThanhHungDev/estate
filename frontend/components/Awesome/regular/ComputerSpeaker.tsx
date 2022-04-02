import * as React from "react";

const SvgComputerSpeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 32H368a48 48 0 00-48 48v352a48 48 0 0048 48h224a48 48 0 0048-48V80a48 48 0 00-48-48zm0 400H368V80h224zm-480 0a16 16 0 00-16 16v16a16 16 0 0016 16h192.41A79.24 79.24 0 01288 432zM0 80v256a48 48 0 0048 48h240v-48H48V80h240a79.24 79.24 0 0116.41-48H48A48 48 0 000 80zm480 112a32 32 0 10-32-32 32 32 0 0032 32zm0 208a80 80 0 10-80-80 80 80 0 0080 80zm0-112a32 32 0 11-32 32 32 32 0 0132-32z" />
  </svg>
);

SvgComputerSpeaker.displayName = "SvgComputerSpeaker";
SvgComputerSpeaker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgComputerSpeaker;
