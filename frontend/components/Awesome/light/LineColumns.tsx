import * as React from "react";

const SvgLineColumns = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504 304H296a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8v-16a8 8 0 00-8-8zm0 128H296a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8v-16a8 8 0 00-8-8zm0-256H296a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H296a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8V56a8 8 0 00-8-8zM216 432H8a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H8a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8v-16a8 8 0 00-8-8zm0-256H8a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8V56a8 8 0 00-8-8zm0 128H8a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgLineColumns.displayName = "SvgLineColumns";
SvgLineColumns.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLineColumns;
