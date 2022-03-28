import * as React from "react";

const SvgGlobeSnow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M67.9 384H192v-32h-57.9c-14.2 0-22-15-12.9-24.9l65.5-71.1h-30.1c-10.7 0-16.5-11.2-9.7-18.7l67.4-73.2a13.35 13.35 0 0119.3 0l67.4 73.2c6.8 7.4 1 18.7-9.7 18.7h-30.1l65.5 71.1c9.1 9.9 1.3 24.9-12.9 24.9H256v32h124.1c41.7-40.6 67.9-97.1 67.9-160C448 100.3 347.7 0 224 0S0 100.3 0 224c0 62.9 26.1 119.4 67.9 160zM336 160a16 16 0 11-16 16 16 16 0 0116-16zm-96-96a16 16 0 11-16 16 16 16 0 0116-16zM80 224a16 16 0 11-16 16 16 16 0 0116-16z"
      opacity={0.4}
    />
    <path
      d="M134.1 352H192v32h64v-32h57.8c14.2 0 22-15 12.9-24.9L261.2 256h30.1c10.7 0 16.5-11.3 9.7-18.7l-67.4-73.2a13.35 13.35 0 00-19.3 0l-67.4 73.2c-6.8 7.5-1 18.7 9.7 18.7h30.1l-65.5 71.1c-9.1 9.9-1.3 24.9 12.9 24.9zm297.3 135.1L384 416H64l-47.4 71.1A16 16 0 0029.9 512h388.2a16 16 0 0013.3-24.9z"
      className="globe-snow_svg__fa-primary"
    />
  </svg>
);

SvgGlobeSnow.displayName = "SvgGlobeSnow";
SvgGlobeSnow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlobeSnow;
