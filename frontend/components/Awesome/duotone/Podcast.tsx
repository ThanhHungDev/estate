import * as React from "react";

const SvgPodcast = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M224 0A223.88 223.88 0 000 224c0 90 52.6 165.65 125.74 201.41a6 6 0 008.53-6.31c-2.38-15.51-4.34-31-5.4-44.34a6 6 0 00-2.68-4.51A176 176 0 0148 222.9c.59-96.24 79.29-174.65 175.53-174.9C320.79 47.75 400 126.8 400 224a176 176 0 01-80.65 147.87c-1 14-3.07 30.59-5.62 47.23a6 6 0 008.53 6.31C395.23 389.73 448 314.19 448 224A223.89 223.89 0 00224 0zm98.45 325A143.63 143.63 0 00368 216.43c-1.86-76.21-63.6-138.21-139.8-140.37C146.87 73.75 80 139.21 80 220a143.62 143.62 0 0045.55 105 6 6 0 009.45-1.9 66.57 66.57 0 0121.24-25.36 6 6 0 00.63-9.19 96 96 0 11134.26 0 6 6 0 00.63 9.19A66.57 66.57 0 01313 323.1a6 6 0 009.45 1.9z"
      opacity={0.4}
    />
    <path
      d="M224 312c-32.86 0-64 8.59-64 43.75 0 33.15 12.93 104.38 20.57 132.81 5.14 19 24.57 23.44 43.43 23.44s38.29-4.43 43.43-23.44c7.7-28.63 20.57-99.86 20.57-132.81 0-35.16-31.14-43.75-64-43.75zm0-24a64 64 0 10-64-64 64 64 0 0064 64z"
      className="podcast_svg__fa-primary"
    />
  </svg>
);

SvgPodcast.displayName = "SvgPodcast";
SvgPodcast.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPodcast;
