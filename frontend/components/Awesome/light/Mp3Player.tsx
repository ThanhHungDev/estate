import * as React from "react";

const SvgMp3Player = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M64 192h256V64H64zm32-96h192v64H96zM336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm16 464a16 16 0 01-16 16H48a16 16 0 01-16-16V48a16 16 0 0116-16h288a16 16 0 0116 16zM192 224a112 112 0 10112 112 112.14 112.14 0 00-112-112zm0 192a80 80 0 1180-80 80.08 80.08 0 01-80 80zm0-104a24 24 0 1024 24 24 24 0 00-24-24z" />
  </svg>
);

SvgMp3Player.displayName = "SvgMp3Player";
SvgMp3Player.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMp3Player;
