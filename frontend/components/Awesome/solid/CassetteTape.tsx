import * as React from "react";

const SvgCassetteTape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 63H48a48 48 0 00-48 48v288a48 48 0 0048 48h32l48-96h256l48 96h32a48 48 0 0048-48V111a48 48 0 00-48-48zM128 255a32 32 0 1132-32 32 32 0 01-32 32zm182.78 0H201.22a78.91 78.91 0 000-64h109.56a78.91 78.91 0 000 64zm73.22 0a32 32 0 1132-32 32 32 0 01-32 32zM147.78 383l-32 64h280.44l-32-64z" />
  </svg>
);

SvgCassetteTape.displayName = "SvgCassetteTape";
SvgCassetteTape.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCassetteTape;
