import * as React from "react";

const SvgTvAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M520 448H120a24 24 0 00-24 24v16a24 24 0 0024 24h400a24 24 0 0024-24v-16a24 24 0 00-24-24zM592 0H48A48 48 0 000 48v320a48 48 0 0048 48h544a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 352H64V64h512z" />
  </svg>
);

SvgTvAlt.displayName = "SvgTvAlt";
SvgTvAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTvAlt;
