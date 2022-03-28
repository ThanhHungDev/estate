import * as React from "react";

const SvgCloudMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M571.69 238.8A112 112 0 00464 96a110.64 110.64 0 00-48 10.8A175.82 175.82 0 00272 32c-94.41 0-171.69 74.5-175.81 168.2A144 144 0 00144 480h368a128 128 0 0059.69-241.2zM512 448H144a112 112 0 01-15-223 139.16 139.16 0 01-1-17 144.05 144.05 0 01277.41-54.41A80 80 0 01527.09 257.2 96 96 0 01512 448zM363.19 176.75l-128 47.25A16 16 0 00224 239.25V338a69.34 69.34 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32V259.16l96-37.52V306a69.34 69.34 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32V192a16 16 0 00-20.81-15.25z" />
  </svg>
);

SvgCloudMusic.displayName = "SvgCloudMusic";
SvgCloudMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudMusic;
