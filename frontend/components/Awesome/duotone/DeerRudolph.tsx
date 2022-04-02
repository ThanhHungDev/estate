import * as React from "react";

const SvgDeerRudolph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M191.9 55.8V8a8 8 0 018-8h16a8 8 0 018 8v47.8a16 16 0 0011.7 15.4l16.1 4.5 16.8-20.9a16 16 0 003.5-10V8a8 8 0 018-8h16a8 8 0 018 8v36.8a48.05 48.05 0 01-10.5 30l-8.3 10.3 33.8 9.5 42.6-21.3A47 47 0 00380.1 57l18-27.2a7.94 7.94 0 0111.1-2.2l13.3 8.9a7.94 7.94 0 012.2 11.1l-18.1 27.2a80.24 80.24 0 01-30.7 27.1l-12 5.59-19.19-5.33A32 32 0 00307.36 119l-2.36 4.82L226.9 102a48 48 0 01-35-46.2zM480 96a32 32 0 00-32 32c0 1 .05 2 .14 2.92l8.56 2.38a32.15 32.15 0 0123 26.69h.3a32 32 0 000-64z"
      opacity={0.4}
    />
    <path
      d="M456.7 133.3l-112-31.14A32 32 0 00307.36 119L272 192H64a64 64 0 00-64 64v64l32-20v47.6l-11.9 31.8a64.08 64.08 0 00-2.2 38l24.9 82.5A16 16 0 0058.3 512h63.8a16 16 0 0015.5-19.9l-26.3-88.4 19.4-51.7H256v144a16 16 0 0016 16h64a16 16 0 0016-16V288l32-64h64a32 32 0 0032-32v-27.9a32.13 32.13 0 00-23.3-30.8zM384 176a16 16 0 1116-16 16 16 0 01-16 16z"
      className="deer-rudolph_svg__fa-primary"
    />
  </svg>
);

SvgDeerRudolph.displayName = "SvgDeerRudolph";
SvgDeerRudolph.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDeerRudolph;
