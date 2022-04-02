import * as React from "react";

const SvgMusicAltSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M240 352c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80-50.15-80-112-80zm0 112c-39.7 0-64-20.72-64-32s24.3-32 64-32 64 20.72 64 32-24.3 32-64 32zm394 7L36 3.52A16 16 0 0013.48 6l-10 12.49A16 16 0 006 41l598 467.5a16 16 0 0022.5-2.5l10-12.5A16 16 0 00634 471zM489.64 162A32 32 0 00512 131.48V32a32 32 0 00-41.64-30.49l-144 35.38A32 32 0 00304 67.36v84.76L357.58 194zM352 79.13l112-25.27v65.89L352 145z" />
  </svg>
);

SvgMusicAltSlash.displayName = "SvgMusicAltSlash";
SvgMusicAltSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusicAltSlash;
