import React from 'react';

import MdDataGrid from '../packages/react/src/data-grid/MdDataGrid';
import MdLink from '../packages/react/src/link/MdLink';
import ConfirmIcon from '../packages/react/src/icons/ConfirmIcon';

export default {
  title: 'Components/DataGrid',
  component: MdDataGrid,
};

export const Primary = () => {
  return (
    <MdDataGrid
      columnHeaders={['Kolonne 1', 'Kolonne 2', 'Kolonne 3', 'Kolonne 4']}
      rows={[
        {
          selected: false,
          values: [
            <MdLink>Linkverdi</MdLink>,
            '01.01.2028',
            'Datoverdi',
            <ConfirmIcon />,
          ],
        },
      ]}
    />
  );
};
