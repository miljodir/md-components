import { Title, Subtitle, Description, Primary, Controls } from '@storybook/addon-docs/blocks';
import React from 'react';
import { MdIconAccountCircle } from '../../packages/react/src/icons-material/MdIconAccountCircle';
import { MdIconAdd } from '../../packages/react/src/icons-material/MdIconAdd';
import { MdIconArrowBackward } from '../../packages/react/src/icons-material/MdIconArrowBackward';
import { MdIconArrowDownward } from '../../packages/react/src/icons-material/MdIconArrowDownward';
import { MdIconArrowForward } from '../../packages/react/src/icons-material/MdIconArrowForward';
import { MdIconArrowUpward } from '../../packages/react/src/icons-material/MdIconArrowUpward';
import { MdIconBarChart } from '../../packages/react/src/icons-material/MdIconBarChart';
import { MdIconCalendarMonth } from '../../packages/react/src/icons-material/MdIconCalendarMonth';
import { MdIconCancel } from '../../packages/react/src/icons-material/MdIconCancel';
import { MdIconChat } from '../../packages/react/src/icons-material/MdIconChat';
import { MdIconCheck } from '../../packages/react/src/icons-material/MdIconCheck';
import { MdIconCheckCircle } from '../../packages/react/src/icons-material/MdIconCheckCircle';
import { MdIconChevronBackward } from '../../packages/react/src/icons-material/MdIconChevronBackward';
import { MdIconChevronForward } from '../../packages/react/src/icons-material/MdIconChevronForward';
import { MdIconClose } from '../../packages/react/src/icons-material/MdIconClose';
import { MdIconCollapseAll } from '../../packages/react/src/icons-material/MdIconCollapseAll';
import { MdIconDelete } from '../../packages/react/src/icons-material/MdIconDelete';
import { MdIconDescription } from '../../packages/react/src/icons-material/MdIconDescription';
import { MdIconDownload } from '../../packages/react/src/icons-material/MdIconDownload';
import { MdIconEdit } from '../../packages/react/src/icons-material/MdIconEdit';
import { MdIconExpandAll } from '../../packages/react/src/icons-material/MdIconExpandAll';
import { MdIconExpandContent } from '../../packages/react/src/icons-material/MdIconExpandContent';
import { MdIconHelp } from '../../packages/react/src/icons-material/MdIconHelp';
import { MdIconHome } from '../../packages/react/src/icons-material/MdIconHome';
import { MdIconImage } from '../../packages/react/src/icons-material/MdIconImage';
import { MdIconInfo } from '../../packages/react/src/icons-material/MdIconInfo';
import { MdIconKeyboardArrowDown } from '../../packages/react/src/icons-material/MdIconKeyboardArrowDown';
import { MdIconKeyboardArrowUp } from '../../packages/react/src/icons-material/MdIconKeyboardArrowUp';
import { MdIconLocation } from '../../packages/react/src/icons-material/MdIconLocation';
import { MdIconMail } from '../../packages/react/src/icons-material/MdIconMail';
import { MdIconMenu } from '../../packages/react/src/icons-material/MdIconMenu';
import { MdIconMore } from '../../packages/react/src/icons-material/MdIconMore';
import { MdIconOpenInNew } from '../../packages/react/src/icons-material/MdIconOpenInNew';
import { MdIconPerson } from '../../packages/react/src/icons-material/MdIconPerson';
import { MdIconPrint } from '../../packages/react/src/icons-material/MdIconPrint';
import { MdIconQuickReference } from '../../packages/react/src/icons-material/MdIconQuickReference';
import { MdIconRemove } from '../../packages/react/src/icons-material/MdIconRemove';
import { MdIconReport } from '../../packages/react/src/icons-material/MdIconReport';
import { MdIconSchedule } from '../../packages/react/src/icons-material/MdIconSchedule';
import { MdIconSearch } from '../../packages/react/src/icons-material/MdIconSearch';
import { MdIconSettings } from '../../packages/react/src/icons-material/MdIconSettings';
import { MdIconSignpost } from '../../packages/react/src/icons-material/MdIconSignpost';
import { MdIconSwapVert } from '../../packages/react/src/icons-material/MdIconSwapVert';
import { MdIconTable } from '../../packages/react/src/icons-material/MdIconTable';
import { MdIconUpload } from '../../packages/react/src/icons-material/MdIconUpload';
import { MdIconWarning } from '../../packages/react/src/icons-material/MdIconWarning';
import { MdIconZoomIn } from '../../packages/react/src/icons-material/MdIconZoomIn';
import { MdIconZoomOut } from '../../packages/react/src/icons-material/MdIconZoomOut';
import type { MdIconProps } from '../../packages/react/src/icons-material/icon.model';
import type { StoryFn } from '@storybook/react-webpack5';

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
          </>
        );
      },
      description: {
        component: 'A gallery of all available icons.<br/>We have switched to Material Symbols for our icons.',
      },
    },
  },
};

