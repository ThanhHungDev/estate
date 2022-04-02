import * as React from "react";

const SvgHandRock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M0 242.41V176a48 48 0 0148.8-48c26.3.5 47.2 22.5 47.2 48.8v48.1l8 7.1V96a48 48 0 0148.8-48c26.3.5 47.2 22.5 47.2 48.8V128h8V80a48 48 0 0148.8-48c26.3.5 47.2 22.5 47.2 48.8V128h8V96a48 48 0 0148.8-48c26.3.5 47.2 22.5 47.2 48.8V128h8a48 48 0 0148.8-48c26.3.4 47.2 22.5 47.2 48.8v133.5a95.58 95.58 0 01-7.5 37.3l-49 116.3a97.42 97.42 0 00-7.5 37.3v2.9a23.94 23.94 0 01-24 24H184a23.94 23.94 0 01-24-24v-6.7a48.21 48.21 0 00-16.1-35.9L32.2 314.21A96.23 96.23 0 010 242.41z"
      opacity={0.4}
    />
  </svg>
);

SvgHandRock.displayName = "SvgHandRock";
SvgHandRock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandRock;
