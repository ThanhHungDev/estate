import * as React from "react";

const SvgCloud = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M543.7 200.1C539.7 142.1 491.4 96 432 96c-7.6 0-15.1.8-22.4 2.3C377.7 58.3 328.1 32 272 32c-84.6 0-155.5 59.7-172.3 139.8C39.9 196.1 0 254.4 0 320c0 88.4 71.6 160 160 160h336c79.5 0 144-64.5 144-144 0-61.8-39.2-115.8-96.3-135.9zM496 432H160c-61.9 0-112-50.1-112-112 0-56.4 41.7-103.1 96-110.9V208c0-70.7 57.3-128 128-128 53.5 0 99.3 32.8 118.4 79.4 11.2-9.6 25.7-15.4 41.6-15.4 35.3 0 64 28.7 64 64 0 11.8-3.2 22.9-8.8 32.4 2.9-.3 5.9-.4 8.8-.4 53 0 96 43 96 96s-43 96-96 96z" />
  </svg>
);

SvgCloud.displayName = "SvgCloud";
SvgCloud.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloud;
