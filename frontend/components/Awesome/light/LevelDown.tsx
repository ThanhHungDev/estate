import * as React from "react";

const SvgLevelDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M252.478 408.503l-99.974 99.975c-4.697 4.697-12.311 4.697-17.008 0l-99.974-99.975c-4.696-4.697-4.696-12.311 0-17.008l8.503-8.503c4.697-4.697 12.311-4.697 17.007 0L126 447.959V36H24.024a11.996 11.996 0 01-8.485-3.515l-12-12C-4.021 12.926 1.333 0 12.024 0H138c13.255 0 24 10.745 24 24v423.959l64.967-64.966c4.697-4.697 12.311-4.697 17.007 0l8.503 8.503c4.697 4.696 4.697 12.31.001 17.007z" />
  </svg>
);

SvgLevelDown.displayName = "SvgLevelDown";
SvgLevelDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLevelDown;
