import * as React from "react";

const SvgLightbulbExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 352 512" {...props}>
    <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0026.64 14.28h61.71a31.99 31.99 0 0026.64-14.28l17.09-25.69a31.989 31.989 0 005.36-17.69l.04-38.35H96.01l.05 38.35zM175.45 0C73.44.31 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0zm.55 320c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm38.24-238.41l-12.8 128c-.82 8.18-7.7 14.41-15.92 14.41h-19.04c-8.22 0-15.1-6.23-15.92-14.41l-12.8-128c-.94-9.42 6.45-17.59 15.92-17.59h44.64c9.47 0 16.86 8.17 15.92 17.59z" />
  </svg>
);

SvgLightbulbExclamation.displayName = "SvgLightbulbExclamation";
SvgLightbulbExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightbulbExclamation;