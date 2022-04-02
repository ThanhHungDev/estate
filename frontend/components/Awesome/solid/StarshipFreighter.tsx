import * as React from "react";

const SvgStarshipFreighter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M224.009 208a48 48 0 1047.999 48 48 48 0 00-48-48zM560 223.654a16 16 0 0016-16V155.2a16 16 0 00-10.523-15.033l-254.15-92.603C255.577 27.506 193.613 25.59 139.22 49.15-4.095 111.223.014 256 .014 256S-4.34 400.665 139.22 462.85c54.393 23.558 116.356 21.644 172.107 1.586l16.328-5.95 3.195 3.905A48.044 48.044 0 00368.005 480h63.999a47.917 47.917 0 0040.167-74.17l93.306-33.996A16 16 0 00576 356.801v-52.455a16 16 0 00-16-16H416.004v-64.692zM80.012 272a16 16 0 1116-16 16 16 0 01-16 16zm32 96a16 16 0 1116-16 16 16 0 01-16 16zm0-192a16 16 0 1116-16 16 16 0 01-16 16zm111.997 160a80 80 0 1179.998-80 80.09 80.09 0 01-79.998 80z" />
  </svg>
);

SvgStarshipFreighter.displayName = "SvgStarshipFreighter";
SvgStarshipFreighter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarshipFreighter;
