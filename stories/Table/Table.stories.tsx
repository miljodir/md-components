import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs/blocks';
import React, { useState } from 'react';
// @ts-expect-error: no type declarations for markdown file
import Readme from '../../packages/css/src/table/README.md';
import { MdTable } from '../../packages/react/src/table/MdTable';
import { MdTableBody } from '../../packages/react/src/table/MdTableBody';
import { MdTableCaption } from '../../packages/react/src/table/MdTableCaption';
import { MdTableCell } from '../../packages/react/src/table/MdTableCell';
import { MdTableContainer } from '../../packages/react/src/table/MdTableContainer';
import { MdTableHead } from '../../packages/react/src/table/MdTableHead';
import { MdTableHeaderCell } from '../../packages/react/src/table/MdTableHeaderCell';
import type { MdTableHeaderCellSorting } from '../../packages/react/src/table/MdTableHeaderCell';
import { MdTableRow } from '../../packages/react/src/table/MdTableRow';
import Editorial from './docs/Table.mdx';

export default {
  title: 'Components/Table',
  component: MdTable,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Editorial />
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "`import { MdTableContainer, MdTable, MdTableCaption, MdTableHead, MdTableBody, MdTableRow, MdTableHeaderCell, MdTableCell } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Color theme. `secondary` uses less vibrant colors',
      table: {
        type: {
          summary: 'primary | secondary',
        },
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
    striped: {
      description: 'Zebra stripes on body rows',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    bordered: {
      description: 'Border around the table',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'true' },
      },
    },
    horizontalScroll: {
      description:
        'Scroll horizontally when the table is wider than the available space (`horizontalScroll` on `MdTableContainer`)',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    cellBorders: {
      description: 'Borders around individual cells (`bordered` on `MdTableCell` and `MdTableHeaderCell`)',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    rowBorders: {
      description: 'Bottom border on rows (`bordered` on `MdTableRow`)',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
    thAlign: {
      description: 'Text alignment of header cells (`alignment` on `MdTableHeaderCell`)',
      table: {
        type: {
          summary: 'left | center | right',
        },
        defaultValue: { summary: 'left' },
      },
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    tdAlign: {
      description: 'Text alignment of data cells (`alignment` on `MdTableCell`)',
      table: {
        type: {
          summary: 'left | center | right',
        },
        defaultValue: { summary: 'left' },
      },
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    sortable: {
      description: 'Sortable column headers (`sorting` on `MdTableHeaderCell`)',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
  },
};

interface TableArgs {
  theme?: 'primary' | 'secondary';
  sortable?: boolean;
  striped?: boolean;
  bordered?: boolean;
  horizontalScroll?: boolean;
  cellBorders?: boolean;
  rowBorders?: boolean;
  thAlign?: 'left' | 'center' | 'right';
  tdAlign?: 'left' | 'center' | 'right';
}

const rows = [
  {
    county: 'Agder',
    number: 42,
    region: 'Sørlandet',
    adminCentre: 'Kristiansand',
    largestMunicipality: 'Kristiansand',
    coastal: 'Ja',
    municipalities: 25,
    area: 16434,
    population: 319000,
  },
  {
    county: 'Innlandet',
    number: 34,
    region: 'Østlandet',
    adminCentre: 'Hamar',
    largestMunicipality: 'Ringsaker',
    coastal: 'Nei',
    municipalities: 46,
    area: 52072,
    population: 374000,
  },
  {
    county: 'Nordland',
    number: 18,
    region: 'Nord-Norge',
    adminCentre: 'Bodø',
    largestMunicipality: 'Bodø',
    coastal: 'Ja',
    municipalities: 41,
    area: 38154,
    population: 243000,
  },
  {
    county: 'Trøndelag',
    number: 50,
    region: 'Trøndelag',
    adminCentre: 'Steinkjer',
    largestMunicipality: 'Trondheim',
    coastal: 'Ja',
    municipalities: 38,
    area: 42201,
    population: 478000,
  },
  {
    county: 'Vestland',
    number: 46,
    region: 'Vestlandet',
    adminCentre: 'Bergen',
    largestMunicipality: 'Bergen',
    coastal: 'Ja',
    municipalities: 43,
    area: 33870,
    population: 650000,
  },
].map(row => {
  return {
    ...row,
    density: row.population / row.area,
    perMunicipality: Math.round(row.population / row.municipalities),
  };
});

type Row = (typeof rows)[number];

const columns: { key: keyof Row; label: string }[] = [
  { key: 'county', label: 'Fylke' },
  { key: 'number', label: 'Fylkesnummer' },
  { key: 'region', label: 'Landsdel' },
  { key: 'adminCentre', label: 'Administrasjonssenter' },
  { key: 'largestMunicipality', label: 'Største kommune' },
  { key: 'coastal', label: 'Kystfylke' },
  { key: 'municipalities', label: 'Antall kommuner' },
  { key: 'area', label: 'Areal (km²)' },
  { key: 'population', label: 'Folketall' },
  { key: 'density', label: 'Innbyggere per km²' },
  { key: 'perMunicipality', label: 'Innbyggere per kommune' },
];

const formatValue = (value: string | number) => {
  return typeof value === 'number' ? value.toLocaleString('nb-NO', { maximumFractionDigits: 1 }) : value;
};

export const Table = (args: TableArgs) => {
  const [sort, setSort] = useState<{ key: keyof Row; direction: 'ascending' | 'descending' }>();

  const sortingFor = (key: keyof Row): MdTableHeaderCellSorting | undefined => {
    if (!args.sortable) {
      return undefined;
    }
    return {
      direction: sort?.key === key ? sort.direction : 'none',
      onSort: () => {
        return setSort({
          key,
          direction: sort?.key === key && sort.direction === 'ascending' ? 'descending' : 'ascending',
        });
      },
    };
  };

  const sortedRows =
    args.sortable && sort
      ? [...rows].sort((a, b) => {
          const result = a[sort.key] < b[sort.key] ? -1 : a[sort.key] > b[sort.key] ? 1 : 0;
          return sort.direction === 'ascending' ? result : -result;
        })
      : rows;

  const table = (
    <MdTable theme={args.theme} striped={args.striped} bordered={args.bordered}>
      <MdTableCaption id="table-caption">Fylker</MdTableCaption>
      <MdTableHead>
        <MdTableRow bordered={args.rowBorders}>
          {columns.map(column => {
            return (
              <MdTableHeaderCell
                key={column.key}
                bordered={args.cellBorders}
                scope="col"
                alignment={args.thAlign}
                sorting={sortingFor(column.key)}
              >
                {column.label}
              </MdTableHeaderCell>
            );
          })}
        </MdTableRow>
      </MdTableHead>
      <MdTableBody>
        {sortedRows.map(row => {
          return (
            <MdTableRow key={row.county} bordered={args.rowBorders}>
              {columns.map((column, index) => {
                return index === 0 ? (
                  <MdTableHeaderCell key={column.key} scope="row" bordered={args.cellBorders} alignment={args.thAlign}>
                    {formatValue(row[column.key])}
                  </MdTableHeaderCell>
                ) : (
                  <MdTableCell key={column.key} bordered={args.cellBorders} alignment={args.tdAlign}>
                    {formatValue(row[column.key])}
                  </MdTableCell>
                );
              })}
            </MdTableRow>
          );
        })}
      </MdTableBody>
    </MdTable>
  );

  return (
    <MdTableContainer horizontalScroll={args.horizontalScroll} aria-labelledby="table-caption">
      {table}
    </MdTableContainer>
  );
};
Table.args = {
  theme: 'primary',
  sortable: false,
  striped: false,
  bordered: false,
  horizontalScroll: false,
  cellBorders: false,
  rowBorders: true,
  thAlign: 'left',
  tdAlign: 'left',
};
