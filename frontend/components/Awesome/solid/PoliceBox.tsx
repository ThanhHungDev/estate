import * as React from "react";

const SvgPoliceBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M368 464h-16V88a24 24 0 00-24-24h-8.021V48a16 16 0 00-16-16H208V16a16 16 0 00-32 0v16H80a16 16 0 00-16 16v16h-8a24 24 0 00-24 24v376H16a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16zM168 128a8 8 0 018 8v24h-32v-32zm-64 0h24v32H96v-24a8 8 0 018-8zm0 80a8 8 0 01-8-8v-24h32v32zm72 104a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zm-8-104h-24v-32h32v24a8 8 0 01-8 8zm112-80a8 8 0 018 8v24h-32v-32zm-64 0h24v32h-32v-24a8 8 0 018-8zm-8 72v-24h32v32h-24a8 8 0 01-8-8zm72 8h-24v-32h32v24a8 8 0 01-8 8z" />
  </svg>
);

SvgPoliceBox.displayName = "SvgPoliceBox";
SvgPoliceBox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoliceBox;
