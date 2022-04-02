import * as React from "react";

const SvgBlanket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M446.2 384H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h344c35.3 0 64-28.7 64-64V80c0-44.2-35.8-80-80-80H80C35.8 0 0 35.8 0 80v320c0 61.9 50.1 112 112 112h392c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H115.6c-41.8 0-79.1-30.4-83.2-72-4.7-47.7 32.8-88 79.6-88h336c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.5 26.6-33.4 26.6zm1.8-96H112c-31.4 0-59.6 13-80 33.9V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v216.9c-9.5-5.5-20.3-8.9-32-8.9z" />
  </svg>
);

SvgBlanket.displayName = "SvgBlanket";
SvgBlanket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlanket;
