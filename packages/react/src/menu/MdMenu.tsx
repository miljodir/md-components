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
  /** The trigger element (typically a button) that opens the menu */
  trigger: React.ReactNode;
  /** Groups of menu items. Use a single group without a heading for a flat list. */
  groups: MdMenuGroupDef[];
  /** Size of the menu items */
  size?: 'small' | 'default' | 'large';
  /** Show dividers between groups */
  showDividers?: boolean;
  /** Placement of the menu relative to the trigger */
  placement?: 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  /** Additional class name for the menu popup */
  menuClassName?: string;
  /** Gutter between trigger and menu popup in pixels */
  gutter?: number;
}

export const MdMenu: React.FC<MdMenuProps> = ({
  trigger,
  groups,
  size = 'default',
  showDividers = false,
  placement = 'bottom-start',
  menuClassName = '',
  gutter = 4,
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
      <Ariakit.MenuButton render={trigger as React.ReactElement} />
      <Ariakit.Menu gutter={gutter} className={menuClassNames}>
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
