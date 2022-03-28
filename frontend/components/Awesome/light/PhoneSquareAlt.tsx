import * as React from "react";

const SvgPhoneSquareAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm16 400a16 16 0 01-16 16H48a16 16 0 01-16-16V80a16 16 0 0116-16h352a16 16 0 0116 16zm-49.89-131.12l-63-27a29.63 29.63 0 00-34.45 8.43l-19.74 24.13c-26.82-14.79-60.59-48.56-75.38-75.38l24.13-19.74a29.65 29.65 0 008.44-34.45l-27-63C174.89 104 162.75 96 152 96a35.39 35.39 0 00-6.65.76l-58.5 13.49A29.37 29.37 0 0064 139c0 153.18 124 277 277 277a29.35 29.35 0 0028.74-22.87l13.5-58.5a29.49 29.49 0 00-17.13-33.75zM339 384C205.06 382.93 97.06 274.69 96 141l54.51-12.58L176 187.75l-42.29 34.61c29.79 63.48 62.08 94.93 124 124L292.24 304l59.35 25.43z" />
  </svg>
);

SvgPhoneSquareAlt.displayName = "SvgPhoneSquareAlt";
SvgPhoneSquareAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneSquareAlt;
