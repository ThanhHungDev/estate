import * as React from "react";

const SvgFileTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M369.9 97.9L286 14A48 48 0 00252.1-.1H48A48.16 48.16 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V131.9a48.23 48.23 0 00-14.1-34zm-22.6 22.7a15.73 15.73 0 014.2 7.4H256V32.5a15.73 15.73 0 017.4 4.2zM336 480H48a16 16 0 01-16-16V48a16 16 0 0116-16h176v104a23.94 23.94 0 0024 24h104v304a16 16 0 01-16 16zm-73.29-110.95l-5.66 5.66a12 12 0 01-17 0L192 326.63l-48.08 48.08a12 12 0 01-17 0l-5.66-5.66a12 12 0 010-17L169.37 304l-48.08-48.08a12 12 0 010-17l5.66-5.66a12 12 0 0117 0L192 281.37l48.08-48.08a12 12 0 0117 0l5.66 5.66a12 12 0 010 17L214.63 304l48.08 48.08a12 12 0 010 16.97z" />
  </svg>
);

SvgFileTimes.displayName = "SvgFileTimes";
SvgFileTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileTimes;
