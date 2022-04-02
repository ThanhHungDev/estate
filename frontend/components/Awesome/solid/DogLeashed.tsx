import * as React from "react";

const SvgDogLeashed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M67.64 3.37L288 168.08V192h-48.46L38.17 41.25a16 16 0 01-2.8-22.45l9.82-12.62a16 16 0 0122.45-2.81zM128 224h160v160h-96v112a16 16 0 01-16 16h-64a16 16 0 01-16-16V282.1c-37.17-13.25-64-48.44-64-90.1a32 32 0 0164 0 32 32 0 0032 32zm416-112v32a64 64 0 01-64 64h-32v35.58l-128-45.71V48c0-14.25 17.23-21.39 27.32-11.31L374.6 64h53.62c10.92 0 23.74 7.92 28.62 17.69L464 96h64a16 16 0 0116 16zM320 231.84l128 45.71V496a16 16 0 01-16 16h-64a16 16 0 01-16-16V384h-32zM432 112a16 16 0 10-16 16 16 16 0 0016-16z" />
  </svg>
);

SvgDogLeashed.displayName = "SvgDogLeashed";
SvgDogLeashed.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDogLeashed;
