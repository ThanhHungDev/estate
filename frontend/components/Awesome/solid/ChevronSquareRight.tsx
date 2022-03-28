import * as React from "react";

const SvgChevronSquareRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M48 32h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48zm281.941 207.029L194.427 103.515c-9.373-9.373-24.569-9.373-33.941 0l-16.971 16.971c-9.373 9.373-9.373 24.569 0 33.941L245.088 256 143.515 357.573c-9.373 9.373-9.373 24.569 0 33.941l16.971 16.971c9.373 9.373 24.569 9.373 33.941 0L329.942 272.97c9.372-9.372 9.372-24.568-.001-33.941z" />
  </svg>
);

SvgChevronSquareRight.displayName = "SvgChevronSquareRight";
SvgChevronSquareRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronSquareRight;
