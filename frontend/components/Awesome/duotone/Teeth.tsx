import * as React from "react";

const SvgTeeth = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M144 288H80a16 16 0 00-16 16v64a48 48 0 0096 0v-64a16 16 0 00-16-16zm-32-160a48 48 0 00-48 48v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a48 48 0 00-48-48zm176 160h-80a16 16 0 00-16 16v56a56 56 0 00112 0v-56a16 16 0 00-16-16zM248 96a56 56 0 00-56 56v88a16 16 0 0016 16h80a16 16 0 0016-16v-88a56 56 0 00-56-56zm184 192h-80a16 16 0 00-16 16v56a56 56 0 00112 0v-56a16 16 0 00-16-16zM392 96a56 56 0 00-56 56v88a16 16 0 0016 16h80a16 16 0 0016-16v-88a56 56 0 00-56-56zm168 192h-64a16 16 0 00-16 16v64a48 48 0 0096 0v-64a16 16 0 00-16-16zm-32-160a48 48 0 00-48 48v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a48 48 0 00-48-48z"
      opacity={0.4}
    />
    <path
      d="M544 0H96A96 96 0 000 96v320a96 96 0 0096 96h448a96 96 0 0096-96V96a96 96 0 00-96-96zM160 368a48 48 0 01-96 0v-64a16 16 0 0116-16h64a16 16 0 0116 16zm0-128a16 16 0 01-16 16H80a16 16 0 01-16-16v-64a48 48 0 0196 0zm144 120a56 56 0 01-112 0v-56a16 16 0 0116-16h80a16 16 0 0116 16zm0-120a16 16 0 01-16 16h-80a16 16 0 01-16-16v-88a56 56 0 01112 0zm144 120a56 56 0 01-112 0v-56a16 16 0 0116-16h80a16 16 0 0116 16zm0-120a16 16 0 01-16 16h-80a16 16 0 01-16-16v-88a56 56 0 01112 0zm128 128a48 48 0 01-96 0v-64a16 16 0 0116-16h64a16 16 0 0116 16zm0-128a16 16 0 01-16 16h-64a16 16 0 01-16-16v-64a48 48 0 0196 0z"
      className="teeth_svg__fa-primary"
    />
  </svg>
);

SvgTeeth.displayName = "SvgTeeth";
SvgTeeth.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTeeth;