import * as React from "react";

const SvgToiletPaperSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M160 0c-23.33 0-44.63 16.83-61.26 44.53L384 265v-73c0-83.62 23.63-153.5 60.5-192zM64 192v172.12c0 41.13-9.75 62.76-31.12 126.88A16 16 0 0048 512h280.87a31.87 31.87 0 0030.38-21.88c9.31-27.83 18-53.34 22.18-85.54L65.4 160.33C64.54 170.66 64 181.19 64 192zM512 0c-53 0-96 86-96 192 0 42 7 80.4 18.43 112l97.42 75.29C575.29 360.91 608 284.32 608 192 608 86 565 0 512 0zm0 256c-17.63 0-32-28.62-32-64s14.37-64 32-64 32 28.62 32 64-14.37 64-32 64z"
      opacity={0.4}
    />
    <path
      d="M6.18 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.46-2.81L633.82 458.1a16 16 0 012.81 22.45L617 505.82a16 16 0 01-22.45 2.81z"
      className="toilet-paper-slash_svg__fa-primary"
    />
  </svg>
);

SvgToiletPaperSlash.displayName = "SvgToiletPaperSlash";
SvgToiletPaperSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToiletPaperSlash;
