import * as React from "react";

const SvgPhoneSquareAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M344.73 309l-56-24a14.46 14.46 0 00-4.73-1 13.61 13.61 0 00-9.29 4.4l-24.8 30.31a185.51 185.51 0 01-88.62-88.62l30.31-24.8A13.61 13.61 0 00196 196a14.2 14.2 0 00-1-4.73l-24-56a13 13 0 00-11-7.27 14.51 14.51 0 00-2.7.31l-52 12A12.57 12.57 0 0096 152c0 128.23 104 232 232 232a12.57 12.57 0 0011.69-9.3l12-52a14.51 14.51 0 00.31-2.7 13 13 0 00-7.27-11zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm0 394a6 6 0 01-6 6H54a6 6 0 01-6-6V86a6 6 0 016-6h340a6 6 0 016 6z" />
  </svg>
);

SvgPhoneSquareAlt.displayName = "SvgPhoneSquareAlt";
SvgPhoneSquareAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneSquareAlt;
