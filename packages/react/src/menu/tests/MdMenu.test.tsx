import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdMenu } from '../MdMenu';
import type { MdMenuGroupOption } from '../MdMenu';

const singleGroup: MdMenuGroupOption[] = [
  {
    id: 'group-1',
    items: [
      { id: 'item-1', label: 'Edit' },
      { id: 'item-2', label: 'Share' },
      { id: 'item-3', label: 'Delete', disabled: true },
    ],
  },
];

const groupedWithHeadings: MdMenuGroupOption[] = [
  {
    id: 'group-a',
    heading: 'Actions',
    items: [
      { id: 'a-1', label: 'Edit' },
      { id: 'a-2', label: 'Copy' },
    ],
  },
  {
    id: 'group-b',
    heading: 'Danger zone',
    items: [{ id: 'b-1', label: 'Delete' }],
  },
];

describe('MdMenu', () => {
  describe('rendering', () => {
    it('renders the trigger element', () => {
      render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
    });

    it('does not show menu items before opening', () => {
      render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('shows menu items after clicking the trigger', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('[role="menu"]')).toBeInTheDocument();
    });

    it('renders all item labels when open', async () => {
      const user = userEvent.setup();
      render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByText('Edit')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
    });
  });

  describe('groups and headings', () => {
    it('renders group headings when provided', async () => {
      const user = userEvent.setup();
      render(<MdMenu trigger={<button>Open</button>} groups={groupedWithHeadings} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByText('Actions')).toBeInTheDocument();
      expect(screen.getByText('Danger zone')).toBeInTheDocument();
    });

    it('renders without group headings when not provided', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu__group-heading')).not.toBeInTheDocument();
    });
  });

  describe('dividers', () => {
    it('renders no separators by default', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={groupedWithHeadings} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu__separator')).not.toBeInTheDocument();
    });

    it('renders separators between groups when showDividers is true', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdMenu trigger={<button>Open</button>} groups={groupedWithHeadings} showDividers />,
      );
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu__separator')).toBeInTheDocument();
    });

    it('renders one separator for two groups', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdMenu trigger={<button>Open</button>} groups={groupedWithHeadings} showDividers />,
      );
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelectorAll('.md-menu__separator')).toHaveLength(1);
    });
  });

  describe('sizes', () => {
    it('applies no size modifier class by default', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      const menu = baseElement.querySelector('.md-menu');
      expect(menu).not.toHaveClass('md-menu--small');
      expect(menu).not.toHaveClass('md-menu--large');
    });

    it('applies small size class', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} size="small" />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu')).toHaveClass('md-menu--small');
    });

    it('applies large size class', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} size="large" />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu')).toHaveClass('md-menu--large');
    });
  });

  describe('icons', () => {
    it('renders icon when provided', async () => {
      const user = userEvent.setup();
      const groups: MdMenuGroupOption[] = [
        {
          id: 'g1',
          items: [{ id: 'i1', label: 'Edit', icon: <svg data-testid="edit-icon" /> }],
        },
      ];
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={groups} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu__item-icon')).toBeInTheDocument();
    });

    it('does not render icon wrapper when no icon is provided', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu__item-icon')).not.toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('calls onClick when a menu item is clicked', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      const groups: MdMenuGroupOption[] = [
        { id: 'g1', items: [{ id: 'i1', label: 'Edit', onClick }] },
      ];
      render(<MdMenu trigger={<button>Open</button>} groups={groups} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.click(screen.getByText('Edit'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when a disabled item is clicked', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      const groups: MdMenuGroupOption[] = [
        { id: 'g1', items: [{ id: 'i1', label: 'Delete', disabled: true, onClick }] },
      ];
      render(<MdMenu trigger={<button>Open</button>} groups={groups} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      // Ariakit sets pointer-events:none on disabled items; use fireEvent to bypass CSS
      const disabledItem = screen.getByText('Delete').closest('[role="menuitem"]');
      if (disabledItem) {
        fireEvent.click(disabledItem);
      }
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('disabled state', () => {
    it('marks disabled items with aria-disabled', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdMenu trigger={<button>Open</button>} groups={singleGroup} />);
      await user.click(screen.getByRole('button', { name: 'Open' }));
      const items = baseElement.querySelectorAll('[role="menuitem"]');
      const disabledItem = Array.from(items).find((el) => {
        return el.textContent?.includes('Delete');
      });
      expect(disabledItem).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('custom className', () => {
    it('applies custom menuClassName to the menu popup', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdMenu trigger={<button>Open</button>} groups={singleGroup} menuClassName="my-custom-menu" />,
      );
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(baseElement.querySelector('.md-menu')).toHaveClass('my-custom-menu');
    });
  });
});
