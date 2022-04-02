import * as React from "react";

const SvgListMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M8 224h272a8 8 0 008-8v-16a8 8 0 00-8-8H8a8 8 0 00-8 8v16a8 8 0 008 8zm152 104a8 8 0 00-8-8H8a8 8 0 00-8 8v16a8 8 0 008 8h144a8 8 0 008-8zM8 96h272a8 8 0 008-8V72a8 8 0 00-8-8H8a8 8 0 00-8 8v16a8 8 0 008 8zM470 1.64l-96.59 31.88C360.72 37.74 352 50 352 64v312.13C331.66 361.28 303.38 352 272 352c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V192l106.12-35.37A32 32 0 00512 126.27V32a32 32 0 00-42-30.36zM272 480c-47.14 0-80-25.3-80-48s32.86-48 80-48 80 25.3 80 48-32.86 48-80 48zm208-353.72l-96 32V64h-.56v-.13L480 32z" />
  </svg>
);

SvgListMusic.displayName = "SvgListMusic";
SvgListMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgListMusic;
