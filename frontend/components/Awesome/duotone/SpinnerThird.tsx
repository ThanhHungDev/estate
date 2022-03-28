import * as React from "react";

const SvgSpinnerThird = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 01-6.94-19.2A184 184 0 11256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0115.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z"
      opacity={0.4}
    />
    <path
      d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 01-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 00440 256c0-96.49-74.27-175.63-168.77-183.38z"
      className="spinner-third_svg__fa-primary"
    />
  </svg>
);

SvgSpinnerThird.displayName = "SvgSpinnerThird";
SvgSpinnerThird.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpinnerThird;
