import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../../packages/css/src/icons/README.md';
import MdIconAccountCircle from '../../packages/react/src/icons-material/MdIconAccountCircle';
import MdIconAdd from '../../packages/react/src/icons-material/MdIconAdd';
import MdIconArrowBackward from '../../packages/react/src/icons-material/MdIconArrowBackward';
import MdIconArrowDownward from '../../packages/react/src/icons-material/MdIconArrowDownward';
import MdIconArrowForward from '../../packages/react/src/icons-material/MdIconArrowForward';
import MdIconArrowUpward from '../../packages/react/src/icons-material/MdIconArrowUpward';
import MdIconBarChart from '../../packages/react/src/icons-material/MdIconBarChart';
import MdIconCalendarMonth from '../../packages/react/src/icons-material/MdIconCalendarMonth';
import MdIconCancel from '../../packages/react/src/icons-material/MdIconCancel';
import MdIconChat from '../../packages/react/src/icons-material/MdIconChat';
import MdIconCheckCircle from '../../packages/react/src/icons-material/MdIconCheckCircle';
import MdIconChevronBackward from '../../packages/react/src/icons-material/MdIconChevronBackward';
import MdIconChevronForward from '../../packages/react/src/icons-material/MdIconChevronForward';
import MdIconClose from '../../packages/react/src/icons-material/MdIconClose';
import MdIconCollapseAll from '../../packages/react/src/icons-material/MdIconCollapseAll';
import MdIconDelete from '../../packages/react/src/icons-material/MdIconDelete';
import MdIconDescription from '../../packages/react/src/icons-material/MdIconDescription';
import MdIconDownload from '../../packages/react/src/icons-material/MdIconDownload';
import MdIconEdit from '../../packages/react/src/icons-material/MdIconEdit';
import MdIconExpandAll from '../../packages/react/src/icons-material/MdIconExpandAll';
import MdIconExpandContent from '../../packages/react/src/icons-material/MdIconExpandContent';
import MdIconHelp from '../../packages/react/src/icons-material/MdIconHelp';
import MdIconHome from '../../packages/react/src/icons-material/MdIconHome';
import MdIconImage from '../../packages/react/src/icons-material/MdIconImage';
import MdIconInfo from '../../packages/react/src/icons-material/MdIconInfo';
import MdIconKeyboardArrowDown from '../../packages/react/src/icons-material/MdIconKeyboardArrowDown';
import MdIconKeyboardArrowUp from '../../packages/react/src/icons-material/MdIconKeyboardArrowUp';
import MdIconLocation from '../../packages/react/src/icons-material/MdIconLocation';
import MdIconMail from '../../packages/react/src/icons-material/MdIconMail';
import MdIconMenu from '../../packages/react/src/icons-material/MdIconMenu';
import MdIconMore from '../../packages/react/src/icons-material/MdIconMore';
import MdIconOpenInNew from '../../packages/react/src/icons-material/MdIconOpenInNew';
import MdIconPerson from '../../packages/react/src/icons-material/MdIconPerson';
import MdIconPrint from '../../packages/react/src/icons-material/MdIconPrint';
import MdIconQuickReference from '../../packages/react/src/icons-material/MdIconQuickReference';
import MdIconRemove from '../../packages/react/src/icons-material/MdIconRemove';
import MdIconSchedule from '../../packages/react/src/icons-material/MdIconSchedule';
import MdIconSearch from '../../packages/react/src/icons-material/MdIconSearch';
import MdIconSettings from '../../packages/react/src/icons-material/MdIconSettings';
import MdIconSignpost from '../../packages/react/src/icons-material/MdIconSignpost';
import MdIconTable from '../../packages/react/src/icons-material/MdIconTable';
import MdIconUpload from '../../packages/react/src/icons-material/MdIconUpload';
import MdIconWarning from '../../packages/react/src/icons-material/MdIconWarning';
import MdIconZoomIn from '../../packages/react/src/icons-material/MdIconZoomIn';
import MdIconZoomOut from '../../packages/react/src/icons-material/MdIconZoomOut';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Gallery',
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component: 'A gallery of all available icons.<br/>We have switched to Material Symbols for our icons.',
      },
    },
  },
};

