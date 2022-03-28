import * as React from "react";

const SvgKidneys = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M273.01 217.61l-38.77-20.36c2.87-3.38 5.84-6.25 8.42-8.47 39.91-34.35 55.32-103 8.94-153.13-40.67-43.95-110.76-47.78-156.24-8.6C14.53 96.69-18.2 199.6 9.9 295.58c24.29 83.83 92.05 88.38 109.62 88.38 22.23 0 70.65-8.2 97.65-56.45 13.83-24.74 17.11-53.24 9.41-80.25l24.94 13.3c2.72 1.38 4.44 4.09 4.44 7.16l.03 228.28c0 8.84 7.17 16 16 16H288c8.84 0 16-7.17 16-16l-.02-228.28c0-21.33-11.84-40.52-30.97-50.11zm-61.68-65.22c-11.34 9.76-49.83 42.31-31.01 107.46 11.53 39.19-18.57 66.98-43.39 73.73-33.6 9.13-68.93-10.38-78.08-41.54-27.18-93.78 3.57-173.24 67.83-228.63 27.3-23.5 67.34-19.29 89.65 4.83 22.73 24.54 20.71 61.97-5 84.15zM544.64 27.05c-45.48-39.18-115.56-35.35-156.23 8.6-46.38 50.12-30.97 118.78 8.94 153.13a79.29 79.29 0 018.42 8.47L367 217.61c-19.13 9.6-30.98 28.79-30.98 50.11L336 496c0 8.84 7.17 16 16 16h16.01c8.84 0 16-7.17 16-16l.02-228.28c0-3.06 1.72-5.78 4.44-7.16l24.94-13.3c-7.7 27.01-4.42 55.51 9.41 80.25 27 48.25 75.42 56.45 97.65 56.45 17.58 0 85.33-4.55 109.62-88.38 28.11-95.98-4.62-198.89-85.45-268.53zm36.51 265c-9.16 31.16-44.48 50.67-78.08 41.54-24.82-6.75-54.92-34.54-43.39-73.73 18.82-65.15-19.67-97.7-31.01-107.46-25.71-22.18-27.73-59.61-5-84.14 22.31-24.12 62.35-28.33 89.65-4.83 64.26 55.38 95.01 134.83 67.83 228.62z" />
  </svg>
);

SvgKidneys.displayName = "SvgKidneys";
SvgKidneys.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKidneys;