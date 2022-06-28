import MdLink from '../../packages/react/src/link/MdLink';

function onLinkClick(e) {
  e.preventDefault();
}

export interface Row {
  selected: boolean;
  expanded: boolean;
  values: React.ReactNode[];
}

export interface RowData {
  allSelected: boolean;
  rows: Row[];
}

export const rowData: RowData = {
  allSelected: false,
  rows: [
    {
      selected: false,
      expanded: false,
      values: [
        <MdLink href="#" onClick={onLinkClick}>
          Linkverdi
        </MdLink>,
        '01.01.2028',
        'Datoverdi Masse Masse Masse Masse Content',
        'Content',
      ],
    },
    {
      selected: false,
      expanded: false,
      values: [
        <MdLink href="#" onClick={onLinkClick}>
          Linkverdi
        </MdLink>,
        '01.01.2028',
        'Datoverdi',
        'Content',
      ],
    },
    {
      selected: false,
      expanded: false,
      values: [
        <MdLink href="#" onClick={onLinkClick}>
          Linkverdi
        </MdLink>,
        '01.01.2028',
        'Datoverdi',
        'Content',
      ],
    },
  ],
};

export default rowData;
