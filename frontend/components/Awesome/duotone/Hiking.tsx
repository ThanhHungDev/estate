import * as React from "react";

const SvgHiking = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M368 160h-16a16 16 0 00-16 16v320a16 16 0 0016 16h16a16 16 0 0016-16V176a16 16 0 00-16-16zM240 0a48 48 0 1048 48 48 48 0 00-48-48zM125.08 97.94C81.2 87.42 36.73 113 25.76 155.11L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06L76 287.55c8.79 2.1 17.68-3 19.87-11.44L137 117c2.19-8.42-3.14-16.95-11.92-19.06z"
      opacity={0.4}
    />
    <path
      d="M81 472.23a32 32 0 0062.1 15.53l25.24-101L115.51 334zm162-248l22.43 22.43A32 32 0 00288 256h48v-64h-34.75l-46.78-46.78a58.78 58.78 0 00-98.59 27.3L129 280.24a32 32 0 008.42 30.39L224 397.25V480a32 32 0 0064 0v-82.75A63.58 63.58 0 00269.25 352l-46.82-46.82c.15-.5.49-.89.62-1.41z"
      className="hiking_svg__fa-primary"
    />
  </svg>
);

SvgHiking.displayName = "SvgHiking";
SvgHiking.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHiking;
