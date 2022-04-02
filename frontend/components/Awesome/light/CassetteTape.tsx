import * as React from "react";

const SvgCassetteTape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V112a48 48 0 00-48-48zM123.78 416l24-48h216.44l24 48zM480 400a16 16 0 01-16 16h-40l-40-80H128l-40 80H48a16 16 0 01-16-16V112a16 16 0 0116-16h416a16 16 0 0116 16zM368 160H144a64 64 0 000 128h224a64 64 0 000-128zm-224 96a32 32 0 1132-32 32 32 0 01-32 32zm168.88 0H199.12a62.1 62.1 0 000-64h113.76a62.1 62.1 0 000 64zm55.12 0a32 32 0 1132-32 32 32 0 01-32 32z" />
  </svg>
);

SvgCassetteTape.displayName = "SvgCassetteTape";
SvgCassetteTape.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCassetteTape;
