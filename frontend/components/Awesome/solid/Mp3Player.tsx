import * as React from "react";

const SvgMp3Player = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zM192 448a96 96 0 1196-96 96 96 0 01-96 96zm128-256H64V64h256zM192 320a32 32 0 1032 32 32 32 0 00-32-32z" />
  </svg>
);

SvgMp3Player.displayName = "SvgMp3Player";
SvgMp3Player.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMp3Player;
