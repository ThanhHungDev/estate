import * as React from "react";

const SvgTrash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h18.9l33.2 372.3a48 48 0 0047.8 43.7h232.2a48 48 0 0047.8-43.7L421.1 96H440a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 01-15.9 14.6H107.9A15.91 15.91 0 0192 465.4L59 96h330z" />
  </svg>
);

SvgTrash.displayName = "SvgTrash";
SvgTrash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrash;
