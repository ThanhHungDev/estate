import * as React from "react";

const SvgBlindsOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M96 64H16L0 112h96zm0 146.94V192H16L0 240h66.94A48.06 48.06 0 0196 210.94zM496 64H128v48h384zM16 320L0 368h512l-16-48zm0 144L0 512h512l-16-48zm112-272v18.94A48.06 48.06 0 01157.06 240H512l-16-48z"
      opacity={0.4}
    />
    <path
      d="M512 16v32a16 16 0 01-16 16H128v146.94a48 48 0 11-32 0V64H16A16 16 0 010 48V16A16 16 0 0116 0h480a16 16 0 0116 16z"
      className="blinds-open_svg__fa-primary"
    />
  </svg>
);

SvgBlindsOpen.displayName = "SvgBlindsOpen";
SvgBlindsOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsOpen;
