import * as React from "react";

const SvgSnowplow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M360 376c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm212.4 47.4c-9-9-14.1-21.2-14.1-34v-139c0-12.7 5.1-25 14.1-34l65.2-63.6c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0l-65.3 63.6c-15 15-23.4 35.4-23.4 56.6V304h-96.1v-66.9c0-8.7-1.8-17.2-5.2-25.2L346.7 29.1C339.1 11.4 321.8 0 302.5 0H158.2c-26.5 0-48 21.5-48 48v80h-16c-26.5 0-48 21.5-48 48v133.7C18.3 330.1 0 362.8 0 400c0 61.9 50.1 112 112 112h256c61.9 0 112-50.1 112-112 0-23.8-7.6-45.8-20.3-64h66.6v53.5c0 21.2 8.4 41.6 23.4 56.6l65.2 63.6c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-65.1-63.7zM142.2 128V48c0-8.8 7.2-16 16-16h144.3c6.5 0 12.3 3.8 14.8 9.7L395.4 224H214.2l-72-95.7v-.3zm-64 48c0-8.8 7.2-16 16-16H126l67.4 89.6c3 4 7.8 6.4 12.8 6.4h192v36.6c-9.7-2.7-19.7-4.6-30.2-4.6H112c-11.9 0-23.1 2.3-33.8 5.8V176zM368 480H112c-44.1 0-80-35.9-80-80s35.9-80 80-80h256c44.1 0 80 35.9 80 80s-35.9 80-80 80zM120 376c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

SvgSnowplow.displayName = "SvgSnowplow";
SvgSnowplow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSnowplow;
