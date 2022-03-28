import * as React from "react";

const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" />
  </svg>
);

SvgCheck.displayName = "SvgCheck";
SvgCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCheck;
