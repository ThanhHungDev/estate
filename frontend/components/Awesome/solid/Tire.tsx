import * as React from "react";

const SvgTire = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm0 448c-105.87 0-192-86.13-192-192S150.13 64 256 64s192 86.13 192 192-86.13 192-192 192zm-80-192c0-17.82 6.03-34.12 15.88-47.41l-48.23-66.38C114.27 171.22 96 211.45 96 256c0 8.87 1.22 17.42 2.61 25.89l77.46-25.17c0-.24-.07-.47-.07-.72zm15 46.36l-77.42 25.15c22.86 45.4 66.32 78.17 118.42 86.07v-81.65c-16.69-5.28-31.04-15.64-41-29.57zM256 176c8.87 0 17.25 1.79 25.22 4.45l47.93-65.97C307.14 103.06 282.51 96 256 96s-51.14 7.06-73.15 18.48l47.93 65.97c7.97-2.66 16.35-4.45 25.22-4.45zm112.35-33.79l-48.23 66.38C329.97 221.88 336 238.18 336 256c0 .25-.07.48-.07.73l77.46 25.17c1.39-8.48 2.61-17.02 2.61-25.89 0-44.56-18.27-84.79-47.65-113.8zM280 331.93v81.65c52.1-7.9 95.55-40.67 118.42-86.07L321 302.36c-9.96 13.93-24.31 24.29-41 29.57zM256 224c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z" />
  </svg>
);

SvgTire.displayName = "SvgTire";
SvgTire.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTire;
