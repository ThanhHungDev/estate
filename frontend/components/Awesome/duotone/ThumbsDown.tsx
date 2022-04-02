import * as React from "react";

const SvgThumbsDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 277.9c-.16 30.35-26.16 58.1-59.55 58.1H350.72C358 364.34 384 388.13 384 430.55 384 504 336 512 312 512c-20.18 0-29.48-39.29-33.93-57.79-5.21-21.67-10.59-44.07-25.39-58.91-32.47-32.52-49.51-74-89.12-113.11a12 12 0 01-3.56-8.52V59.9a12 12 0 0111.78-12c15.83-.29 36.7-9.08 52.66-16.17C256.19 17.6 295.71 0 344 0h2.85c42.78 0 93.36.41 113.77 29.74 8.39 12.05 10.45 27 6.15 44.63 16.31 17 25.06 48.86 16.38 74.76 17.55 23.43 19.15 56.13 9.31 79.46l.11.12C504.45 240.65 512.08 260 512 277.9z"
      opacity={0.4}
    />
    <path
      d="M104 32H24A24 24 0 000 56v240a24 24 0 0024 24h80a24 24 0 0024-24V56a24 24 0 00-24-24zM64 280a24 24 0 1124-24 24 24 0 01-24 24z"
      className="thumbs-down_svg__fa-primary"
    />
  </svg>
);

SvgThumbsDown.displayName = "SvgThumbsDown";
SvgThumbsDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThumbsDown;
