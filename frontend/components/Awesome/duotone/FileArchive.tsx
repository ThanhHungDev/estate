import * as React from "react";

const SvgFileArchive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M272 128a16 16 0 01-16-16V0h-96v32h-32V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zM95.9 32h32v32h-32zm83.47 342.08a52.43 52.43 0 11-102.74-21L96 256v-32h32v-32H96v-32h32v-32H96V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.33a12.08 12.08 0 0111.8 9.7l17.3 87.7a52.54 52.54 0 01-.06 20.68z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM127.9 32h-32v32h32zM96 160v32h32v-32zM160 0h-32v32h32zM96 96v32h32V96zm83.43 257.4l-17.3-87.7a12.08 12.08 0 00-11.8-9.7H128v-32H96v32l-19.37 97.1a52.43 52.43 0 10102.8.3zm-51.1 36.6c-17.9 0-32.5-12-32.5-27s14.5-27 32.4-27 32.5 12.1 32.5 27-14.5 27-32.4 27zM160 192h-32v32h32zm0-64h-32v32h32zm0-64h-32v32h32z"
      className="file-archive_svg__fa-primary"
    />
  </svg>
);

SvgFileArchive.displayName = "SvgFileArchive";
SvgFileArchive.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileArchive;
