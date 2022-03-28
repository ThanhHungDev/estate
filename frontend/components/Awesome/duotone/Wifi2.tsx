import * as React from "react";

const SvgWifi2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M635.3 177.9l-34.2 34c-6.2 6.1-16 6.2-22.4.4-146-133.7-371.3-133.7-517.2 0-6.4 5.9-16.2 5.7-22.4-.4l-34.2-34-.5-.5c-6-6.4-5.6-16.5.9-22.5C182.2-8.9 457.7-9 634.9 154.9c.2.2.4.3.5.5 6.2 6.3 6.1 16.3-.1 22.5z"
      opacity={0.4}
    />
    <path
      d="M320 352c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm203.5-82.8l-.8-.8c-115.3-101.9-290.2-101.8-405.3 0-6.5 5.8-7.1 15.8-1.4 22.3.3.3.5.6.8.8l34.4 34c6 5.9 15.6 6.3 22 .8 84-72.6 209.7-72.4 293.5 0 6.4 5.5 16 5.2 22-.8l34.4-34c6.4-6 6.5-16 .4-22.3z"
      className="wifi-2_svg__fa-primary"
    />
  </svg>
);

SvgWifi2.displayName = "SvgWifi2";
SvgWifi2.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWifi2;
