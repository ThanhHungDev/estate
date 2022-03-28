import * as React from "react";

const SvgThList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M488 352H205.33a24 24 0 00-24 24v80a24 24 0 0024 24H488a24 24 0 0024-24v-80a24 24 0 00-24-24zm0-320H205.33a24 24 0 00-24 24v80a24 24 0 0024 24H488a24 24 0 0024-24V56a24 24 0 00-24-24zm0 160H205.33a24 24 0 00-24 24v80a24 24 0 0024 24H488a24 24 0 0024-24v-80a24 24 0 00-24-24z"
      opacity={0.4}
    />
    <path
      d="M125.33 192H24a24 24 0 00-24 24v80a24 24 0 0024 24h101.33a24 24 0 0024-24v-80a24 24 0 00-24-24zm0-160H24A24 24 0 000 56v80a24 24 0 0024 24h101.33a24 24 0 0024-24V56a24 24 0 00-24-24zm0 320H24a24 24 0 00-24 24v80a24 24 0 0024 24h101.33a24 24 0 0024-24v-80a24 24 0 00-24-24z"
      className="th-list_svg__fa-primary"
    />
  </svg>
);

SvgThList.displayName = "SvgThList";
SvgThList.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThList;
