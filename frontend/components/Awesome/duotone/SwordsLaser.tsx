import * as React from "react";

const SvgSwordsLaser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M256 313.2l42.695-46.68L256 220.032zM135.03 7.03a24.01 24.01 0 00-.64 33.287L360.053 286.02V182.497L168.32 6.39a24.015 24.015 0 00-33.289.64zm369.938-.002a24.001 24.001 0 00-33.274-.64L343.656 123.985l37.813 34.728a47.927 47.927 0 0118.71-3.78c.184 0 .356.05.54.052l104.89-114.678a24.001 24.001 0 00-.64-33.279z"
      opacity={0.4}
    />
    <path
      d="M196.601 224.63l-28.765 29.112a32.007 32.007 0 00-45.278 45.252L9.336 412.154a32.07 32.07 0 00.011 45.25l45.309 45.238a32.018 32.018 0 0045.25-.01l119.36-118.374A15.987 15.987 0 00224 372.9V235.871c0-14.304-17.344-21.42-27.399-11.242zM168.54 360.446a16 16 0 1116.008-16 16.005 16.005 0 01-16.008 16zm377.242-33.203l-22.633 22.639L630.652 457.39l.004-.002a32.088 32.088 0 00.008-45.261zM411.437 191.706c-10.062-10.157-27.375-3.034-27.375 11.261v136.996a16.012 16.012 0 004.688 11.318l55.187 55.178 90.532-90.531zm43.817 226.07l84.87 84.853a31.992 31.992 0 0045.235.01l.004-.006L477.879 395.15zm33.941-33.944l107.488 107.492 22.645-22.623-107.5-107.502z"
      className="swords-laser_svg__fa-primary"
    />
  </svg>
);

SvgSwordsLaser.displayName = "SvgSwordsLaser";
SvgSwordsLaser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSwordsLaser;
