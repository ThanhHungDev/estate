import * as React from "react";

const SvgMusicAltSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M272 352c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80v-5.18l-94.91-73.36A144.39 144.39 0 00272 352zm361.82 106.1L384 265V148.15l73-21.39a32 32 0 0023-30.71V32a32 32 0 00-41.07-30.67L342.4 29.84a32 32 0 00-22.4 30.5v155.22L45.47 3.39A16 16 0 0023 6.2L3.37 31.47a16 16 0 002.81 22.45l588.35 454.71a16 16 0 0022.47-2.81l19.63-25.27a16 16 0 00-2.81-22.45z" />
  </svg>
);

SvgMusicAltSlash.displayName = "SvgMusicAltSlash";
SvgMusicAltSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusicAltSlash;
