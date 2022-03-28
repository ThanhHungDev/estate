import * as React from "react";

const SvgSoap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M320 128a64 64 0 1064 64 64 64 0 00-64-64zM208 0a48 48 0 1048 48 48 48 0 00-48-48zm176 0a32 32 0 1032 32 32 32 0 00-32-32z"
      opacity={0.4}
    />
    <path
      d="M416 192a95.42 95.42 0 01-30.94 70.21A95.8 95.8 0 01352 448H160a96 96 0 010-192h88.91A95.3 95.3 0 01224 192H96a96 96 0 00-96 96v128a96 96 0 0096 96h320a96 96 0 0096-96V288a96 96 0 00-96-96zM96 352a64 64 0 0064 64h192a64 64 0 000-128H160a64 64 0 00-64 64z"
      className="soap_svg__fa-primary"
    />
  </svg>
);

SvgSoap.displayName = "SvgSoap";
SvgSoap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSoap;
