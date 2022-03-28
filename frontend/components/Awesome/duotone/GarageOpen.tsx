import * as React from "react";

const SvgGarageOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M128.65 224H128v64h383.47l.53-64zm104.21 96l-8 32h190.28l-8-32z"
      opacity={0.4}
    />
    <path
      d="M610.5 117L338.41 3.67A57.4 57.4 0 00320 0a57.4 57.4 0 00-18.5 3.67L29.5 117A48.14 48.14 0 000 161.28V496a16 16 0 0016 16h64a16 16 0 0016-16V224c0-17.59 14.59-32 32.59-32h382.82c18 0 32.59 14.41 32.59 32v272a16 16 0 0016 16h64a16 16 0 0016-16V161.28A48.14 48.14 0 00610.5 117zm-145 238.42L456.62 320h-49.48l8 32H224.86l8-32h-49.48l-8.85 35.39A47.93 47.93 0 00144 400v32c0 11.71 6.61 21.52 16 27.1V488a24 24 0 0024 24h32a24 24 0 0024-24v-24h160v24a24 24 0 0024 24h32a24 24 0 0024-24v-28.9c9.39-5.58 16-15.39 16-27.1v-32a47.93 47.93 0 00-30.53-44.61zM208 431.85c-14.4 0-24-9.56-24-23.92S193.6 384 208 384s36 21.53 36 35.88-21.6 11.97-36 11.97zm224 0c-14.4 0-36 2.39-36-12S417.6 384 432 384s24 9.58 24 23.93-9.6 23.92-24 23.92z"
      className="garage-open_svg__fa-primary"
    />
  </svg>
);

SvgGarageOpen.displayName = "SvgGarageOpen";
SvgGarageOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGarageOpen;
