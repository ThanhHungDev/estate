import * as React from "react";

const SvgBlindsRaised = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M0 225.29h96v-64.37H18.66zm128-64.37v64.37h384l-18.66-64.37zm365.34-96.55H128v64.37h384zM0 128.74h96V64.37H18.66z"
      opacity={0.4}
    />
    <path
      d="M512 16.09v32.19a16 16 0 01-16 16.09H128v354a48 48 0 11-32 0v-354H16A16 16 0 010 48.28V16.09A16 16 0 0116 0h480a16 16 0 0116 16.09z"
      className="blinds-raised_svg__fa-primary"
    />
  </svg>
);

SvgBlindsRaised.displayName = "SvgBlindsRaised";
SvgBlindsRaised.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsRaised;
