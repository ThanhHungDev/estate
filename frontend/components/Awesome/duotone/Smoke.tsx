import * as React from "react";

const SvgSmoke = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M512 96c-46.8 0-87.3 25.3-109.6 62.8-22.3-18.9-50.8-30.8-82.4-30.8-51.7 0-95.9 30.8-116.1 74.8a174.6 174.6 0 0144.1 23.4 174.7 174.7 0 01243 34.9 136.5 136.5 0 0137-5.1c35.5 0 67.6 13.4 92.7 34.8A127.39 127.39 0 00512 96zm-192 0a157.94 157.94 0 0175.1 19.2c9.3-10.2 20.2-18.4 31.6-25.8A127.93 127.93 0 00320 32c-31.6 0-60.1 11.9-82.4 30.8C215.3 25.3 174.8 0 128 0A128 128 0 000 128c0 38.2 17.1 72.1 43.7 95.6a174 174 0 01129.4-29.1C197.2 136.8 253.7 96 320 96z"
      opacity={0.4}
    />
    <path
      d="M640 400a111.94 111.94 0 01-112 112H144a144 144 0 11104-243.2A143.18 143.18 0 01352 224c54.8 0 102 31 126.3 76.1A110.53 110.53 0 01528 288a111.94 111.94 0 01112 112z"
      className="smoke_svg__fa-primary"
    />
  </svg>
);

SvgSmoke.displayName = "SvgSmoke";
SvgSmoke.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSmoke;
