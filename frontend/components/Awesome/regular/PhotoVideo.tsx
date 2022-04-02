import * as React from "react";

const SvgPhotoVideo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 0H160c-17.67 0-32 13.13-32 29.33V112h48V48h48v64h48V48h224v304h112c17.67 0 32-13.13 32-29.33V29.33C640 13.13 625.67 0 608 0zm-16 304h-48v-56h48zm0-104h-48v-48h48zm0-96h-48V48h48zM128 320a32 32 0 10-32-32 32 32 0 0032 32zm288-160H32a32 32 0 00-32 32v288a32 32 0 0032 32h384a32 32 0 0032-32V192a32 32 0 00-32-32zm-16 240L299.31 299.31a16 16 0 00-22.62 0L176 400l-36.69-36.69a16 16 0 00-22.62 0L48 432V208h352z" />
  </svg>
);

SvgPhotoVideo.displayName = "SvgPhotoVideo";
SvgPhotoVideo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhotoVideo;
