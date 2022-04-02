import * as React from "react";

const SvgThumbsDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496.656 226.317c5.498-22.336 2.828-49.88-9.627-69.405 4.314-23.768-3.099-49.377-18.225-67.105C470.724 35.902 437.75 0 378.468.014c-3.363-.03-35.508-.003-41.013 0C260.593-.007 195.917 40 160 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-12.481c.85.266 1.653.549 2.382.856C184 320 219.986 377.25 243.556 400.82c9.9 9.9 13.118 26.44 16.525 43.951C265.784 474.082 276.915 512 306.91 512c59.608 0 82.909-34.672 82.909-93.08 0-30.906-11.975-52.449-20.695-69.817h70.15c40.654 0 72.726-34.896 72.727-72.571-.001-20.532-5.418-37.341-15.345-50.215zM128 320H32V64h96v256zm311.273-2.898H327.274c0 40.727 30.545 59.628 30.545 101.817 0 25.574 0 61.091-50.909 61.091-20.363-20.364-10.182-71.272-40.727-101.817-28.607-28.607-71.272-101.818-101.818-101.818H160V72.74h4.365c34.701 0 101.818-40.727 173.09-40.727 3.48 0 37.415-.03 40.727 0 38.251.368 65.505 18.434 57.212 70.974 16.367 8.78 28.538 39.235 15.015 61.996C472 176 472 224 456.017 235.648 472 240 480.1 256.012 480 276.375c-.1 20.364-17.997 40.727-40.727 40.727zM104 272c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
  </svg>
);

SvgThumbsDown.displayName = "SvgThumbsDown";
SvgThumbsDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThumbsDown;
