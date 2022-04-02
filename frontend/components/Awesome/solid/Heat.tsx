import * as React from "react";

const SvgHeat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M64 152.25V112a16 16 0 00-16-16H16a16 16 0 00-16 16v40.25A218.65 218.65 0 0056.48 299 154.12 154.12 0 0196 402.41V464a16 16 0 0016 16h32a16 16 0 0016-16v-61.59a218.44 218.44 0 00-56.42-146.69A154.3 154.3 0 0164 152.25zm327.58 103.47A154.3 154.3 0 01352 152.25V112a16 16 0 00-16-16h-32a16 16 0 00-16 16v40.25A218.65 218.65 0 00344.48 299 154.12 154.12 0 01384 402.41V464a16 16 0 0016 16h32a16 16 0 0016-16v-61.59a218.44 218.44 0 00-56.42-146.69zM208 152.25V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v104.25A218.65 218.65 0 00200.48 299 154.12 154.12 0 01240 402.41V464a16 16 0 0016 16h32a16 16 0 0016-16v-61.59a218.44 218.44 0 00-56.42-146.69A154.3 154.3 0 01208 152.25z" />
  </svg>
);

SvgHeat.displayName = "SvgHeat";
SvgHeat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeat;
