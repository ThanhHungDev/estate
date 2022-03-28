import * as React from "react";

const SvgRemoveFormat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M634 471L36 3.5A16 16 0 0013.49 6l-10 12.5A16 16 0 006 41l598 467.5a16 16 0 0022.5-2.5l10-12.5A16 16 0 00634 471zM352 96l-24.76 74.27L378 210l38-114h144v32a16 16 0 0016 16h16a16 16 0 0016-16V48a16 16 0 00-16-16H176a15.86 15.86 0 00-14.18 8.94L232.24 96zm-16 336h-32l25.68-77-50.77-39.7L240 432h-32a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgRemoveFormat.displayName = "SvgRemoveFormat";
SvgRemoveFormat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRemoveFormat;
