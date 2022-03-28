import * as React from "react";

const SvgPoliceBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M208 200a8 8 0 008 8h24v-32h-32zm80 0v-24h-32v32h24a8 8 0 008-8zm-80-40h32v-32h-24a8 8 0 00-8 8zm80-24a8 8 0 00-8-8h-24v32h32zm-184 72h24v-32H96v24a8 8 0 008 8zm24-80h-24a8 8 0 00-8 8v24h32zm48 72v-24h-32v32h24a8 8 0 008-8zm0-64a8 8 0 00-8-8h-24v32h32zm32-120a16 16 0 00-32 0v16h32zm160 448H16a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M352 464V88a24 24 0 00-24-24h-8.023V48a16 16 0 00-16-16H80a16 16 0 00-16 16v16h-8a24 24 0 00-24 24v376zM96 136a8 8 0 018-8h24v32H96zm0 40h32v32h-24a8 8 0 01-8-8zm80 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zm0-112a8 8 0 01-8 8h-24v-32h32zm0-40h-32v-32h24a8 8 0 018 8zm64 48h-24a8 8 0 01-8-8v-24h32zm0-48h-32v-24a8 8 0 018-8h24zm48 40a8 8 0 01-8 8h-24v-32h32zm0-40h-32v-32h24a8 8 0 018 8z"
      className="police-box_svg__fa-primary"
    />
  </svg>
);

SvgPoliceBox.displayName = "SvgPoliceBox";
SvgPoliceBox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoliceBox;
