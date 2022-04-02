import * as React from "react";

const SvgHandshakeAltSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M289.09 64H205.3a32 32 0 00-22.6 9.41l-20.34 20.3 51.13 39.52zM16 128a16 16 0 00-16 16v191.91a16 16 0 0016 16h130.3l90.5 81.89a64 64 0 0090-9.3l.2-.2 17.91 15.5a37.16 37.16 0 0052.29-5.39l8.8-10.82L23.56 128zm608 0H512l-54.59-54.59A32 32 0 00434.8 64h-85.89a32 32 0 00-21.61 8.41l-88.12 80.68 64.22 49.63 32.69-29.92 27-24.7a16 16 0 0121.61 23.61l-26.11 23.89L504.2 313.8a63.4 63.4 0 0122.21 37.91H624a16.05 16.05 0 0016-16v-191.8A16 16 0 00624 128z"
      opacity={0.4}
    />
    <path
      d="M636.63 480.55L617 505.82a16 16 0 01-22.45 2.81L6.19 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.81 22.45z"
      className="handshake-alt-slash_svg__fa-primary"
    />
  </svg>
);

SvgHandshakeAltSlash.displayName = "SvgHandshakeAltSlash";
SvgHandshakeAltSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandshakeAltSlash;
