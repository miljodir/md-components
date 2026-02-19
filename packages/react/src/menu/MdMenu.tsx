'use client';

import * as Ariakit from '@ariakit/react';
import classnames from 'classnames';
import React from 'react';

export interface MdMenuItemDef {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface MdMenuGroupDef {
  id: string;
  heading?: string;
  items: MdMenuItemDef[];
}

export interface MdMenuProps {
  trigger: React.ReactElement;
  groups: MdMenuGroupDef[];
  size?: 'small' | 'default' | 'large';
  showDividers?: boolean;
  placement?: 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  menuClassName?: string;
  gutter?: number;
  unmountOnHide?: boolean;
}

export const MdMenu: React.FC<MdMenuProps> = ({
  trigger,
  groups,
  size = 'default',
  showDividers = false,
  placement = 'bottom-start',
  menuClassName = '',
  gutter = 4,
  unmountOnHide,
}: MdMenuProps) => {
  const menuClassNames = classnames(
    'md-menu',
    {
      'md-menu--small': size === 'small',
      'md-menu--large': size === 'large',
    },
    menuClassName,
  );

  return (
    <Ariakit.MenuProvider placement={placement}>
      <Ariakit.MenuButton render={trigger} />
      <Ariakit.Menu gutter={gutter} unmountOnHide={unmountOnHide} className={menuClassNames}>
        {groups.map((group, groupIndex) => {
          return (
            <React.Fragment key={group.id}>
              {showDividers && groupIndex > 0 && (
                <Ariakit.MenuSeparator className="md-menu__separator" />
              )}
              <Ariakit.MenuGroup className="md-menu__group">
                {group.heading && (
                  <Ariakit.MenuGroupLabel className="md-menu__group-heading">
                    {group.heading}
                  </Ariakit.MenuGroupLabel>
                )}
                {group.items.map((item) => {
                  return (
                    <Ariakit.MenuItem
                      key={item.id}
                      className={classnames('md-menu__item', {
                        'md-menu__item--has-icon': !!item.icon,
                      })}
                      disabled={item.disabled}
                      onClick={item.disabled ? undefined : item.onClick}
                    >
                      {item.icon && (
                        <span className="md-menu__item-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span className="md-menu__item-label">{item.label}</span>
                    </Ariakit.MenuItem>
                  );
                })}
              </Ariakit.MenuGroup>
            </React.Fragment>
          );
        })}
      </Ariakit.Menu>
    </Ariakit.MenuProvider>
  );
};

export default MdMenu;
