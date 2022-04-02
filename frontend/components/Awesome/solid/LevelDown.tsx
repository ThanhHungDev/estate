import * as React from "react";

const SvgLevelDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 352 512" {...props}>
    <path d="M345.04 368l-136 136.901c-9.388 9.465-24.691 9.465-34.079 0L38.96 368c-9.307-9.384-9.277-24.526.069-33.872l22.056-22.056c9.619-9.619 25.301-9.329 34.557.639L152 373.16V80H68.024a11.996 11.996 0 01-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v349.16l56.357-60.448c9.256-9.968 24.938-10.258 34.557-.639l22.056 22.056c9.346 9.345 9.377 24.487.07 33.871z" />
  </svg>
);

SvgLevelDown.displayName = "SvgLevelDown";
SvgLevelDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLevelDown;
