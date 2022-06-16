import React from 'react';
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'danger';
}

const MdButton = ({ theme, children, ...otherProps }: ButtonProps) => {
    const classNames = classnames('md-button', {
        'md-button--secondary': theme === 'secondary',
        'md-button--danger': theme === 'danger',
    });

    return (
        <button className={classNames} {...otherProps}>
            {children}
        </button>
    )
}

export default MdButton;