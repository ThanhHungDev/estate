import * as React from "react";

const SvgTractor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M176 256c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm0 120c-22.06 0-40-17.94-40-40s17.94-40 40-40 40 17.94 40 40-17.94 40-40 40zm432-184h-64v-10.95c0-22.36 7.8-43.5 22.13-60.33 2.77-3.25 2.81-7.98-.21-11l-11.33-11.33c-3.22-3.22-8.62-3.23-11.63.2-20.02 22.82-30.96 51.79-30.96 82.46V192H368.57L284.73 18.1A32.02 32.02 0 00255.9 0H128c-17.67 0-32 14.33-32 32v155.75c-10.76-1.46-22.02 1.41-30.31 9.65l-28.28 28.28c-12.81 12.83-13.94 33-3.31 47.09-1.12 2.5-2.19 5.03-3.16 7.58C13.47 282.83 0 297.86 0 316v40c0 18.14 13.47 33.17 30.94 35.64.97 2.55 2.03 5.08 3.16 7.58-4.69 6.2-7.22 13.7-7.22 21.61-.03 9.62 3.72 18.69 10.53 25.48l28.28 28.28c12.88 12.83 33.03 13.94 47.09 3.33 2.5 1.11 5.03 2.16 7.56 3.14C122.81 498.52 137.88 512 156 512h40c18.12 0 33.19-13.48 35.66-30.94 2.53-.98 5.06-2.03 7.56-3.14 14.12 10.61 34.28 9.5 47.09-3.33l28.28-28.28c6.81-6.8 10.56-15.86 10.53-25.48 0-7.91-2.53-15.44-7.22-21.61 1.12-2.5 2.19-5.03 3.16-7.58 6.35-.9 11.82-3.88 16.66-7.64h84.15c-3.57 10.05-5.88 20.72-5.88 32 0 53.02 42.98 96 96 96s96-42.98 96-96c0-26.51-10.74-50.51-28.12-67.88l50.74-50.74c6-6 9.37-14.14 9.37-22.63V224c.02-17.67-14.31-32-31.98-32zM128 32h127.9l77.14 160h-54.6c-10.94-6.21-24.08-6.16-35.06 0h-9.17c-.86-.35-1.7-.73-2.56-1.06C229.19 173.48 214.12 160 196 160h-40c-11.53 0-21.4 5.81-28 14.27V32zm192 324c0 2.2-1.78 4-4 4h-18.41c-7.11 23.63-6.71 22.85-18.62 44.98l12.97 13.03.03 5.67-28.28 28.28c-1.56 1.61-4.09 1.55-5.66 0l-13-13c-21.74 11.68-21.66 11.65-45.03 18.61V476c0 2.2-1.78 4-4 4h-40c-2.22 0-4-1.8-4-4v-18.42c-23.37-6.96-23.29-6.93-45.03-18.61l-13 13a3.972 3.972 0 01-5.66 0l-28.28-28.28.03-5.67 12.97-13.03C61.11 382.84 61.51 383.6 54.41 360H36c-2.22 0-4-1.8-4-4v-40c0-2.2 1.78-4 4-4h18.41c7.15-23.77 6.72-22.83 18.62-45.02l-13-13a4.02 4.02 0 010-5.67l28.28-28.28c1.59-1.56 4.12-1.53 5.66 0l13 13c21.74-11.68 21.66-11.65 45.03-18.61V196c0-2.2 1.78-4 4-4h40c2.22 0 4 1.8 4 4v18.42c23.37 6.96 23.29 6.93 45.03 18.61l13-13c1.56-1.53 4.09-1.56 5.66 0l28.28 28.28a4.02 4.02 0 010 5.67l-13 13c11.91 22.2 11.48 21.28 18.62 45.02H316c2.22 0 4 1.8 4 4v40zm192 124c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm96-205.26l-54.85 54.85c-12.51-5.97-26.36-9.6-41.15-9.6-28.32 0-53.51 12.49-71.09 32H352v-36c0-18.14-13.47-33.17-30.94-35.64-.97-2.55-2.03-5.08-3.16-7.58 10.62-14.09 9.5-34.27-3.31-47.09l-1.69-1.69H608v50.75z" />
  </svg>
);

SvgTractor.displayName = "SvgTractor";
SvgTractor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTractor;