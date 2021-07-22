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

  const statColor = (value: string, index: number) => {
    if (index < context.statPriority.indexOf('')) {
      return '#f92470';
    } else if (value === '') {
      return '#26baff';
    } else {
      return '#777';
    }
  };

  const SortableItem = SortableElement(({ value, currentIndex }: any) => (
    <div
      className="Stat"
      style={{ background: statColor(value, currentIndex) }}
    >
      <p>{value}</p>
    </div>
  ));

  const SortableList = SortableContainer(({ items }: any) => {
    return (
      <ul>
        {items.map((value: any, index: any) => (
          <SortableItem
            key={`item-${value}`}
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
