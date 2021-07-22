import React from 'react';
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';
import { StatPriorityContext } from '../../providers/StatPriorityProvider';
import './StatPriority.scss';

const StatPriority: React.FC = () => {
  const context = React.useContext(StatPriorityContext);

  const SortableItem = SortableElement(({ value }: any) => (
    <div className="Stat">
      <p>{value}</p>
    </div>
  ));

  const SortableList = SortableContainer(({ items }: any) => {
    return (
      <ul>
        {items.map((value: any, index: any) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={value}
          ></SortableItem>
        ))}
      </ul>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    context.setNewStatPriority(
      arrayMove(context.statPriority, oldIndex, newIndex)
    );
  };

  return (
    <div className="StatPriority">
      <SortableList
        items={context.statPriority}
        onSortEnd={onSortEnd}
      ></SortableList>
    </div>
  );
};

export default StatPriority;
