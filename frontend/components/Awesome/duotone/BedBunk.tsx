import * as React from "react";

const SvgBedBunk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M144 256a48 48 0 1048 48 48.06 48.06 0 00-48-48zm0-256a48 48 0 1048 48 48.06 48.06 0 00-48-48zm320 0H240a16 16 0 00-16 16v112h352v-16A112 112 0 00464 0zM240 256a16 16 0 00-16 16v112h288V267.19A110.87 110.87 0 00464 256z"
      opacity={0.4}
    />
    <path
      d="M64 128V16A16 16 0 0048 0H16A16 16 0 000 16v480a16 16 0 0016 16h32a16 16 0 0016-16v-48h448v48a16 16 0 0016 16h32a16 16 0 0016-16V128zm448 256H64V192h448z"
      className="bed-bunk_svg__fa-primary"
    />
  </svg>
);

SvgBedBunk.displayName = "SvgBedBunk";
SvgBedBunk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedBunk;
