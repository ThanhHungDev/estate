import * as React from "react";

const SvgVideoSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M396.2 112c2 0 3.2.6 3.8 1.1v114.1l48 37.5v-38l112-69.8v195.4l47 36.8c.2-1.6 1-2.9 1-4.6v-257C608 109 592.5 96 575.9 96c-6.2 0-12.5 1.8-18.2 5.7L448 170.1v-58.3c0-26.4-23.2-47.8-51.8-47.8H191.3l61.4 48h143.5zM634 471L479.5 350.2 400 288.1 115.6 65.7l-2.2-1.7L36 3.5C29.1-2 19-.9 13.5 6l-10 12.5C-2 25.4-.9 35.5 6 41l44.3 34.6 39 30.5L604 508.5c6.9 5.5 17 4.4 22.5-2.5l10-12.5c5.5-6.9 4.4-17-2.5-22.5zM83.8 400c-2 0-3.2-.6-3.8-1.1V159.8l-48-37.5v277.9c0 26.4 23.2 47.8 51.8 47.8h312.4c13.8 0 26.3-5.1 35.6-13.2L387.3 400H83.8z" />
  </svg>
);

SvgVideoSlash.displayName = "SvgVideoSlash";
SvgVideoSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVideoSlash;
