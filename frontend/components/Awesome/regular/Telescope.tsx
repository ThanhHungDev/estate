import * as React from "react";

const SvgTelescope = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M638.777 216.83L553.063 9.883a15.996 15.996 0 00-20.903-8.66L414.844 49.82a16 16 0 00-8.657 20.904l3.22 7.775L74.298 241.743c-8.317 4.064-12.276 13.256-9.056 21.03l8.744 21.108L9.88 310.436a16 16 0 00-8.66 20.904l20.056 48.422a16.001 16.001 0 0020.905 8.66l64.104-26.554 8.744 21.107c3.185 7.691 12.427 11.504 21.272 8.467l126.875-43.78c.229.295.479.57.711.862L216.42 490.94A16.001 16.001 0 00231.598 512h16.862a15.999 15.999 0 0015.176-10.941L305.8 374.563a71.115 71.115 0 0028.447 0l42.163 126.496A16.001 16.001 0 00391.59 512h16.86a16 16 0 0015.178-21.06l-47.47-142.416A71.276 71.276 0 00392.018 304c0-.264-.075-.506-.077-.768l96.725-33.375 3.236 7.815a16.002 16.002 0 0020.903 8.66l117.316-48.598a15.998 15.998 0 008.657-20.904zM320.023 328a24 24 0 1123.998-24 24.035 24.035 0 01-23.998 24zm55.123-69.747a71.55 71.55 0 00-126.92 43.792L147.81 336.694l-26.664-64.38 306.661-149.387 42.456 102.503zm148.856-28.514l-61.228-147.82 58.19-24.105 61.226 147.822z" />
  </svg>
);

SvgTelescope.displayName = "SvgTelescope";
SvgTelescope.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTelescope;