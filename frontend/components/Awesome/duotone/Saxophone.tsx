import * as React from "react";

const SvgSaxophone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M635.28 68.69L608 41.37A32 32 0 00585.34 32h-46.83a64 64 0 00-45.26 18.74L210 334a25.41 25.41 0 01-39.76-31l76.16-127H272a16 16 0 0016-16v-16a16 16 0 00-16-16H16a16 16 0 00-16 16v16a16 16 0 0016 16h11.46C18.65 207.92 0 280.13 0 320c0 61.4 35 114.09 85.73 140.92A150 150 0 00160 480c77.1 0 116.46-51.33 128-64l246.39-308a32 32 0 0125-12H624c14.22 0 21.36-17.23 11.28-27.31zM96 344a24 24 0 1124-24 24 24 0 01-24 24zm32-96a24 24 0 1124-24 24 24 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M320 180.69L308.69 192a16 16 0 000 22.63L319 225l34-34-10.34-10.34a16 16 0 00-22.66.03zm118.63-96a16 16 0 00-22.63 0L404.69 96a16 16 0 000 22.63L415 129l34-34zm-70.63 48L356.69 144a16 16 0 000 22.63L367 177l34-34-10.34-10.34a16 16 0 00-22.66.03zM96 296a24 24 0 1024 24 24 24 0 00-24-24zm32-96a24 24 0 1024 24 24 24 0 00-24-24z"
      className="saxophone_svg__fa-primary"
    />
  </svg>
);

SvgSaxophone.displayName = "SvgSaxophone";
SvgSaxophone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSaxophone;
