import React from 'react';

import rowData from './mocks/dataGridRows';

import MdDataGrid from '../packages/react/src/data-grid/MdDataGrid';
import MdDataGridColumnHeaders from '../packages/react/src/data-grid/MdDataGridColumnHeaders';
import MdDataGridColumnHeader from '../packages/react/src/data-grid/MdDataGridColumnHeader';
import MdDataGridRows from '../packages/react/src/data-grid/MdDataGridRows';
import MdDataGridRow from '../packages/react/src/data-grid/MdDataGridRow';
import MdDataGridRowValue from '../packages/react/src/data-grid/MdDataGridRowValue';
import MdDataGridRightAlignedContent from '../packages/react/src/data-grid/MdDataGridRightAlignedContent';
import MdButton from '../packages/react/src/button/MdButton';
import MdLink from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/DataGrid',
  component: MdDataGrid,
};

const onLinkClick = (e) => e.preventDefault();

export const Primary = () => {
  const [rowState, updateRows] = React.useState(rowData);

  const toggleRowExpanded = (index) => {
    const newListOfRows = [...rowState.rows];
    newListOfRows[index].expanded = !newListOfRows[index].expanded;
    updateRows({ ...rowState, rows: newListOfRows });
  };

  const toggleRowSelected = (index) => {
    const newListOfRows = [...rowState.rows];
    newListOfRows[index].selected = !newListOfRows[index].selected;
    const allCheckboxesAreSelected = !newListOfRows.some(
      (row) => !row.selected
    );
    updateRows({
      rows: newListOfRows,
      allSelected: allCheckboxesAreSelected,
    });
  };

  const toggleAllChecked = () => {
    const newSelectedValue = !rowState.allSelected;
    const newListOfRows = rowState.rows.map((row) => ({
      ...row,
      selected: newSelectedValue,
    }));
    updateRows({ allSelected: newSelectedValue, rows: newListOfRows });
  };

  const renderRightAlignedContent = (expanded: boolean, rowIndex: number) => {
    return (
      <MdDataGridRightAlignedContent>
        <MdLink href="#" onClick={onLinkClick}>
          Link 1
        </MdLink>
        <MdLink href="#" onClick={onLinkClick}>
          Link 2
        </MdLink>
        <MdButton
          style={{ height: '16px' }}
          onClick={() => toggleRowExpanded(rowIndex)}
        >
          {expanded ? 'Lukk' : 'Åpne'}
        </MdButton>
      </MdDataGridRightAlignedContent>
    );
  };

  const renderRowValues = (values: React.ReactNode[]) =>
    values.map((value) => (
      <MdDataGridRowValue key={value as string}>{value}</MdDataGridRowValue>
    ));

  return (
    <MdDataGrid>
      <MdDataGridColumnHeaders
        checkboxProps={{
          value: 'allChecked',
          checked: rowState.allSelected,
          onChange: toggleAllChecked,
        }}
      >
        <MdDataGridColumnHeader></MdDataGridColumnHeader>
        <MdDataGridColumnHeader>Kolonne 2</MdDataGridColumnHeader>
        <MdDataGridColumnHeader>Kolonne 3</MdDataGridColumnHeader>
        <MdDataGridColumnHeader>Kolonne 4</MdDataGridColumnHeader>
      </MdDataGridColumnHeaders>
      <MdDataGridRows>
        {rowState.rows.map((row, rowIndex) => {
          const { selected, expanded, values } = row;
          return (
            <MdDataGridRow
              checkboxProps={{
                value: 'checked',
                checked: selected,
                onChange: () => toggleRowSelected(rowIndex),
              }}
              isExpanded={expanded}
              expandedContentRenderer={() => <span>Expanded content</span>}
              key={`row-${rowIndex}`}
            >
              {renderRowValues(values)}
              {renderRightAlignedContent(expanded, rowIndex)}
            </MdDataGridRow>
          );
        })}
      </MdDataGridRows>
    </MdDataGrid>
  );
};
