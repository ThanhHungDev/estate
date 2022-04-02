import * as React from "react";

const SvgGarage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M368 416h-96a16 16 0 000 32h96a16 16 0 000-32zm242.59-297.67l-272-114.58a48 48 0 00-37.18 0l-272 114.58A47.84 47.84 0 000 162.53V504a8 8 0 008 8h16a8 8 0 008-8V162.53a16 16 0 019.81-14.79l272-114.6a15.75 15.75 0 0112.38 0l272 114.6a15.91 15.91 0 019.81 14.79V504a8 8 0 008 8h16a8 8 0 008-8V162.53a47.84 47.84 0 00-29.41-44.2zM512 192H128a32 32 0 00-32 32v280a8 8 0 008 8h16a8 8 0 008-8V352h384v152a8 8 0 008 8h16a8 8 0 008-8V224a32 32 0 00-32-32zm0 128H128v-96h384z" />
  </svg>
);

SvgGarage.displayName = "SvgGarage";
SvgGarage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGarage;
