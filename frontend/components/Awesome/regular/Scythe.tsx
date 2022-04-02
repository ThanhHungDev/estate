import * as React from "react";

const SvgScythe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 0H338.84C192 0 64 64 0 224h552.09l-13.28 64H400a16 16 0 00-16 16v16a16 16 0 0016 16h128.86l-32.58 157.05A16 16 0 00512 512h15.45a16 16 0 0015.72-13l96.27-461A32 32 0 00608 0zM78.62 176C134.84 91 222.06 48 338.84 48h249.75L562 176z" />
  </svg>
);

SvgScythe.displayName = "SvgScythe";
SvgScythe.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScythe;
