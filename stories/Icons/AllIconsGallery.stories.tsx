import React from 'react';
import MdBurgerMenuIcon from '../../packages/react/src/icons/MdBurgerMenuIcon';
import MdCalendarDayIcon from '../../packages/react/src/icons/MdCalendarDayIcon';
import MdCalendarIcon from '../../packages/react/src/icons/MdCalendarIcon';
import MdCancelIcon from '../../packages/react/src/icons/MdCancelIcon';
import MdCheckCircleIcon from '../../packages/react/src/icons/MdCheckCircleIcon';
import MdCheckIcon from '../../packages/react/src/icons/MdCheckIcon';
import MdChevronIcon from '../../packages/react/src/icons/MdChevronIcon';
import MdCloseIcon from '../../packages/react/src/icons/MdCloseIcon';
import MdCommentIcon from '../../packages/react/src/icons/MdCommentIcon';
import MdConfirmIcon from '../../packages/react/src/icons/MdConfirmIcon';
import MdDeleteIcon from '../../packages/react/src/icons/MdDeleteIcon';
import MdDocIcon from '../../packages/react/src/icons/MdDocIcon';
import MdDocSearchIcon from '../../packages/react/src/icons/MdDocSearchIcon';
import MdDownloadIcon from '../../packages/react/src/icons/MdDownloadIcon';
import MdEditIcon from '../../packages/react/src/icons/MdEditIcon';
import MdEnvelopeIcon from '../../packages/react/src/icons/MdEnvelopeIcon';
import MdExpandIcon from '../../packages/react/src/icons/MdExpandIcon';
import MdGraphIcon from '../../packages/react/src/icons/MdGraphIcon';
import MdHelpIcon from '../../packages/react/src/icons/MdHelpIcon';
import MdHomeIcon from '../../packages/react/src/icons/MdHomeIcon';
import MdImageIcon from '../../packages/react/src/icons/MdImageIcon';
import MdInfoIcon from '../../packages/react/src/icons/MdInfoIcon';
import MdMinusIcon from '../../packages/react/src/icons/MdMinusIcon';
import MdPanIcon from '../../packages/react/src/icons/MdPanIcon';
import MdPersonIcon from '../../packages/react/src/icons/MdPersonIcon';
import MdPinIcon from '../../packages/react/src/icons/MdPinIcon';
import MdPlusIcon from '../../packages/react/src/icons/MdPlusIcon';
import MdPrintIcon from '../../packages/react/src/icons/MdPrintIcon';
import MdRedirectIcon from '../../packages/react/src/icons/MdRedirectIcon';
import MdSettingsIcon from '../../packages/react/src/icons/MdSettingsIcon';
import MdSignIcon from '../../packages/react/src/icons/MdSignIcon';
import MdSortingIcon from '../../packages/react/src/icons/MdSortingIcon';
import MdSubmenuIcon from '../../packages/react/src/icons/MdSubmenuIcon';
import MdTableIcon from '../../packages/react/src/icons/MdTableIcon';
import MdTimeIcon from '../../packages/react/src/icons/MdTimeIcon';
import MdUploadIcon from '../../packages/react/src/icons/MdUploadIcon';
import MdUserIcon from '../../packages/react/src/icons/MdUserIcon';
import MdWarningIcon from '../../packages/react/src/icons/MdWarningIcon';
import MdXIcon from '../../packages/react/src/icons/MdXIcon';
import MdZoomIcon from '../../packages/react/src/icons/MdZoomIcon';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Gallery',
};

const Template = (args: Args) => {
  return (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, 10rem)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdBurgerMenuIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdBurgerMenuIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdCalendarDayIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdCalendarDayIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdCalendarIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdCalendarIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdCancelIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdCancelIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdCheckCircleIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdCheckCircleIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdCheckIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdCheckIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdChevronIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdChevronIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdCloseIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdCloseIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdCommentIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdCommentIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdConfirmIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdConfirmIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdDeleteIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdDeleteIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdDocIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdDocIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdDocSearchIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdDocSearchIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdDownloadIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdDownloadIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdEditIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdEditIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdEnvelopeIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdEnvelopeIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdExpandIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdExpandIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdGraphIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdGraphIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdHelpIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdHelpIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdHomeIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdHomeIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdImageIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdImageIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdInfoIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdInfoIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdMinusIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdMinusIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdPanIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdPanIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdPersonIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdPersonIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdPinIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdPinIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdPlusIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdPlusIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdPrintIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdPrintIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdRedirectIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdRedirectIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdSettingsIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdSettingsIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdSignIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdSignIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdSortingIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdSortingIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdSubmenuIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdSubmenuIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdTableIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdTableIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdTimeIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdTimeIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdUploadIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdUploadIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdUserIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdUserIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdWarningIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdWarningIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdXIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdXIcon</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <MdZoomIcon width={args.width} height={args.height} color={args.color} className={args.className} />
        <span>MdZoomIcon</span>
      </div>
    </div>
  );
};

export const Gallery = Template.bind({});
Gallery.args = {
  color: '#005e5d',
  width: 32,
  height: 32,
  className: '',
};
