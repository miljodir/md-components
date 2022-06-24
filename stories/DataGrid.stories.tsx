import React from 'react';

import MdDataGrid from '../packages/react/src/data-grid/MdDataGrid';
import MdColumnHeaders from '../packages/react/src/data-grid/MdColumnHeaders';
import MdColumnHeader from '../packages/react/src/data-grid/MdColumnHeader';
import MdLink from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/DataGrid',
  component: MdDataGrid,
};

export const Primary = () => {
  const [allChecked, setAllChecked] = React.useState(false);
  const toggleAllChecked = () => setAllChecked(!allChecked);

  return (
    <MdDataGrid
      rows={[
        {
          selected: false,
          values: [
            <MdLink>Linkverdi</MdLink>,
            '01.01.2028',
            'Datoverdi Masse Masse Masse Masse Content',
            'Content',
            'Datoverdi Masse Masse Masse Masse Content',
            'Datoverdi Masse Masse Masse Masse Content',
          ],
        },
        {
          selected: false,
          values: [
            <MdLink>Linkverdi</MdLink>,
            '01.01.2028',
            'Datoverdi',
            'Content',
            'Datoverdi Masse Masse Masse Masse Content',
            'Datoverdi Masse Masse Masse Masse Content',
          ],
        },
        {
          selected: false,
          values: [
            <MdLink>Linkverdi</MdLink>,
            '01.01.2028',
            'Datoverdi',
            'Content',
            'Datoverdi Masse Masse Masse Masse Content',
            'Datoverdi Masse Masse Masse Masse Content',
          ],
        },
      ]}
    >
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
        <MdColumnHeader>Kolonne 5</MdColumnHeader>
        <MdColumnHeader>Kolonne 6</MdColumnHeader>
      </MdColumnHeaders>
    </MdDataGrid>
  );
};
