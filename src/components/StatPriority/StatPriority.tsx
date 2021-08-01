import React from 'react';
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';
import { Kart } from '../../classes/Kart';
import { TopKartsRequest } from '../../classes/TopKartsRequest';
import { PartContext } from '../../providers/PartProvider';
import {
  StatNames,
  StatPriorityContext,
} from '../../providers/StatPriorityProvider';
import './StatPriority.scss';

const StatPriority: React.FC = () => {
  const COLOR_TOP_PRIORITY = '#f92470';
  const COLOR_REGULAR_PRIORITY = '#777';
  const COLOR_PRIORITY_BAR = '#26baff';

  const statPriorityContext = React.useContext(StatPriorityContext);
  const partContext = React.useContext(PartContext)

  const statColor = (index: number) => {
    if (index < statPriorityContext.statPriority.indexOf(StatNames.PRIORITY)) {
      return COLOR_TOP_PRIORITY;
    } else if (index > statPriorityContext.statPriority.indexOf(StatNames.PRIORITY)) {
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

  const generateKarts = async () => {
    const prioritySplit = statPriorityContext.statPriority.indexOf(StatNames.PRIORITY)
    const priority = statPriorityContext.statPriority.slice(0, prioritySplit);
    const regular = statPriorityContext.statPriority.slice(prioritySplit + 1);
    const response = await fetch('/topKarts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(new TopKartsRequest(
        partContext.driverIsFixed ? partContext.selectedDriver : null,
        partContext.bodyIsFixed ? partContext.selectedBody : null,
        partContext.tireIsFixed ? partContext.selectedTire : null,
        partContext.gliderIsFixed ? partContext.selectedGlider : null,
        priority,
        regular,
        100
      ))
    })
    if (response.ok) {
      response.text().then(jsonString => {
        const topKarts: Kart[] = JSON.parse(jsonString)
        partContext.setTopKarts(topKarts)
      })
    }
  }

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    statPriorityContext.setNewStatPriority(
      arrayMove(statPriorityContext.statPriority, oldIndex, newIndex)
    );
  };
  
  return (
    <div className="StatPriority">
      <div className="StatList">
        <SortableList
          items={statPriorityContext.statPriority}
          onSortEnd={onSortEnd}
        ></SortableList>
      </div>
      <button onClick={generateKarts}>Generate Karts</button>
    </div>
  );
};

export default StatPriority;
