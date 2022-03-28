import * as React from "react";

const SvgPeopleArrows = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M96 128a64 64 0 10-64-64 64 64 0 0064 64zm32 32H64a64 64 0 00-64 64v96a32 32 0 0032 32v128a32 32 0 0032 32h64a32 32 0 0032-32v-96.39l-50.36-47.53a44.37 44.37 0 010-64L181.77 204c1.65-1.55 3.77-2.31 5.61-3.57A63.91 63.91 0 00128 160zm352-32a64 64 0 10-64-64 64 64 0 0064 64zm32 32h-64a63.91 63.91 0 00-59.38 40.42c1.84 1.27 4 2 5.62 3.59l72.12 68.06a44.37 44.37 0 010 64L416 383.62V480a32 32 0 0032 32h64a32 32 0 0032-32V352a32 32 0 0032-32v-96a64 64 0 00-64-64z"
      opacity={0.4}
    />
    <path
      d="M444.4 310.44l-72.12 68.07a12 12 0 01-20.28-8.74v-36.14H224v36.14a12 12 0 01-20.28 8.74l-72.12-68.07a12.4 12.4 0 010-17.47l72.12-68.07a12 12 0 0120.28 8.74v36h128v-36a12 12 0 0120.28-8.74L444.4 293a12.4 12.4 0 010 17.44z"
      className="people-arrows_svg__fa-primary"
    />
  </svg>
);

SvgPeopleArrows.displayName = "SvgPeopleArrows";
SvgPeopleArrows.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPeopleArrows;
