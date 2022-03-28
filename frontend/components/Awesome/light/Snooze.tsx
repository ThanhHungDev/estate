import * as React from "react";

const SvgSnooze = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M176 272H24a8 8 0 00-8 8v16a8 8 0 008 8h131.19L3.72 469.75A16.06 16.06 0 000 480v16a16 16 0 0016 16h168a8 8 0 008-8v-16a8 8 0 00-8-8H36.81l151.48-165.77A15.94 15.94 0 00192 304v-16a16 16 0 00-16-16zM272 0H168a8 8 0 00-8 8v16a8 8 0 008 8h78l-98.56 125.2a16.07 16.07 0 00-3.44 9.91V176a16 16 0 0016 16h120a8 8 0 008-8v-16a8 8 0 00-8-8h-94l98.56-125.2a16.07 16.07 0 003.44-9.91V16a16 16 0 00-16-16zm176 248.89V240a16 16 0 00-16-16H328a8 8 0 00-8 8v16a8 8 0 008 8h78l-98.56 125.2a16.07 16.07 0 00-3.44 9.91V400a16 16 0 0016 16h120a8 8 0 008-8v-16a8 8 0 00-8-8h-94l98.59-125.2a16.07 16.07 0 003.41-9.91z" />
  </svg>
);

SvgSnooze.displayName = "SvgSnooze";
SvgSnooze.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSnooze;
