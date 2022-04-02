import * as React from "react";

const SvgUserTag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M630.6 364.9l-90.3-90.2A64 64 0 00495 256h-79.3a32 32 0 00-32 32v79.2a63.79 63.79 0 0018.7 45.2l90.3 90.2a32 32 0 0045.3 0l92.5-92.5a31.84 31.84 0 00.1-45.2zm-182.8-21a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M379.9 435a95.37 95.37 0 01-28.1-67.9V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.58 134.58 0 000 422.3v41.6a48 48 0 0048 48h352a47.78 47.78 0 0037.9-18.9zM224 255.9A128 128 0 1096 128a128 128 0 00128 127.9z"
      className="user-tag_svg__fa-primary"
    />
  </svg>
);

SvgUserTag.displayName = "SvgUserTag";
SvgUserTag.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserTag;
