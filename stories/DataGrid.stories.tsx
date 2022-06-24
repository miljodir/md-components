import React from 'react';

import MdDataGrid from '../packages/react/src/data-grid/MdDataGrid';
import MdLink from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/DataGrid',
  component: MdDataGrid,
};

export const Primary = () => {
  return (
    <MdDataGrid
      columnHeaders={[
        'Kolonne 1 Masse Masse Masse Masse Content',
        'Kolonne 2',
        'Kolonne 3',
        'Kolonne 4',
        'Kolonne 5',
        'Kolonne 6',
      ]}
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
    />
  );
};
