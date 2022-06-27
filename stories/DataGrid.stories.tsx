import React from 'react';

import MdDataGrid from '../packages/react/src/data-grid/MdDataGrid';
import MdColumnHeaders from '../packages/react/src/data-grid/MdColumnHeaders';
import MdColumnHeader from '../packages/react/src/data-grid/MdColumnHeader';
import MdDataGridRows from '../packages/react/src/data-grid/MdDataGridRows';
import MdDataGridRow from '../packages/react/src/data-grid/MdDataGridRow';
import MdDataGridRowValue from '../packages/react/src/data-grid/MdDataGridRowValue';
import MdLink from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/DataGrid',
  component: MdDataGrid,
};

function onLinkClick(e) {
  e.preventDefault();
}

const rowData = [
  {
    selected: false,
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
    values: [
      <MdLink href="#" onClick={onLinkClick}>
        Linkverdi
      </MdLink>,
      '01.01.2028',
      'Datoverdi',
      'Content',
    ],
  },
];

export const Primary = () => {
  const [allChecked, setAllChecked] = React.useState(false);
  const toggleAllChecked = () => setAllChecked(!allChecked);

  return (
    <MdDataGrid>
      <MdColumnHeaders
        checkboxProps={{
          value: 'allChecked',
          checked: allChecked,
          onChange: toggleAllChecked,
        }}
      >
        <MdColumnHeader>Kolonne 1 Med Masse Masse Masse Content</MdColumnHeader>
        <MdColumnHeader>Kolonne 2</MdColumnHeader>
        <MdColumnHeader>Kolonne 3</MdColumnHeader>
        <MdColumnHeader>Kolonne 4</MdColumnHeader>
      </MdColumnHeaders>
      <MdDataGridRows>
        {rowData.map(({ values, selected }) => (
          <MdDataGridRow
            checkboxProps={{
              value: 'allChecked',
              checked: selected,
              onChange: toggleAllChecked,
            }}
          >
            {values.map((value) => (
              <MdDataGridRowValue>{value}</MdDataGridRowValue>
            ))}
          </MdDataGridRow>
        ))}
      </MdDataGridRows>
    </MdDataGrid>
  );
};
