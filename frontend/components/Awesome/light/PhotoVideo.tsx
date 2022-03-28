import * as React from "react";

const SvgPhotoVideo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 0H160c-17.67 0-32 13.13-32 29.33V128h128V32h256v288h-32v32h128c17.67 0 32-13.13 32-29.33V29.33C640 13.13 625.67 0 608 0zM224 96h-64V32h64zm384 224h-64v-64h64zm0-96h-64v-96h64zm0-128h-64V32h64zm-192 64H32a32 32 0 00-32 32v288a32 32 0 0032 32h384a32 32 0 0032-32V192a32 32 0 00-32-32zm0 320H32v-24l81.69-61.26 80 40 126.84-95.14L416 403.23zm0-115.23l-96.53-64.36-129.16 96.86-80-40L32 416V192h384zM112 320a48 48 0 10-48-48 48 48 0 0048 48zm0-64a16 16 0 11-16 16 16 16 0 0116-16z" />
  </svg>
);

SvgPhotoVideo.displayName = "SvgPhotoVideo";
SvgPhotoVideo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhotoVideo;
