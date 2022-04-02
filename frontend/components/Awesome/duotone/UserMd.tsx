import * as React from "react";

const SvgUserMd = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M352 128a128 128 0 10-128 128 128 128 0 00128-128zM144 370.6V288h-9.6a135.6 135.6 0 00-22.4 1.87v80.73a56 56 0 1032 0zM128 448a24 24 0 1124-24 23.94 23.94 0 01-24 24zm191.8-85.6v-74.25c-2.06-.1-4.12-.15-6.2-.15h-16.7q-4.38 2-8.9 3.79v70.41c-28.2 7.5-48 34.5-48 64.6V456a16.06 16.06 0 004.7 11.3l10.3 10.3a8 8 0 0011.3 0l11.3-11.3a8 8 0 000-11.3l-5.7-5.7V424a32.14 32.14 0 0137.4-31.6c15.7 2.6 26.6 17.4 26.6 33.3v23.6l-5.7 5.7a8 8 0 000 11.3l11.3 11.3a8 8 0 0011.3 0l10.3-10.3a16.06 16.06 0 004.7-11.3v-32a63.8 63.8 0 00-48-61.6z"
      opacity={0.4}
    />
    <path
      d="M319.8 288.15v74.25a63.8 63.8 0 0148 61.6v32a16.06 16.06 0 01-4.7 11.3l-10.3 10.3a8 8 0 01-11.3 0l-11.3-11.3a8 8 0 010-11.3l5.7-5.7v-23.6c0-15.9-10.9-30.7-26.6-33.3a32.14 32.14 0 00-37.4 31.6v25.3l5.7 5.7a8 8 0 010 11.3l-11.3 11.3a8 8 0 01-11.3 0l-10.3-10.3A16.06 16.06 0 01240 456v-29.2c0-30.1 19.8-57.1 48-64.6v-70.41A174 174 0 01151.1 288H144v82.6a56 56 0 11-32 0v-80.73A134.47 134.47 0 000 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6a134.44 134.44 0 00-128.2-134.25zM104 424a24 24 0 1024-24 23.94 23.94 0 00-24 24z"
      className="user-md_svg__fa-primary"
    />
  </svg>
);

SvgUserMd.displayName = "SvgUserMd";
SvgUserMd.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserMd;
