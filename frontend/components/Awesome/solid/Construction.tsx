import * as React from "react";

const SvgConstruction = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M634.66 460.17L349.5 15.92c-13.62-21.23-45.38-21.23-59 0L5.34 460.17C-9.14 482.73 7.52 512 34.85 512h570.3c27.33 0 43.99-29.27 29.51-51.83zM308 160a28 28 0 11-28 28 28 28 0 0128-28zm-4 272a16 16 0 01-32 0v-32.77l-46.31-29.92-18.25 66.89A16 16 0 01192 448a15.64 15.64 0 01-4.22-.56 16 16 0 01-11.24-19.64l29.75-109.11 83.06 53.67A31.91 31.91 0 01304 399.23zm48 16l12-29.94A16 16 0 01378.83 408h35.64l-94.8-58.34s-.08 0-.11-.07l-103.95-64a16 16 0 01-4.41-23.22l11.61-15.49a47.88 47.88 0 0148.83-18l24.58 7.28c17.45 3.82 31.84 18.53 35.56 37.14l10.55 52.7L430 380l21.16-42.44a16 16 0 0127.78-1.5L550.8 448z" />
  </svg>
);

SvgConstruction.displayName = "SvgConstruction";
SvgConstruction.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgConstruction;
