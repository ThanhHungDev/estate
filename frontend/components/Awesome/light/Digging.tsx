import * as React from "react";

const SvgDigging = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M208 464a16 16 0 01-32 0V325.11l-47.75-25L63 469.74A16 16 0 0148 480a16.28 16.28 0 01-5.75-1.07 16 16 0 01-9.18-20.68l66.59-173.14-28.54-14.95L3.2 446.75a48 48 0 0027.6 62A47.47 47.47 0 0048 512a48 48 0 0044.82-30.78l50.69-131.8.49.24V464a48 48 0 0096 0V358.63l-32-16.76zm103.06-48a32 32 0 00-30.35 21.88L256 512h320L474.07 305.68a32 32 0 00-56.07-2.15l-36 61.4-14.73-7.6a46.66 46.66 0 00-2.11-21.67c-10.16-28.14-18.47-51.81-25.47-71.84-22.73-64.81-35.05-99-56.65-122.69 30.45-8.4 53-36 53-69.13a72 72 0 00-144 0 71.26 71.26 0 004.91 25.56A145.19 145.19 0 00176.73 96H104a48 48 0 00-36.87 17.26l-40 48a48 48 0 006.16 67.61 47.46 47.46 0 0035.57 10.67l296.88 153L352 416zM264 32a40 40 0 11-40 40 40 40 0 0140-40zm-58.81 241.77l26.65-26.37c4.56 12.27 10.09 27.83 17.23 48.18.11.31.24.69.35 1zM290.88 318c-4.22-11.9-8.18-23.12-11.62-33-16.79-47.85-25.92-73.31-34.85-88.83l-64.55 64.53-74.63-38.49L167.45 160H111.5l-35.2 42.24a16 16 0 11-24.57-20.5l34.68-42.09a32 32 0 0124.7-11.65h64.36c17.49 0 34.93 3.48 50.65 11.17 43.35 21.2 49.94 39.93 83.32 135.24 6.42 18.28 14.07 40.06 23.05 65zm79.45 130l9.27-15.81L445.31 320h.12l79.07 160H300.41l10.66-32h59.26z" />
  </svg>
);

SvgDigging.displayName = "SvgDigging";
SvgDigging.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDigging;