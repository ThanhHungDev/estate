import * as React from "react";

const SvgStarExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M260.2 158.3c-.2-3.4 2.5-6.3 6-6.3h43.6c3.4 0 6.2 2.9 6 6.3l-7.3 132c-.2 3.2-2.8 5.7-6 5.7h-28.9c-3.2 0-5.8-2.5-6-5.7l-7.4-132zM288 320c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm257.9-94L440.1 329l25 145.5c4.5 26.2-23.1 46-46.4 33.7L288 439.6l-130.7 68.7c-23.4 12.3-50.9-7.6-46.4-33.7l25-145.5L30.1 226c-19-18.5-8.5-50.8 17.7-54.6L194 150.2l65.3-132.4c11.8-23.8 45.7-23.7 57.4 0L382 150.2l146.1 21.2c26.2 3.8 36.7 36.1 17.8 54.6zm-22.4-22.9l-162.7-23.7L288 32l-72.8 147.4-162.7 23.7 117.7 114.8-27.8 162L288 403.4l145.5 76.5-27.8-162 117.8-114.8z" />
  </svg>
);

SvgStarExclamation.displayName = "SvgStarExclamation";
SvgStarExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarExclamation;
