import * as React from "react";

const SvgHouseSignal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M635.23 196.42L576 144V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v39.29L423.52 8.92a35.33 35.33 0 00-46.93 0L164.8 196.42a14.18 14.18 0 00-1.23 20l18.79 21.28a14.21 14.21 0 0020 1.25L224 219.87v64A320.42 320.42 0 01305.24 416H544a32 32 0 0032-32V219.84L597.62 239a14.28 14.28 0 0020-1.25l18.79-21.28a14.25 14.25 0 00-1.18-20.05zM448 272a16.05 16.05 0 01-16 16h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16.05 16.05 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M0 416v96h96a96 96 0 00-96-96zm0-96v63.93A128.12 128.12 0 01128.07 512H192c0-106-86-192-192-192zm0-96v63.93c123.71 0 224.07 100.36 224.07 224.07H288c0-159.06-128.94-288-288-288z"
      className="house-signal_svg__fa-primary"
    />
  </svg>
);

SvgHouseSignal.displayName = "SvgHouseSignal";
SvgHouseSignal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouseSignal;
