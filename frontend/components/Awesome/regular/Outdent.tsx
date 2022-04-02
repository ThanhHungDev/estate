import * as React from "react";

const SvgOutdent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 000 22.62zM432 424H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm3.17-128H204.83A12.82 12.82 0 00192 308.83v22.34A12.82 12.82 0 00204.83 344h230.34A12.82 12.82 0 00448 331.17v-22.34A12.82 12.82 0 00435.17 296zM432 40H16A16 16 0 000 56v16a16 16 0 0016 16h416a16 16 0 0016-16V56a16 16 0 00-16-16zm3.17 128H204.83A12.82 12.82 0 00192 180.83v22.34A12.82 12.82 0 00204.83 216h230.34A12.82 12.82 0 00448 203.17v-22.34A12.82 12.82 0 00435.17 168z" />
  </svg>
);

SvgOutdent.displayName = "SvgOutdent";
SvgOutdent.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOutdent;
