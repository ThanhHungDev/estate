import * as React from "react";

const SvgShopware = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M403.5 455.41A246.17 246.17 0 01256 504C118.81 504 8 393 8 256 8 118.81 119 8 256 8a247.39 247.39 0 01165.7 63.5 3.57 3.57 0 01-2.86 6.18A418.62 418.62 0 00362.13 74c-129.36 0-222.4 53.47-222.4 155.35 0 109 92.13 145.88 176.83 178.73 33.64 13 65.4 25.36 87 41.59a3.58 3.58 0 010 5.72zM503 233.09a3.64 3.64 0 00-1.27-2.44c-51.76-43-93.62-60.48-144.48-60.48-84.13 0-80.25 52.17-80.25 53.63 0 42.6 52.06 62 112.34 84.49 31.07 11.59 63.19 23.57 92.68 39.93a3.57 3.57 0 005-1.82A249 249 0 00503 233.09z" />
  </svg>
);

SvgShopware.displayName = "SvgShopware";
SvgShopware.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShopware;
