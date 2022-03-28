import * as React from "react";

const SvgMusicAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M310.94 1.33l-96.53 28.51A32 32 0 00192 60.34V360a148.76 148.76 0 00-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0023-30.71V32a32 32 0 00-41.06-30.67z" />
  </svg>
);

SvgMusicAlt.displayName = "SvgMusicAlt";
SvgMusicAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusicAlt;
