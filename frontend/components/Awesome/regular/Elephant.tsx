import * as React from "react";

const SvgElephant = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M528 127.97c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm-16-96h-61.16c-3.64-3.77-7.46-7.4-11.71-10.66-25.97-19.88-59.44-26.22-91.82-17.46-18.04 4.9-33.88 14.96-46.49 28.11H192C85.96 31.97 0 117.93 0 223.98v112.01c0 8.84 7.16 16 16 16h16V480c0 17.67 14.33 32 32 32h80c17.67 0 32-14.33 32-32v-72.84c18.48 5.11 66.55 16.98 128 0V480c0 17.67 14.33 32 32 32h80c17.67 0 32-14.33 32-32V287.98h144v88.01c0 13.24-10.78 24-24 24s-24-10.77-24-24v-8c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v4.78c0 37.58 27.38 71.2 64.78 74.87 42.91 4.21 79.22-29.56 79.22-71.65V159.97c0-70.69-57.31-128-128-128zM400 464h-48V344.09c-120.67 33.34-111.08 31.2-224 0V464H80V303.98H48v-80.01c0-79.54 64.47-144.01 144-144.01h83.24c-6.11 26.93-2.43 54.18 11.54 77.47 11.53 19.19 28.91 34.05 49.22 42.53 0 40.15 27.18 73.73 64 84.26V464zm192-256.02c0 17.67-14.33 32-32 32H424c-22.06 0-40-17.94-40-40v-37.24c-22.65-4.59-41.89-6.4-56.06-30-16.43-27.46-7.38-71.86 31.94-82.57 29.16-7.91 55.52 6.33 66.66 29.8H512c44.11 0 80 35.89 80 80.01v48z" />
  </svg>
);

SvgElephant.displayName = "SvgElephant";
SvgElephant.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgElephant;
