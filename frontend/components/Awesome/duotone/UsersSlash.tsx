import * as React from "react";

const SvgUsersSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M173.09 274.59A63.78 63.78 0 00128 256H64a64.06 64.06 0 00-64 64v32a32 32 0 0032 32h65.91a146.64 146.64 0 0175.18-109.41zM432 144A111.93 111.93 0 00320 32c-57.13 0-103.68 42.83-110.6 98.07L361 247.22c41.44-16.29 71-55.92 71-103.22zm112 80a64 64 0 10-64-64 64.06 64.06 0 0064 64zm-448 0a63.5 63.5 0 0036.65-11.68l-96.44-74.54A63.4 63.4 0 0032 160a64.06 64.06 0 0064 64zm32 179.2V432a48 48 0 0048 48h288a47.45 47.45 0 0012.57-1.87L232 289.13c-58.26 5.69-104 54.29-104 114.07zM576 256h-64a63.78 63.78 0 00-45.09 18.59A146.3 146.3 0 01542 384h66a32 32 0 0032-32v-32a64.06 64.06 0 00-64-64z"
      opacity={0.4}
    />
    <path
      d="M6.19 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.81 22.45L617 505.82a16 16 0 01-22.45 2.81z"
      className="users-slash_svg__fa-primary"
    />
  </svg>
);

SvgUsersSlash.displayName = "SvgUsersSlash";
SvgUsersSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUsersSlash;
