import * as React from "react";

const SvgSheep = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M622.25 105.96L576 83.22V64c0-17.67-14.33-32-32-32h-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v76.82c-17.53-15.92-47.07-15.86-64.62.42-8.6-8.16-20.16-13.24-32.99-13.24-12.47 0-24 4.8-32.64 12.8-8.64-8-19.83-12.8-32.64-12.8-12.47 0-24 4.8-32.31 12.8-8.64-8-20.16-12.8-32.64-12.8-13.12 0-24.97 5.44-33.61 13.75-11.19-9.28-26.23-13.75-41.59-10.23-17.59 3.84-31.03 16.95-35.84 33.28-16.64-2.88-34.23 3.2-45.44 17.28-11.52 14.08-13.44 32.64-7.03 48.31C9.92 206.72 0 222.39 0 240.31c0 18.23 10.23 33.92 24.95 41.92-6.41 15.69-4.16 34.23 7.05 48.31 11.52 14.09 29.11 20.17 45.75 17.28 4.08 13.61 14.64 24.76 28.47 30.27l-6.14 16.38a63.973 63.973 0 00-2.16 38l16.85 67.41A16.002 16.002 0 00130.29 512h65.96c10.41 0 18.05-9.78 15.52-19.88l-18.31-73.26 14.76-39.36c4.73-2.15 9.22-4.78 12.9-8.31 8.64 8 20.17 12.81 32.64 12.81 12.48 0 24-4.81 32.64-12.81 8.64 8 19.84 12.81 32.64 12.81 12.52 0 23.87-4.98 32.39-12.97.17.16.4.21.57.37V496c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V330.67L483.5 307a64.009 64.009 0 0028.5-53.25V192h87.66c9.26 0 17.76-4.9 22.37-12.94 7.59-13.26 17.98-33.45 17.98-44.59a31.798 31.798 0 00-17.76-28.51zM512 112c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z" />
  </svg>
);

SvgSheep.displayName = "SvgSheep";
SvgSheep.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSheep;
