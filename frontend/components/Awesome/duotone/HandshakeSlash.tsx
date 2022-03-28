import * as React from "react";

const SvgHandshakeSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M0 128.2V384h64a32 32 0 0032-32V184l-72.17-55.8zm48 191.89a16 16 0 11-16 16 16.05 16.05 0 0116-16zM289.09 64H205.3a31.94 31.94 0 00-22.6 9.4l-20.34 20.31 51.13 39.52zM128 351.91h18.3l90.5 81.89a64 64 0 0090-9.3l.2-.2 17.91 15.5a37.16 37.16 0 0052.29-5.39l8.8-10.83-278-214.86zM544 128.2v223.89a32 32 0 0032 32h64V128.2zm48 223.89a16 16 0 1116-16 16 16 0 01-16 16zM434.7 64h-85.9a32 32 0 00-21.6 8.4l-88.07 80.65 64.2 49.62 59.58-54.58a16 16 0 0121.59 23.61l-26.09 23.89L504 313.8a72.15 72.15 0 017.91 7.7V128L457.3 73.4a31.75 31.75 0 00-22.6-9.4z"
      opacity={0.4}
    />
    <path
      d="M636.63 480.55L617 505.82a16 16 0 01-22.45 2.81L6.19 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.81 22.45z"
      className="handshake-slash_svg__fa-primary"
    />
  </svg>
);

SvgHandshakeSlash.displayName = "SvgHandshakeSlash";
SvgHandshakeSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandshakeSlash;
