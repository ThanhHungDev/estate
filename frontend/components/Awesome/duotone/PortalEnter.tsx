import * as React from "react";

const SvgPortalEnter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 256c0 141.385-35.816 256-80 256-40.79 0-74.383-97.758-79.313-224.008H384a32.001 32.001 0 000-64.002h-31.309C357.625 97.748 391.211 0 432 0c44.184 0 80 114.615 80 256z"
      opacity={0.4}
    />
    <path
      d="M113.688 317.479l-14.813 34.515H32a32.001 32.001 0 000 64.002h77.438a47.924 47.924 0 0044.124-29.078l8.782-20.533-10.656-6.297a95.386 95.386 0 01-38-42.61zM272 96.002a48.001 48.001 0 10-48-48 48.002 48.002 0 0048 48zM384 223.99h-44.031l-26.063-53.252c-12.5-25.547-35.469-44.218-61.781-50.937l-71.063-21.143a95.69 95.69 0 00-80.875 17.143l-39.624 30.406A31.996 31.996 0 1099.5 196.99l39.688-30.408c7.656-5.89 17.437-8 25.25-6.14l14.687 4.374-37.438 87.395A64.16 64.16 0 00168 332.525l84.938 50.174-27.438 87.72a31.969 31.969 0 0020.938 40.097 31.942 31.942 0 0040.125-20.971l31.625-101.065a48.16 48.16 0 00-21.625-54.392l-61.25-36.143 31.312-78.283 20.281 41.44A48.269 48.269 0 00330 287.992h54a32.001 32.001 0 000-64.002z"
      className="portal-enter_svg__fa-primary"
    />
  </svg>
);

SvgPortalEnter.displayName = "SvgPortalEnter";
SvgPortalEnter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPortalEnter;
