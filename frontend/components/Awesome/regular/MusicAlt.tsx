import * as React from "react";

const SvgMusicAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M342.36 1.51l-144 35.38A32 32 0 00176 67.36v299.12c-18.16-9.07-40.16-14.48-64-14.48-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V195.36L361.64 162A32 32 0 00384 131.48V32a32 32 0 00-41.64-30.49zM112 464c-39.7 0-64-20.72-64-32s24.3-32 64-32 64 20.72 64 32-24.3 32-64 32zm224-344.25L224 145V79.12l112-25.26z" />
  </svg>
);

SvgMusicAlt.displayName = "SvgMusicAlt";
SvgMusicAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusicAlt;
