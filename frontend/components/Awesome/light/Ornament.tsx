import * as React from "react";

const SvgOrnament = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M288 153.9V96c0-17.7-14.3-32-32-32h-18.9c1.8-5 2.9-10.4 2.9-16 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 5.6 1.2 11 2.9 16H128c-17.7 0-32 14.3-32 32v57.9C38.7 187.1 0 249 0 320c0 106 86 192 192 192s192-86 192-192c0-71-38.7-132.9-96-166.1zM176 48c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm-48 48h128v43.2c-20-7.1-41.5-11.2-64-11.2s-44 4.1-64 11.2V96zm64 64c52.1 0 97.9 25.4 127.2 64H64.8c29.3-38.6 75.1-64 127.2-64zm0 320c-52.1 0-97.9-25.4-127.2-64h254.4c-29.3 38.6-75.1 64-127.2 64zm146.4-96H45.6C36.9 364.4 32 342.8 32 320s4.9-44.4 13.6-64h292.9c8.6 19.6 13.6 41.2 13.6 64s-5 44.4-13.7 64z" />
  </svg>
);

SvgOrnament.displayName = "SvgOrnament";
SvgOrnament.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOrnament;
