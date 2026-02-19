'use client';

import * as Ariakit from '@ariakit/react';
import React from 'react';
import MdLink from '../link/MdLink';

// Størrelse default, large, small
// Vis / skjul overskrift
// Vis / skjul HR
// Støtte for MdBiutton for å skjule/vise menyen
// Disable menyknapp og menyvalg

export interface MdMenuProps {
    /**
     * Element to use as menu button. If not provided, a default button will be used.
     */
    button?: React.ReactNode;
    children?: string | React.ReactNode;
    menu: {
        label: string;
        href?: string;
    }[];
}

export const MdMenu: React.FC<MdMenuProps> = (props) => {
  const menu = Ariakit.useMenuStore();

    // Handle custom button rendering
    const menuButton = props.button ? (
        <Ariakit.MenuButton
            render={props.button ? (props_) => { return React.cloneElement(props.button as React.ReactElement, props_); } : undefined}
            store={menu}
        />
    ) : (
        <Ariakit.MenuButton store={menu} className="md-menu__button">
            {props.children || 'Menu'}
        </Ariakit.MenuButton>
    );

    // Handle menu link / button
    const menuItem = (itemProps: MdMenuProps['menu'][number]) => {
        if (itemProps.href) {
            return <MdLink href={itemProps.href} className="md-menu__item">{itemProps.label}</MdLink>;
        }
        return <Ariakit.MenuItem {...itemProps} />;
    };


    return (
        <Ariakit.MenuProvider store={menu}>
        {menuButton}         
        <Ariakit.Menu store={menu} gutter={8} className="md-menu">
            <ul className="md-menu__list">
                {props.menu.map((item, index) => {
                    return (
                    <li key={index}>{menuItem(item)}</li>
                )})}
            </ul>
            <Ariakit.MenuSeparator className="md-menu__separator" />
        </Ariakit.Menu>
        </Ariakit.MenuProvider>
    );
};

export default MdMenu;
