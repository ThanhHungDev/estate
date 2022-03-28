import * as React from "react";

const SvgCheeseSwiss = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M176 319.9a48 48 0 1048 48 48 48 0 00-48-48zm0 64a16 16 0 1116-16 16 16 0 01-16 16.04zM299.83 32h-1.49a32.27 32.27 0 00-19.64 7L0 255.87V448a32 32 0 0032 32h448a32 32 0 0032-32V255.87C512 136.05 418 38.2 299.83 32zM240 127.79a16 16 0 11-16 16 16 16 0 0116-16zM480 448H32V287.89h290.94a47.72 47.72 0 0090.12 0H480zM352 271.88a16 16 0 1116 16 16 16 0 01-16-16zm61.06-16a47.72 47.72 0 00-90.12 0H52.13l140.17-109a47.89 47.89 0 1062.38-48.58l44-34.26C400.42 69.62 480 153.78 480 255.87z" />
  </svg>
);

SvgCheeseSwiss.displayName = "SvgCheeseSwiss";
SvgCheeseSwiss.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCheeseSwiss;
