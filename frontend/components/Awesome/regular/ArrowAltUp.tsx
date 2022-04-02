import * as React from "react";

const SvgArrowAltUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M48.048 304h73.798v128c0 26.51 21.49 48 48 48h108.308c26.51 0 48-21.49 48-48V304h73.789c42.638 0 64.151-51.731 33.941-81.941l-175.943-176c-18.745-18.745-49.137-18.746-67.882 0l-175.952 176C-16.042 252.208 5.325 304 48.048 304zM224 80l176 176H278.154v176H169.846V256H48L224 80z" />
  </svg>
);

SvgArrowAltUp.displayName = "SvgArrowAltUp";
SvgArrowAltUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltUp;
