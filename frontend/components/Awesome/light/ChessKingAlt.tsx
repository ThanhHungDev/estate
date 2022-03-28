import * as React from "react";

const SvgChessKingAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M295.16 435.58L272 424v-16a24 24 0 00-24-24h-13.09A469.21 469.21 0 01224 284.53V256h24a8 8 0 008-8v-16a8 8 0 00-8-8h-16.9l31.81-84.78a32 32 0 00-30-43.22H176V64h24a8 8 0 008-8V40a8 8 0 00-8-8h-24V8a8 8 0 00-8-8h-16a8 8 0 00-8 8v24h-24a8 8 0 00-8 8v16a8 8 0 008 8h24v32H87.09a32 32 0 00-30 43.25L88.91 224H72a8 8 0 00-8 8v16a8 8 0 008 8h24v28.53A469.21 469.21 0 0185.09 384H72a24 24 0 00-24 24v16l-23.15 11.58A16 16 0 0016 449.89V496a16 16 0 0016 16h256a16 16 0 0016-16v-46.11a16 16 0 00-8.84-14.31zM87.09 128h145.85l-36 96h-73.85zM128 284.53V256h64v28.53A500.84 500.84 0 00202.1 384h-84.2a500.84 500.84 0 0010.1-99.47zM272 480H48v-20.22l32-16V416h160v27.78l32 16z" />
  </svg>
);

SvgChessKingAlt.displayName = "SvgChessKingAlt";
SvgChessKingAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessKingAlt;
