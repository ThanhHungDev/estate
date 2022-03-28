import * as React from "react";

const SvgBook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z"
      opacity={0.4}
    />
    <path
      d="M96 384h328a24 24 0 0024-24V32a32 32 0 00-32-32H96A96 96 0 000 96v320a96 96 0 0096 96h328a24 24 0 0024-24v-16a24 24 0 00-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm32-250a6 6 0 016-6h212a6 6 0 016 6v20a6 6 0 01-6 6H134a6 6 0 01-6-6zm0 64a6 6 0 016-6h212a6 6 0 016 6v20a6 6 0 01-6 6H134a6 6 0 01-6-6z"
      className="book_svg__fa-primary"
    />
  </svg>
);

SvgBook.displayName = "SvgBook";
SvgBook.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBook;
