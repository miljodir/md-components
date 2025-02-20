import React from 'react';
import type MdIconProps from './icon.model';

const MdIconPrint: React.FunctionComponent<MdIconProps> = ({
  className,
  large = false,
  ...otherProps
}: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M653-633.38v-128.93H307v128.93h-45.38v-174.31h436.76v174.31H653ZM156.92-588h646.16H156.92Zm569.19 96.15q13.35 0 23.12-9.77 9.77-9.78 9.77-22.93 0-13.14-9.77-22.91-9.78-9.77-22.92-9.77-13.54 0-23.12 9.77-9.58 9.78-9.58 22.93t9.58 22.91q9.58 9.77 22.92 9.77ZM653-185.39v-194.3H307v194.3h346ZM698.38-140H261.62v-171.77H111.54v-321.61h736.92v321.61H698.38V-140Zm104.7-217.15V-588H156.92v230.85h104.7v-67.93h436.76v67.93h104.7Z" />
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
      <path d="M648-611.69v-120H312v120h-52v-172h440v172h-52Zm-468.46 52h601.92H179.54Zm520.56 96q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM648-216v-154.77H312V-216h336Zm52 52H260v-144H127.54v-303.69h704.92V-308H700v144Zm81.46-196v-199.69H179.54V-360H260v-62.77h440V-360h81.46Z" />
    </svg>
  );
};

export default MdIconPrint;
