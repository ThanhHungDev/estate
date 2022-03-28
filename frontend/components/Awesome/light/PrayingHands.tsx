import * as React from "react";

const SvgPrayingHands = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M502.58 340.23l127.06 39.99c5.14 1.58 10.35-2.26 10.35-7.65v-16.74c0-3.51-2.29-6.61-5.65-7.65L512 309.64v-66.51c0-22.28-5.81-44.17-16.87-63.51L408.65 28.26C398.71 10.83 380.07 0 359.99 0 345.2 0 330.73 6.01 320 16.94 309.27 6.01 294.8 0 280.01 0c-20.08 0-38.72 10.83-48.66 28.26l-86.49 151.37A128.015 128.015 0 00128 243.14v66.51L5.65 348.18A8.011 8.011 0 000 355.83v16.74c0 5.38 5.21 9.23 10.35 7.65l127.06-39.99c13.42-4.13 22.58-16.54 22.58-30.58v-66.51c0-16.71 4.36-33.13 12.65-47.63l86.51-151.4c6.93-12.16 21.84-15.16 32.75-8.94 11.5 6.58 15.5 21.25 8.94 32.75l-64.19 112.33A96.022 96.022 0 00224 227.88v84.13c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-64c0-13.25 10.75-24 24-24s24 10.75 24 24v86.08c0 35.86-23.87 67.34-58.39 77.03L5.84 479.68a8.008 8.008 0 00-5.84 7.7V504c0 5.3 5.06 9.13 10.16 7.7l244.09-69.77c28.41-7.97 51.4-26.63 65.75-50.73 14.35 24.09 37.34 42.76 65.75 50.73l244.09 69.77c5.1 1.43 10.16-2.4 10.16-7.7v-16.62c0-3.59-2.39-6.73-5.84-7.7l-239.77-68.56c-34.53-9.69-58.39-41.17-58.39-77.03v-86.08c0-13.25 10.75-24 24-24s24 10.75 24 24v64c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-84.13c0-16.71-4.36-33.13-12.65-47.63L339.16 67.92c-6.56-11.5-2.56-26.17 8.94-32.75 10.97-6.26 25.87-3.14 32.75 8.94l86.51 151.4a95.994 95.994 0 0112.65 47.63v66.51c-.01 14.04 9.15 26.44 22.57 30.58zM374.27 193.85c-6.35-1.68-13.14-2.26-20.16-1.54-13.66 1.4-25.37 8.22-34.11 17.95-8.73-9.73-20.45-16.55-34.11-17.95-7.01-.72-13.8-.14-20.16 1.54L320 98.89l54.27 94.96z" />
  </svg>
);

SvgPrayingHands.displayName = "SvgPrayingHands";
SvgPrayingHands.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPrayingHands;
