import { ComponentProps } from 'react';

export const ContractSvg = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      {...props}
      width={30}
      height={30}
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <path d='M182.52 146.2h585.14v402.28h73.15V73.06H109.38v877.71h402.28v-73.14H182.52z'></path>
        <path d='M255.66 219.34h438.86v73.14H255.66zM255.66 365.63h365.71v73.14H255.66zM255.66 511.91h219.43v73.14H255.66zM910.72 897.47l-56.19-56.19c17.6-26.2 27.91-57.72 27.91-91.65 0-90.89-73.68-164.57-164.57-164.57S553.3 658.74 553.3 749.63 626.98 914.2 717.87 914.2c30.4 0 58.52-8.82 82.96-23.19L859 949.18l51.72-51.71zM626.45 749.63c0-50.42 41.02-91.43 91.43-91.43s91.43 41.01 91.43 91.43c0 50.41-41.02 91.43-91.43 91.43s-91.43-41.02-91.43-91.43z'></path>
      </g>
    </svg>
  );
};
