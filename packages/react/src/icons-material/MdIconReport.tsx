import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconReport: React.FunctionComponent<MdIconProps> = ({
  className,
  large = false,
  ...otherProps
}: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdIconReport is deprecated and will be removed in a future release. Use MdIconDangerous instead.');

  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M480-311.54q11.73 0 20.02-8.29t8.29-20.02q0-11.73-8.29-20.02-8.29-8.28-20.02-8.28t-20.02 8.28q-8.29 8.29-8.29 20.02t8.29 20.02q8.29 8.29 20.02 8.29Zm-26-111.23h52v-241.54h-52v241.54ZM349.46-164 164-350.28v-260.26L349.28-796h261.26L796-610.72v261.26L609.72-164H349.46ZM371-216h218l155-155v-218L588-744H371L216-589v218l155 155Zm109-264Z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      className={className}
      {...otherProps}
    >
      <path d="M480-292.15q11.88 0 20.37-8.49 8.48-8.48 8.48-20.17 0-11.69-8.48-20.17-8.49-8.48-20.37-8.48t-20.17 8.48q-8.29 8.48-8.29 20.17 0 11.69 8.29 20.17 8.29 8.49 20.17 8.49ZM457.31-420h45.38v-258h-45.38v258ZM338.46-140 140-338.28v-283.26L338.28-820h283.26L820-621.72v283.26L621.72-140H338.46Zm18.74-45.39h245.49L774.61-357.2v-245.49L602.8-774.61H357.31L185.39-602.8v245.49L357.2-185.39ZM480-480Z" />
    </svg>
  );
};

export default MdIconReport;
