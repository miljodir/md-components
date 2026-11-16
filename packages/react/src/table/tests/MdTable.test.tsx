import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdTable } from '../MdTable';
import { MdTableBody } from '../MdTableBody';
import { MdTableCaption } from '../MdTableCaption';
import { MdTableCell } from '../MdTableCell';
import { MdTableContainer } from '../MdTableContainer';
import { MdTableHead } from '../MdTableHead';
import { MdTableHeaderCell } from '../MdTableHeaderCell';
import { MdTableRow } from '../MdTableRow';

const renderTable = () => {
  return render(
    <MdTable aria-label="Fylker">
      <MdTableCaption>Fylker</MdTableCaption>
      <MdTableHead>
        <MdTableRow>
          <MdTableHeaderCell scope="col">Fylke</MdTableHeaderCell>
          <MdTableHeaderCell scope="col">Kommuner</MdTableHeaderCell>
        </MdTableRow>
      </MdTableHead>
      <MdTableBody>
        <MdTableRow>
          <MdTableHeaderCell scope="row">Agder</MdTableHeaderCell>
          <MdTableCell>25</MdTableCell>
        </MdTableRow>
      </MdTableBody>
    </MdTable>,
  );
};

const renderInTable = (ui: React.ReactElement) => {
  return render(<table>{ui}</table>);
};

