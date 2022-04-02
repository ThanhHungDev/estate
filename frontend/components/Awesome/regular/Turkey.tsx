import * as React from "react";

const SvgTurkey = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M534 207.93a72.05 72.05 0 0026.69 7.73c27.78 2.49 74.43-14.46 79-65.95a72.9 72.9 0 00-58.82-77.89C580.55 44 558.34 0 508 0a72.34 72.34 0 00-72.45 66.25A71.24 71.24 0 00438 92.4c3.77 13.11-2.89 16.09-12.16 23.83a165.52 165.52 0 01-18.4 13C371 108.72 330.67 96 288 96 128.94 96 0 269.13 0 384s128.94 128 288 128 288-13.12 288-128c0-51.4-25.94-114.38-68.71-168.37 1.77-1.59 3.23-3.44 5.07-5 2.82-2.33 8.64-9.43 21.64-2.7zM528 384c0 50.67-39.27 80-240 80S48 434.67 48 384c0-92.58 109.84-240 240-240a182.57 182.57 0 0154.21 8.72c-4.95.71-9.86 1.72-14.87 2-18.11.91-107.67 8.32-130.92 96.89-10.46 39.84-2.18 81.19 22.72 113.47 47.14 61.11 114.93 51.34 130.15 48.45 49.53-9.4 89.36-49.34 101.49-101.75a187.94 187.94 0 0124.94-59.22C508.22 296 528 344.86 528 384zm-46.39-210.21c-38.49 32.11-66 77.26-77.58 127.14-7.84 33.88-32.84 59.56-63.68 65.41-48.9 9.27-75.82-21.06-83.19-30.61a82.57 82.57 0 01-14.3-72c3.54-13.49 20.27-57.79 86.89-61.14 73.34-3.68 118.81-42.52 133.76-55.29 23.1-19.62 26.14-38.34 20.95-68.07s19.89-31.2 23.2-31.2c10.35 0 26.95 6.6 25.15 26.87-.14 1.6-2 6.75-4.47 13.25-6.67 17.3 8 35.25 26.35 32.31 17.65-2.84 23.34-2 30.66 6a24.93 24.93 0 016.55 19c-.47 5.33-7.73 30.79-38 18.83-8.23-3.25-18.47-7.3-30.75-7.3-14.38.01-27.96 5.5-41.54 16.8z" />
  </svg>
);

SvgTurkey.displayName = "SvgTurkey";
SvgTurkey.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTurkey;
