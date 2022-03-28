import * as React from "react";

const SvgMicrophoneStand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M475.78 33.5a122.38 122.38 0 00-170.45 2.13l-28.77 28.68a121 121 0 00-35.66 85.08L12.06 406.85a47.88 47.88 0 002 65.71l25.46 25.38a48.27 48.27 0 0065.93 2l150.42-133.6V504a8 8 0 008 8H280a8 8 0 008-8V338l75.85-66.08a121.82 121.82 0 0085.37-35.54l25.09-25C523 162.86 525.64 80.79 475.78 33.5zM84.25 476a16.08 16.08 0 01-22-.68l-25.44-25.39a16 16 0 01-.72-21.86l219.39-246.83 76.4 76.13zM426.5 213.74a89.56 89.56 0 01-62.92 26.17h-3.8L273 153.42v-3.78a88.92 88.92 0 0126.27-62.7l11.06-11 127.24 126.77zm33.28-34.14L333.52 53.77A89.34 89.34 0 01459.78 179.6z" />
  </svg>
);

SvgMicrophoneStand.displayName = "SvgMicrophoneStand";
SvgMicrophoneStand.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrophoneStand;
