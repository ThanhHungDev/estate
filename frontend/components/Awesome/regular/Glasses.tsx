import * as React from "react";

const SvgGlasses = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-39.9 0-85.63 9.2-133.04 36.34H269.6c-47.41-27.15-93.13-36.35-133.04-36.35-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 000 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zM219.33 371c-2.6 34.2-32.03 61-67.02 61H115.2C78.15 432 48 402.44 48 366.11v-48.47c19.77-8.19 51.23-17.99 88.58-18 29.78 0 58.86 6.22 86.76 18.53L219.33 371zM528 366.12c0 36.33-30.15 65.88-67.2 65.88h-37.12c-34.98 0-64.42-26.79-67.01-61l-4.01-52.82c27.91-12.31 57-18.53 86.79-18.53 37.37 0 68.84 9.82 88.55 17.98v48.49z" />
  </svg>
);

SvgGlasses.displayName = "SvgGlasses";
SvgGlasses.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlasses;
