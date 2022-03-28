import * as React from "react";

const SvgRingsWedding = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M351.25 160.77A206.38 206.38 0 01379.9 233 112 112 0 11224 336c0-42.21 23.69-78.57 58.31-97.49 3.37 10.64 5.69 21.75 5.69 33.49a111.34 111.34 0 01-30.73 76.6A79.84 79.84 0 00293 403.23 175.36 175.36 0 00352 272c0-81.62-55.64-150.07-131-170l35-70-32-32h-96L96 32l35 70C55.64 121.93 0 190.38 0 272a176 176 0 00176 176 171.77 171.77 0 0022.94-1.71A175.93 175.93 0 00512 336c0-92-70.7-167.49-160.75-175.23zM64 272a112.12 112.12 0 01112-112c26.85 0 51.19 9.88 70.5 25.69C194.94 216.24 160 271.68 160 336a175.89 175.89 0 006.55 47C109.28 378.16 64 330.52 64 272z" />
  </svg>
);

SvgRingsWedding.displayName = "SvgRingsWedding";
SvgRingsWedding.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRingsWedding;