describe('MdTable', () => {
  describe('rendering', () => {
    it('renders a native table with accessible structure', () => {
      renderTable();
      const table = screen.getByRole('table', { name: 'Fylker' });
      expect(table.tagName).toBe('TABLE');
      expect(within(table).getByRole('caption', { name: 'Fylker' })).toBeInTheDocument();
      expect(within(table).getAllByRole('rowgroup')).toHaveLength(2);
      expect(within(table).getAllByRole('row')).toHaveLength(2);
      expect(within(table).getByRole('columnheader', { name: 'Fylke' })).toBeInTheDocument();
      expect(within(table).getByRole('rowheader', { name: 'Agder' })).toBeInTheDocument();
      expect(within(table).getByRole('cell', { name: '25' })).toBeInTheDocument();
    });

    it('renders elements with md classes', () => {
      renderTable();
      const table = screen.getByRole('table');
      const [head, body] = within(table).getAllByRole('rowgroup');
      expect(table).toHaveClass('md-table');
      expect(screen.getByRole('caption', { name: 'Fylker' })).toHaveClass('md-table__caption');
      expect(head.tagName).toBe('THEAD');
      expect(head).toHaveClass('md-table__head');
      expect(body.tagName).toBe('TBODY');
      expect(body).toHaveClass('md-table__body');
      within(table)
        .getAllByRole('row')
        .forEach(row => {
          return expect(row).toHaveClass('md-table__row');
        });
      expect(screen.getByRole('columnheader', { name: 'Fylke' })).toHaveClass('md-table__header-cell');
      expect(screen.getByRole('rowheader', { name: 'Agder' })).toHaveClass('md-table__header-cell');
      expect(screen.getByRole('cell', { name: '25' })).toHaveClass('md-table__cell');
    });
  });

  describe('theme', () => {
    it('uses primary theme by default', () => {
      renderTable();
      expect(screen.getByRole('table')).not.toHaveClass('md-table--secondary');
    });

    it('applies secondary class when theme is secondary', () => {
      render(<MdTable theme="secondary" className="custom" />);
      expect(screen.getByRole('table')).toHaveClass('md-table', 'md-table--secondary', 'custom');
    });

    it('does not forward theme as a DOM attribute', () => {
      render(<MdTable theme="secondary" />);
      expect(screen.getByRole('table')).not.toHaveAttribute('theme');
    });
  });

  describe('striped', () => {
    it('is not striped by default', () => {
      renderTable();
      expect(screen.getByRole('table')).not.toHaveClass('md-table--striped');
    });

    it('applies striped class when striped is true', () => {
      render(<MdTable striped className="custom" />);
      expect(screen.getByRole('table')).toHaveClass('md-table', 'md-table--striped', 'custom');
    });

    it('does not forward striped as a DOM attribute', () => {
      render(<MdTable striped />);
      expect(screen.getByRole('table')).not.toHaveAttribute('striped');
    });
  });

  describe('MdTableContainer', () => {
    it('is a plain, non-focusable container without horizontalScroll', () => {
      render(
        <MdTableContainer data-testid="container">
          <MdTable aria-label="Fylker" />
        </MdTableContainer>,
      );
      const container = screen.getByTestId('container');
      expect(container).toHaveClass('md-table-container');
      expect(container).not.toHaveClass('md-table-container--horizontal-scroll');
      expect(container).not.toHaveAttribute('tabindex');
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
      expect(within(container).getByRole('table', { name: 'Fylker' })).toBeInTheDocument();
    });

    it('renders a focusable region around the table with horizontalScroll', () => {
      render(
        <MdTableContainer horizontalScroll aria-labelledby="caption">
          <MdTable>
            <MdTableCaption id="caption">Fylker</MdTableCaption>
          </MdTable>
        </MdTableContainer>,
      );
      const region = screen.getByRole('region', { name: 'Fylker' });
      expect(region.tagName).toBe('DIV');
      expect(region).toHaveClass('md-table-container', 'md-table-container--horizontal-scroll');
      expect(region).toHaveAttribute('tabindex', '0');
      expect(region).not.toHaveAttribute('horizontalscroll');
      expect(within(region).getByRole('table', { name: 'Fylker' })).toBeInTheDocument();
    });

    it('is reachable with keyboard with horizontalScroll', async () => {
      const user = userEvent.setup();
      render(<MdTableContainer horizontalScroll aria-label="Fylker" />);
      await user.tab();
      expect(screen.getByRole('region', { name: 'Fylker' })).toHaveFocus();
    });

    it('forwards attributes and merges className', () => {
      render(<MdTableContainer data-testid="container" id="container" className="custom" />);
      const container = screen.getByTestId('container');
      expect(container).toHaveAttribute('id', 'container');
      expect(container).toHaveClass('md-table-container', 'custom');
    });
  });

  describe('sorting', () => {
    const renderHeader = (props: React.ComponentProps<typeof MdTableHeaderCell>) => {
      return renderInTable(
        <thead>
          <tr>
            <MdTableHeaderCell scope="col" {...props}>
              Fylke
            </MdTableHeaderCell>
          </tr>
        </thead>,
      );
    };

    it('renders no button or aria-sort when sorting is not set', () => {
      renderHeader({});
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: 'Fylke' })).not.toHaveAttribute('aria-sort');
    });

    it('renders a button named by the header content with a hidden icon', () => {
      const { container } = renderHeader({ sorting: { direction: 'none', onSort: vi.fn() } });
      const header = screen.getByRole('columnheader', { name: 'Fylke' });
      const button = within(header).getByRole('button', { name: 'Fylke' });
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveClass('md-table__sort-button');
      expect(container.querySelector('.md-table__sort-icon')).toHaveAttribute('aria-hidden', 'true');
    });

    it.each(['ascending', 'descending'] as const)('sets aria-sort to %s on the header', direction => {
      renderHeader({ sorting: { direction, onSort: vi.fn() } });
      expect(screen.getByRole('columnheader', { name: 'Fylke' })).toHaveAttribute('aria-sort', direction);
    });

    it('omits aria-sort when direction is none', () => {
      renderHeader({ sorting: { direction: 'none', onSort: vi.fn() } });
      expect(screen.getByRole('columnheader', { name: 'Fylke' })).not.toHaveAttribute('aria-sort');
    });

    it('calls onSort on click', async () => {
      const user = userEvent.setup();
      const onSort = vi.fn();
      renderHeader({ sorting: { direction: 'none', onSort } });
      await user.click(screen.getByRole('button', { name: 'Fylke' }));
      expect(onSort).toHaveBeenCalledTimes(1);
    });

    it('calls onSort on Enter and Space', async () => {
      const user = userEvent.setup();
      const onSort = vi.fn();
      renderHeader({ sorting: { direction: 'ascending', onSort } });
      await user.tab();
      expect(screen.getByRole('button', { name: 'Fylke' })).toHaveFocus();
      await user.keyboard('{Enter}');
      await user.keyboard(' ');
      expect(onSort).toHaveBeenCalledTimes(2);
    });

    it('keeps header classes and does not forward sorting as a DOM attribute', () => {
      renderHeader({ sorting: { direction: 'none', onSort: vi.fn() }, className: 'custom', alignment: 'right' });
      const header = screen.getByRole('columnheader', { name: 'Fylke' });
      expect(header).toHaveClass('md-table__header-cell', 'md-table__header-cell--align-right', 'custom');
      expect(header).not.toHaveAttribute('sorting');
    });
  });

  describe('alignment', () => {
    it.each([
      ['MdTableCell', MdTableCell, 'md-table__cell'],
      ['MdTableHeaderCell', MdTableHeaderCell, 'md-table__header-cell'],
    ] as const)('%s is left aligned by default and applies alignment classes', (_, Cell, baseClass) => {
      renderInTable(
        <tbody>
          <tr>
            <Cell>Venstre</Cell>
            <Cell alignment="center">Midt</Cell>
            <Cell alignment="right">Høyre</Cell>
          </tr>
        </tbody>,
      );
      const left = screen.getByText('Venstre');
      expect(left).not.toHaveClass(`${baseClass}--align-center`);
      expect(left).not.toHaveClass(`${baseClass}--align-right`);
      expect(screen.getByText('Midt')).toHaveClass(`${baseClass}--align-center`);
      expect(screen.getByText('Høyre')).toHaveClass(`${baseClass}--align-right`);
      expect(screen.getByText('Høyre')).not.toHaveAttribute('alignment');
    });
  });

  describe('borders', () => {
    it('has table border by default', () => {
      renderTable();
      expect(screen.getByRole('table')).toHaveClass('md-table--bordered');
    });

    it('removes table border when bordered is false', () => {
      render(<MdTable bordered={false} />);
      expect(screen.getByRole('table')).not.toHaveClass('md-table--bordered');
    });

    it('does not forward bordered as a DOM attribute', () => {
      render(<MdTable bordered />);
      expect(screen.getByRole('table')).not.toHaveAttribute('bordered');
    });

    it('has row border by default', () => {
      renderTable();
      screen.getAllByRole('row').forEach(row => {
        return expect(row).toHaveClass('md-table__row--bordered');
      });
    });

    it('removes row border when bordered is false on MdTableRow', () => {
      renderInTable(
        <tbody>
          <MdTableRow bordered={false} />
        </tbody>,
      );
      const row = screen.getByRole('row');
      expect(row).toHaveClass('md-table__row');
      expect(row).not.toHaveClass('md-table__row--bordered');
      expect(row).not.toHaveAttribute('bordered');
    });
  });

  describe('props forwarding', () => {
    it('forwards attributes and merges className on MdTable', () => {
      render(<MdTable id="my-table" className="custom" data-testid="table" aria-describedby="desc" />);
      const table = screen.getByTestId('table');
      expect(table).toHaveAttribute('id', 'my-table');
      expect(table).toHaveAttribute('aria-describedby', 'desc');
      expect(table).toHaveClass('md-table', 'custom');
    });

    it('forwards attributes and merges className on MdTableCaption', () => {
      renderInTable(
        <MdTableCaption id="caption" className="custom">
          Tittel
        </MdTableCaption>,
      );
      const caption = screen.getByText('Tittel');
      expect(caption).toHaveAttribute('id', 'caption');
      expect(caption).toHaveClass('md-table__caption', 'custom');
    });

    it('forwards attributes and merges className on MdTableHead', () => {
      renderInTable(<MdTableHead className="custom" data-testid="head" />);
      expect(screen.getByTestId('head')).toHaveClass('md-table__head', 'custom');
    });

    it('forwards attributes and merges className on MdTableBody', () => {
      renderInTable(<MdTableBody className="custom" data-testid="body" />);
      expect(screen.getByTestId('body')).toHaveClass('md-table__body', 'custom');
    });

    it('forwards attributes and merges className on MdTableRow', () => {
      renderInTable(
        <tbody>
          <MdTableRow className="custom" aria-selected="true" />
        </tbody>,
      );
      const row = screen.getByRole('row');
      expect(row).toHaveClass('md-table__row', 'custom');
      expect(row).toHaveAttribute('aria-selected', 'true');
    });

    it('forwards cell attributes and merges className on MdTableCell', () => {
      renderInTable(
        <tbody>
          <tr>
            <MdTableCell className="custom" colSpan={2} rowSpan={3} headers="h1">
              Verdi
            </MdTableCell>
          </tr>
        </tbody>,
      );
      const cell = screen.getByRole('cell', { name: 'Verdi' });
      expect(cell).toHaveClass('md-table__cell', 'custom');
      expect(cell).toHaveAttribute('colspan', '2');
      expect(cell).toHaveAttribute('rowspan', '3');
      expect(cell).toHaveAttribute('headers', 'h1');
    });

    it('forwards header cell attributes and merges className on MdTableHeaderCell', () => {
      renderInTable(
        <thead>
          <tr>
            <MdTableHeaderCell className="custom" scope="col" colSpan={2} id="h1">
              Overskrift
            </MdTableHeaderCell>
          </tr>
        </thead>,
      );
      const header = screen.getByRole('columnheader', { name: 'Overskrift' });
      expect(header.tagName).toBe('TH');
      expect(header).toHaveClass('md-table__header-cell', 'custom');
      expect(header).toHaveAttribute('scope', 'col');
      expect(header).toHaveAttribute('colspan', '2');
      expect(header).toHaveAttribute('id', 'h1');
    });
  });
});
