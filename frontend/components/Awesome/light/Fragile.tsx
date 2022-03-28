import * as React from "react";

const SvgFragile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M213.9 480H160V350.3c76.7-8.7 134.6-77.6 127.4-157.6l-16-178.1C270.7 6.3 263.9 0 255.7 0H32.3c-8.2 0-15 6.3-15.7 14.6L.6 192.7c-7.2 80 50.7 148.9 127.4 157.6V480H74.1c-24.5 0-33.2 32-20 32h179.8c13.1 0 4.5-32-20-32zM32.5 195.5L47.1 32h71.8L154 90.5c-82.7 49.6-60.8 36.5-86.3 51.8 27.1 21 12.5 9.7 113.5 87.9 3.3 2.5 8 2.3 11-.7 3.3-3.2 3.3-8.5 0-11.8l-70.5-70.6c72.1-43.3 58.3-35 76.2-45.7L156.3 32h84.6l14.6 163.5C260.6 252.7 218.8 320 144 320S27.3 252.9 32.5 195.5z" />
  </svg>
);

SvgFragile.displayName = "SvgFragile";
SvgFragile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFragile;
