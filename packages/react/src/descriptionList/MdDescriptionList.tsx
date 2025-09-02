import classnames from 'classnames';
import React from 'react';

export interface MdDescriptionListProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}
export interface MdDescriptionListItemProps {
  label: string | React.ReactNode;
  children: React.ReactNode[] | React.ReactNode | string;
}

export const MdDescriptionList: React.FC<MdDescriptionListProps> = ({
  children,
  className,
  narrow = false,
}: MdDescriptionListProps) => {
  const classes = classnames(
    'md-description-list',
    {
      'md-description-list--narrow': narrow,
    },
    className,
  );

  return <dl className={classes}>{children}</dl>;
};

export const MdDescriptionListItem: React.FC<MdDescriptionListItemProps> = ({
  label,
  children,
}: MdDescriptionListItemProps) => {
  return (
    <div className="md-description-list-item">
      <dt className="md-description-list-item-label">{label}</dt>
      <dd className="md-description-list-item-description">{children}</dd>
    </div>
  );
};

export default MdDescriptionList;
