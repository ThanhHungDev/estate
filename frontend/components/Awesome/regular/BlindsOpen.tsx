import * as React from "react";

const SvgBlindsOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M16 352h64.4A79.24 79.24 0 0164 304H21.35a16 16 0 00-15.18 10.94l-5.34 16A16 16 0 0016 352zm489.82-37.06A16 16 0 00490.65 304H224a79.24 79.24 0 01-16.41 48H496a16 16 0 0015.18-21.06zm0 160A16 16 0 00490.65 464H21.35a16 16 0 00-15.18 10.94l-5.34 16A16 16 0 0016 512h480a16 16 0 0015.18-21.06zm0-320A16 16 0 00490.65 144H200v48h296a16 16 0 0015.18-21.06zM496 0H16A16 16 0 000 16v16a16 16 0 0016 16h104v96H21.35a16 16 0 00-15.18 10.94l-5.34 16A16 16 0 0016 192h104v70.66a48 48 0 1048 0V48h328a16 16 0 0016-16V16a16 16 0 00-16-16z" />
  </svg>
);

SvgBlindsOpen.displayName = "SvgBlindsOpen";
SvgBlindsOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsOpen;
