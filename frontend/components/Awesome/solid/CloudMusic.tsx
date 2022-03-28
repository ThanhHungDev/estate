import * as React from "react";

const SvgCloudMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M537.59 226.59a96 96 0 00-142.9-114.39A160 160 0 0096 192c0 2.7.09 5.41.19 8.09A144 144 0 00144 480h368a128 128 0 0025.59-253.41zM384 352c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.89 69.89 0 0116 2v-76.36l-96 37.52V384c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.89 69.89 0 0116 2V239.25A16 16 0 01235.19 224l128-47.25A16 16 0 01384 192z" />
  </svg>
);

SvgCloudMusic.displayName = "SvgCloudMusic";
SvgCloudMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudMusic;