const Template = (args: Args) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center',
  };

  const props = {
    color: args.color,
    className: args.className,
    large: args.large,
    width: 32,
    height: 32,
  };

  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, 10rem)',
        fontFamily: 'Open sans',
        fontSize: '0.8rem',
      }}
    >
      <div style={style}>
        <MdIconAccountCircle {...props} />
        <pre>MdIconAccountCircle</pre>
      </div>
      <div style={style}>
        <MdIconAdd {...props} />
        <pre>MdIconAdd</pre>
      </div>
      <div style={style}>
        <MdIconArrowBackward {...props} />
        <pre>MdIconArrowBackward</pre>
      </div>
      <div style={style}>
        <MdIconArrowDownward {...props} />
        <pre>MdIconArrowDownward</pre>
      </div>
      <div style={style}>
        <MdIconArrowForward {...props} />
        <pre>MdIconArrowForward</pre>
      </div>
      <div style={style}>
        <MdIconArrowUpward {...props} />
        <pre>MdIconArrowUpward</pre>
      </div>
      <div style={style}>
        <MdIconBarChart {...props} />
        <pre>MdIconBarChart</pre>
      </div>
      <div style={style}>
        <MdIconCalendarMonth {...props} />
        <pre>MdIconCalendarMonth</pre>
      </div>
      <div style={style}>
        <MdIconCancel {...props} />
        <pre>MdIconCancel</pre>
      </div>
      <div style={style}>
        <MdIconChat {...props} />
        <pre>MdIconChat</pre>
      </div>
      <div style={style}>
        <MdIconCheckCircle {...props} />
        <pre>MdIconCheckCircle</pre>
      </div>
      <div style={style}>
        <MdIconChevronBackward {...props} />
        <pre>MdIconChevronBackward</pre>
      </div>
      <div style={style}>
        <MdIconChevronForward {...props} />
        <pre>MdIconChevronForward</pre>
      </div>
      <div style={style}>
        <MdIconClose {...props} />
        <pre>MdIconClose</pre>
      </div>
      <div style={style}>
        <MdIconCollapseAll {...props} />
        <pre>MdIconCollapseAll</pre>
      </div>
      <div style={style}>
        <MdIconDelete {...props} />
        <pre>MdIconDelete</pre>
      </div>
      <div style={style}>
        <MdIconDescription {...props} />
        <pre>MdIconDescription</pre>
      </div>
      <div style={style}>
        <MdIconDownload {...props} />
        <pre>MdIconDownload</pre>
      </div>
      <div style={style}>
        <MdIconEdit {...props} />
        <pre>MdIconEdit</pre>
      </div>
      <div style={style}>
        <MdIconExpandAll {...props} />
        <pre>MdIconExpandAll</pre>
      </div>
      <div style={style}>
        <MdIconExpandContent {...props} />
        <pre>MdIconExpandContent</pre>
      </div>
      <div style={style}>
        <MdIconHelp {...props} />
        <pre>MdIconHelp</pre>
      </div>
      <div style={style}>
        <MdIconHome {...props} />
        <pre>MdIconHome</pre>
      </div>
      <div style={style}>
        <MdIconImage {...props} />
        <pre>MdIconImage</pre>
      </div>
      <div style={style}>
        <MdIconInfo {...props} />
        <pre>MdIconInfo</pre>
      </div>
      <div style={style}>
        <MdIconKeyboardArrowDown {...props} />
        <pre>MdIconKeyboardArrowDown</pre>
      </div>
      <div style={style}>
        <MdIconKeyboardArrowUp {...props} />
        <pre>MdIconKeyboardArrowUp</pre>
      </div>
      <div style={style}>
        <MdIconLocation {...props} />
        <pre>MdIconLocation</pre>
      </div>
      <div style={style}>
        <MdIconMail {...props} />
        <pre>MdIconMail</pre>
      </div>
      <div style={style}>
        <MdIconMenu {...props} />
        <pre>MdIconMenu</pre>
      </div>
      <div style={style}>
        <MdIconMore {...props} />
        <pre>MdIconMore</pre>
      </div>
      <div style={style}>
        <MdIconOpenInNew {...props} />
        <pre>MdIconOpenInNew</pre>
      </div>
      <div style={style}>
        <MdIconPerson {...props} />
        <pre>MdIconPerson</pre>
      </div>
      <div style={style}>
        <MdIconPrint {...props} />
        <pre>MdIconPrint</pre>
      </div>
      <div style={style}>
        <MdIconQuickReference {...props} />
        <pre>MdIconQuickReference</pre>
      </div>
      <div style={style}>
        <MdIconRemove {...props} />
        <pre>MdIconRemove</pre>
      </div>
      <div style={style}>
        <MdIconSchedule {...props} />
        <pre>MdIconSchedule</pre>
      </div>
      <div style={style}>
        <MdIconSearch {...props} />
        <pre>MdIconSearch</pre>
      </div>
      <div style={style}>
        <MdIconSettings {...props} />
        <pre>MdIconSettings</pre>
      </div>
      <div style={style}>
        <MdIconSignpost {...props} />
        <pre>MdIconSignpost</pre>
      </div>
      <div style={style}>
        <MdIconTable {...props} />
        <pre>MdIconTable</pre>
      </div>
      <div style={style}>
        <MdIconUpload {...props} />
        <pre>MdIconUpload</pre>
      </div>
      <div style={style}>
        <MdIconWarning {...props} />
        <pre>MdIconWarning</pre>
      </div>
      <div style={style}>
        <MdIconZoomIn {...props} />
        <pre>MdIconZoomIn</pre>
      </div>
      <div style={style}>
        <MdIconZoomOut {...props} />
        <pre>MdIconZoomOut</pre>
      </div>
    </div>
  );
};

export const Gallery = Template.bind({});
Gallery.args = {
  large: false,
  color: '#005e5d',
  className: '',
};
