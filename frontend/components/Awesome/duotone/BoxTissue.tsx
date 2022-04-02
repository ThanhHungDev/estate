import * as React from "react";

const SvgBoxTissue = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M384 288l64-192H338.6A70.2 70.2 0 01272 48a70.19 70.19 0 00-66.6-48H64l64 288z"
      opacity={0.4}
    />
    <path
      d="M0 480a32 32 0 0032 32h448a32 32 0 0032-32v-64H0zm480-256h-40.94l-21.33 64H432a16 16 0 010 32H80a16 16 0 010-32h15.22L81 224H32a32 32 0 00-32 32v128h512V256a32 32 0 00-32-32z"
      className="box-tissue_svg__fa-primary"
    />
  </svg>
);

SvgBoxTissue.displayName = "SvgBoxTissue";
SvgBoxTissue.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxTissue;
