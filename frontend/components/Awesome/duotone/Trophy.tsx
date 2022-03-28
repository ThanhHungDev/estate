import * as React from "react";

const SvgTrophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M192 432c-35.3 0-64 20.7-64 56v12a12 12 0 0012 12h296a12 12 0 0012-12v-12c0-35.3-28.7-56-64-56z"
      opacity={0.4}
    />
    <path
      d="M552 64H448V24a23.94 23.94 0 00-23.88-24H152a23.94 23.94 0 00-24 23.88V64H24A23.94 23.94 0 000 87.88V144c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h96v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88a23.94 23.94 0 00-23.88-24H552zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2a359 359 0 0012.8 86.2 160.91 160.91 0 01-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8a161.68 161.68 0 01-41.8 21.4 359 359 0 0012.8-86.2H512z"
      className="trophy_svg__fa-primary"
    />
  </svg>
);

SvgTrophy.displayName = "SvgTrophy";
SvgTrophy.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrophy;