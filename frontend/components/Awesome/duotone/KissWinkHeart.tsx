import * as React from "react";

const SvgKissWinkHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 504 512" {...props}>
    <path
      d="M332.49 338.8c29.7-46.3 98.7-45.5 127.8 4.3a81.91 81.91 0 0118.6 2.9A246.65 246.65 0 00496 256C496 119 385 8 248 8S0 119 0 256s111 248 248 248a246.15 246.15 0 0099.4-20.9c-.3-.7-23.9-84.6-23.9-84.6a74.25 74.25 0 018.99-59.7zM168 240a32 32 0 1132-32 32 32 0 01-32 32zm120 156c0 19.2-28.7 41.5-71.49 44-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-5.7-12.3 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.8-3.7-4.6-16.6 3.6-15.4 42.79 2.5 71.49 24.8 71.49 44 0 13-13.4 27.3-35.2 36C274.59 368.7 288 383 288 396zm16-179c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S400 181 404 206.2a12 12 0 01-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0z"
      opacity={0.4}
    />
    <path
      d="M501.09 402.5c-8-20.8-31.5-31.5-53.1-25.9l-8.4 2.2-2.3-8.4c-5.9-21.4-27-36.5-49-33a41.87 41.87 0 00-34 52.6l22.9 82.6a10.23 10.23 0 0012.4 7.1l83-21.5a41.75 41.75 0 0028.5-55.72zM384.19 217A12 12 0 00404 206.2c-4-25.2-34.2-42.1-59.9-42.1s-55.9 16.9-59.9 42.1c-1.8 11.2 11.5 18.2 19.8 10.8l9.7-8.5c14.8-13.2 46.2-13.2 61 0zM168 176a32 32 0 1032 32 32 32 0 00-32-32z"
      className="kiss-wink-heart_svg__fa-primary"
    />
  </svg>
);

SvgKissWinkHeart.displayName = "SvgKissWinkHeart";
SvgKissWinkHeart.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKissWinkHeart;
