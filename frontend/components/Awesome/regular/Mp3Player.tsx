import * as React from "react";

const SvgMp3Player = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M305 80H81v112h224zm32-80H49A48 48 0 001 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm0 464H49V48h288zM193 240a96 96 0 1096 96 96 96 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32z" />
  </svg>
);

SvgMp3Player.displayName = "SvgMp3Player";
SvgMp3Player.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMp3Player;