const Template: StoryFn = (args: MdIconProps) => {
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
        gap: '1.2rem',
        gridTemplateColumns: 'repeat(auto-fit, 10rem)',
        fontFamily: 'Open sans',
        fontSize: '0.8rem',
      }}
    >
      <div style={style}>
        <MdIconAccountCircle {...props} />
        <pre style={{ marginTop: 0 }}>MdIconAccountCircle</pre>
      </div>
      <div style={style}>
        <MdIconAdd {...props} />
        <pre style={{ marginTop: 0 }}>MdIconAdd</pre>
      </div>
      <div style={style}>
        <MdIconArrowBackward {...props} />
        <pre style={{ marginTop: 0 }}>MdIconArrowBackward</pre>
      </div>
      <div style={style}>
        <MdIconArrowDownward {...props} />
        <pre style={{ marginTop: 0 }}>MdIconArrowDownward</pre>
      </div>
      <div style={style}>
        <MdIconArrowForward {...props} />
        <pre style={{ marginTop: 0 }}>MdIconArrowForward</pre>
      </div>
      <div style={style}>
        <MdIconArrowUpward {...props} />
        <pre style={{ marginTop: 0 }}>MdIconArrowUpward</pre>
      </div>
      <div style={style}>
        <MdIconBarChart {...props} />
        <pre style={{ marginTop: 0 }}>MdIconBarChart</pre>
      </div>
      <div style={style}>
        <MdIconCalendarMonth {...props} />
        <pre style={{ marginTop: 0 }}>MdIconCalendarMonth</pre>
      </div>
      <div style={style}>
        <MdIconCancel {...props} />
        <pre style={{ marginTop: 0 }}>MdIconCancel</pre>
      </div>
      <div style={style}>
        <MdIconChat {...props} />
        <pre style={{ marginTop: 0 }}>MdIconChat</pre>
      </div>
      <div style={style}>
        <MdIconCheck {...props} />
        <pre style={{ marginTop: 0 }}>MdIconCheck</pre>
      </div>
      <div style={style}>
        <MdIconCheckCircle {...props} />
        <pre style={{ marginTop: 0 }}>MdIconCheckCircle</pre>
      </div>
      <div style={style}>
        <MdIconChevronBackward {...props} />
        <pre style={{ marginTop: 0 }}>MdIconChevronBackward</pre>
      </div>
      <div style={style}>
        <MdIconChevronForward {...props} />
        <pre style={{ marginTop: 0 }}>MdIconChevronForward</pre>
      </div>
      <div style={style}>
        <MdIconClose {...props} />
        <pre style={{ marginTop: 0 }}>MdIconClose</pre>
      </div>
      <div style={style}>
        <MdIconCollapseAll {...props} />
        <pre style={{ marginTop: 0 }}>MdIconCollapseAll</pre>
      </div>
      <div style={style}>
        <MdIconDelete {...props} />
        <pre style={{ marginTop: 0 }}>MdIconDelete</pre>
      </div>
      <div style={style}>
        <MdIconDescription {...props} />
        <pre style={{ marginTop: 0 }}>MdIconDescription</pre>
      </div>
      <div style={style}>
        <MdIconDownload {...props} />
        <pre style={{ marginTop: 0 }}>MdIconDownload</pre>
      </div>
      <div style={style}>
        <MdIconEdit {...props} />
        <pre style={{ marginTop: 0 }}>MdIconEdit</pre>
      </div>
      <div style={style}>
        <MdIconExpandAll {...props} />
        <pre style={{ marginTop: 0 }}>MdIconExpandAll</pre>
      </div>
      <div style={style}>
        <MdIconExpandContent {...props} />
        <pre style={{ marginTop: 0 }}>MdIconExpandContent</pre>
      </div>
      <div style={style}>
        <MdIconHelp {...props} />
        <pre style={{ marginTop: 0 }}>MdIconHelp</pre>
      </div>
      <div style={style}>
        <MdIconHome {...props} />
        <pre style={{ marginTop: 0 }}>MdIconHome</pre>
      </div>
      <div style={style}>
        <MdIconImage {...props} />
        <pre style={{ marginTop: 0 }}>MdIconImage</pre>
      </div>
      <div style={style}>
        <MdIconInfo {...props} />
        <pre style={{ marginTop: 0 }}>MdIconInfo</pre>
      </div>
      <div style={style}>
        <MdIconKeyboardArrowDown {...props} />
        <pre style={{ marginTop: 0 }}>MdIconKeyboardArrowDown</pre>
      </div>
      <div style={style}>
        <MdIconKeyboardArrowUp {...props} />
        <pre style={{ marginTop: 0 }}>MdIconKeyboardArrowUp</pre>
      </div>
      <div style={style}>
        <MdIconLocation {...props} />
        <pre style={{ marginTop: 0 }}>MdIconLocation</pre>
      </div>
      <div style={style}>
        <MdIconMail {...props} />
        <pre style={{ marginTop: 0 }}>MdIconMail</pre>
      </div>
      <div style={style}>
        <MdIconMenu {...props} />
        <pre style={{ marginTop: 0 }}>MdIconMenu</pre>
      </div>
      <div style={style}>
        <MdIconMore {...props} />
        <pre style={{ marginTop: 0 }}>MdIconMore</pre>
      </div>
      <div style={style}>
        <MdIconOpenInNew {...props} />
        <pre style={{ marginTop: 0 }}>MdIconOpenInNew</pre>
      </div>
      <div style={style}>
        <MdIconPerson {...props} />
        <pre style={{ marginTop: 0 }}>MdIconPerson</pre>
      </div>
      <div style={style}>
        <MdIconPrint {...props} />
        <pre style={{ marginTop: 0 }}>MdIconPrint</pre>
      </div>
      <div style={style}>
        <MdIconQuickReference {...props} />
        <pre style={{ marginTop: 0 }}>MdIconQuickReference</pre>
      </div>
      <div style={style}>
        <MdIconRemove {...props} />
        <pre style={{ marginTop: 0 }}>MdIconRemove</pre>
      </div>
      <div style={style}>
        <MdIconReport {...props} />
        <pre style={{ marginTop: 0 }}>MdIconReport</pre>
      </div>
      <div style={style}>
        <MdIconSchedule {...props} />
        <pre style={{ marginTop: 0 }}>MdIconSchedule</pre>
      </div>
      <div style={style}>
        <MdIconSearch {...props} />
        <pre style={{ marginTop: 0 }}>MdIconSearch</pre>
      </div>
      <div style={style}>
        <MdIconSettings {...props} />
        <pre style={{ marginTop: 0 }}>MdIconSettings</pre>
      </div>
      <div style={style}>
        <MdIconSignpost {...props} />
        <pre style={{ marginTop: 0 }}>MdIconSignpost</pre>
      </div>
      <div style={style}>
        <MdIconSwapVert {...props} />
        <pre style={{ marginTop: 0 }}>MdIconSwapVert</pre>
      </div>
      <div style={style}>
        <MdIconTable {...props} />
        <pre style={{ marginTop: 0 }}>MdIconTable</pre>
      </div>
      <div style={style}>
        <MdIconUpload {...props} />
        <pre style={{ marginTop: 0 }}>MdIconUpload</pre>
      </div>
      <div style={style}>
        <MdIconWarning {...props} />
        <pre style={{ marginTop: 0 }}>MdIconWarning</pre>
      </div>
      <div style={style}>
        <MdIconZoomIn {...props} />
        <pre style={{ marginTop: 0 }}>MdIconZoomIn</pre>
      </div>
      <div style={style}>
        <MdIconZoomOut {...props} />
        <pre style={{ marginTop: 0 }}>MdIconZoomOut</pre>
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
