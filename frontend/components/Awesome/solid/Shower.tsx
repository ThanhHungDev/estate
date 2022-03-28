import * as React from "react";

const SvgShower = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M304 320a16 16 0 1016 16 16 16 0 00-16-16zm32-96a16 16 0 1016 16 16 16 0 00-16-16zm32 64a16 16 0 10-16-16 16 16 0 0016 16zm-32 32a16 16 0 10-16-16 16 16 0 0016 16zm-32-64a16 16 0 1016 16 16 16 0 00-16-16zm128-32a16 16 0 10-16-16 16 16 0 0016 16zm-48 16a16 16 0 1016-16 16 16 0 00-16 16zm-16-48a16 16 0 1016 16 16 16 0 00-16-16zm96 32a16 16 0 1016 16 16 16 0 00-16-16zm32-32a16 16 0 1016 16 16 16 0 00-16-16zm-64 64a16 16 0 1016 16 16 16 0 00-16-16zm-32 32a16 16 0 1016 16 16 16 0 00-16-16zm-64 64a16 16 0 1016 16 16 16 0 00-16-16zm-32 32a16 16 0 1016 16 16 16 0 00-16-16zm64-64a16 16 0 1016 16 16 16 0 00-16-16zm21.65-218.35l-11.3-11.31a16 16 0 00-22.63 0L350.05 96A111.19 111.19 0 00272 64c-19.24 0-37.08 5.3-52.9 13.85l-10-10A121.72 121.72 0 00123.44 32C55.49 31.5 0 92.91 0 160.85V464a16 16 0 0016 16h32a16 16 0 0016-16V158.4c0-30.15 21-58.2 51-61.93a58.38 58.38 0 0148.93 16.67l10 10C165.3 138.92 160 156.76 160 176a111.23 111.23 0 0032 78.05l-5.66 5.67a16 16 0 000 22.62l11.3 11.31a16 16 0 0022.63 0l169.38-169.37a16 16 0 000-22.63z" />
  </svg>
);

SvgShower.displayName = "SvgShower";
SvgShower.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShower;
