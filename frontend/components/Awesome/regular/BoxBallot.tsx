import * as React from "react";

const SvgBoxBallot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M573.8 282.5L520 148.3c-4.8-12.3-16.6-20.3-29.8-20.3H448V32c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v96H85.8c-13.2 0-25 8.1-29.8 20.3L2.2 282.4C.8 286.1 0 290 0 294l.2 185.9c-.1 17.7 14.3 32.2 32 32.2h511.6c17.7 0 32.1-14.4 32-32.2L576 294c0-4-.8-7.9-2.2-11.5zM176 48h224v144H176V48zM96.7 176H128v64h320v-64h31.3L520 280H55.9l40.8-104zM48.3 464l.7-136h478l.8 136H48.3z" />
  </svg>
);

SvgBoxBallot.displayName = "SvgBoxBallot";
SvgBoxBallot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxBallot;