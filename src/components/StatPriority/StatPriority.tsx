import React from 'react';
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';
import {
  StatNames,
  StatPriorityContext,
} from '../../providers/StatPriorityProvider';
import './StatPriority.scss';

const StatPriority: React.FC = () => {
  const context = React.useContext(StatPriorityContext);
  const COLOR_TOP_PRIORITY = '#f92470';
  const COLOR_REGULAR_PRIORITY = '#777';
  const COLOR_PRIORITY_BAR = '#26baff';

  const statColor = (index: number) => {
    if (index < context.statPriority.indexOf(StatNames.PRIORITY)) {
      return COLOR_TOP_PRIORITY;
    } else if (index > context.statPriority.indexOf(StatNames.PRIORITY)) {
      return COLOR_REGULAR_PRIORITY;
    } else {
      return COLOR_PRIORITY_BAR;
    }
  };

  const SortableItem = SortableElement(({ value, currentIndex }: any) => (
    <div className="Stat" style={{ background: statColor(currentIndex) }}>
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
            currentIndex={index}
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
