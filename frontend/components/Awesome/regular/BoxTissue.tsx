import * as React from "react";

const SvgBoxTissue = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 208h-69.33L448 96H338.6A70.2 70.2 0 01272 48a70.19 70.19 0 00-66.6-48H64l46.22 208H32a32 32 0 00-32 32v240a32 32 0 0032 32h448a32 32 0 0032-32V240a32 32 0 00-32-32zM205.4 48a22.16 22.16 0 0121.06 15.18A118.06 118.06 0 00338.6 144h42.8l-48 144H177.17L123.84 48zM48 256h72.89l7.11 32h-16a16 16 0 00-16 16v16a16 16 0 0016 16h288a16 16 0 0016-16v-16a16 16 0 00-16-16h-16l10.67-32H464v112H48zm416 208H48v-48h416z" />
  </svg>
);

SvgBoxTissue.displayName = "SvgBoxTissue";
SvgBoxTissue.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxTissue;
