import * as React from "react";

const SvgBookReader = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 192a96 96 0 1196-96 96 96 0 01-96 96z" opacity={0.4} />
    <path
      d="M233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.06 43.66 2.29 132 10.68 193 41.43 9.37 4.72 20.48-1.71 20.48-11.87v-246a13.31 13.31 0 00-6.38-11.46zm248.61-49c-48.35 2.74-144.46 12.73-203.78 49a13.56 13.56 0 00-6.42 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61-30.72 149.32-39.11 193-41.4C500.42 468.24 512 456.29 512 442V219.14c0-15.63-13.55-28.01-29.8-27.09z"
      className="book-reader_svg__fa-primary"
    />
  </svg>
);

SvgBookReader.displayName = "SvgBookReader";
SvgBookReader.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookReader;
