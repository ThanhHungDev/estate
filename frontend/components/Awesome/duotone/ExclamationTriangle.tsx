import * as React from "react";

const SvgExclamationTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M569.52 440L329.58 24c-18.44-32-64.69-32-83.16 0L6.48 440c-18.42 31.94 4.64 72 41.57 72h479.89c36.87 0 60.06-40 41.58-72zM288 448a32 32 0 1132-32 32 32 0 01-32 32zm38.24-238.41l-12.8 128A16 16 0 01297.52 352h-19a16 16 0 01-15.92-14.41l-12.8-128A16 16 0 01265.68 192h44.64a16 16 0 0115.92 17.59z"
      opacity={0.4}
    />
    <path
      d="M310.32 192h-44.64a16 16 0 00-15.92 17.59l12.8 128A16 16 0 00278.48 352h19a16 16 0 0015.92-14.41l12.8-128A16 16 0 00310.32 192zM288 384a32 32 0 1032 32 32 32 0 00-32-32z"
      className="exclamation-triangle_svg__fa-primary"
    />
  </svg>
);

SvgExclamationTriangle.displayName = "SvgExclamationTriangle";
SvgExclamationTriangle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExclamationTriangle;
