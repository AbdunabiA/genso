import { SVGProps } from "react";

export function ExitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    //   width="1em"
    //   height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        // fill="currentColor"
        d="M19.067 3.25h2.894L15.94 9.674A5.46 5.46 0 0 1 12 11.38a5.46 5.46 0 0 1-3.94-1.707L2.029 3.25h2.904l4.57 4.92c1.338 1.42 3.656 1.42 4.995 0zM4.894 20.74H2l6.06-6.404a5.47 5.47 0 0 1 3.944-1.708a5.47 5.47 0 0 1 3.945 1.708L22 20.75h-2.895l-4.598-4.901c-1.338-1.419-3.656-1.419-4.995 0z"
      />
    </svg>
  );
}
