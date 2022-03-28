import * as React from "react";

const SvgFileVideo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-64 264c0 21.44-25.94 32-41 17l-55-55v38a24 24 0 01-24 24H88a24 24 0 01-24-24V280a24 24 0 0124-24h112a24 24 0 0124 24v38.06l55-55c15-15.06 41-4.5 41 16.94z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-98 158.06l-55 55V280a24 24 0 00-24-24H88a24 24 0 00-24 24v112a24 24 0 0024 24h112a24 24 0 0024-24v-38l55 55c15.06 15 41 4.44 41-17V280c0-21.44-26-32-41-16.94z"
      className="file-video_svg__fa-primary"
    />
  </svg>
);

SvgFileVideo.displayName = "SvgFileVideo";
SvgFileVideo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileVideo;
