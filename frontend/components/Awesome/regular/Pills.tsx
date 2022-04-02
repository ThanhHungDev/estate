import * as React from "react";

const SvgPills = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112zm64 224H48V144c0-84.7 128-84.7 128 0v112zm353.1-49.1c-62.4-62.4-163.8-62.5-226.3 0s-62.5 163.8 0 226.3c62.4 62.4 163.8 62.5 226.3 0s62.5-163.9 0-226.3zm-207.3 52.8l154.5 154.5C375.7 478.8 257 360.5 321.8 259.7zm188.4 120.6L355.7 225.8c100.6-64.7 219.3 53.7 154.5 154.5z" />
  </svg>
);

SvgPills.displayName = "SvgPills";
SvgPills.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPills;
