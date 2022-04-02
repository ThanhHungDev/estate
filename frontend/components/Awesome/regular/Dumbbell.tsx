import * as React from "react";

const SvgDumbbell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M632 224h-24v-72c0-30.9-25.1-56-56-56h-32c-2.7 0-5.4.4-8 .8V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v136h-96V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v8.8c-2.6-.4-5.3-.8-8-.8H88c-30.9 0-56 25.1-56 56v72H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v72c0 30.9 25.1 56 56 56h32c2.7 0 5.4-.4 8-.8v8.8c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56V288h96v136c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56v-8.8c2.6.4 5.3.8 8 .8h32c30.9 0 56-25.1 56-56v-72h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM120 368H88c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8zm104 56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm240 0c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm96-64c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208z" />
  </svg>
);

SvgDumbbell.displayName = "SvgDumbbell";
SvgDumbbell.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDumbbell;
