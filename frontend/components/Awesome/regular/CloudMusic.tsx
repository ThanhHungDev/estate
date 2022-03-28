import * as React from "react";

const SvgCloudMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M543.69 200.09A111.8 111.8 0 00409.59 98.3a176 176 0 00-309.9 73.5A160 160 0 00160 480h336a144 144 0 0047.69-279.91zM496 432H160a112 112 0 01-16-222.91V208a128 128 0 01246.41-48.59 64 64 0 0196.78 81A81.06 81.06 0 01496 240a96 96 0 010 192zM363.19 176.75l-128 47.25A16 16 0 00224 239.25V338a69.27 69.27 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32v-84.84l96-37.52V306a69.27 69.27 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32V192a16 16 0 00-20.81-15.25z" />
  </svg>
);

SvgCloudMusic.displayName = "SvgCloudMusic";
SvgCloudMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudMusic;
