import React from 'react';
import { PartContext } from '../../providers/PartProvider';
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';
import KartCombo from '../KartCombo/KartCombo';
import './Optimizer.scss';

const Optimizer: React.FC = () => {
  const context = React.useContext(PartContext);
  const [{ statPriority }, setStatPriority] = React.useState({
    statPriority: ['Speed', 'Acceleration', 'Weight', 'Handling', 'Traction'],
  });

  const SortableItem = SortableElement(({ value }: any) => <li>{value}</li>);

  const SortableList = SortableContainer(({ items }: any) => {
    return (
      <ul>
        {items.map((value: any, index: any) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </ul>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setStatPriority({
      statPriority: arrayMove(statPriority, oldIndex, newIndex),
    });
  };

  return (
    <div className="Optimizer">
      <div className="Config">
        <SortableList items={statPriority} onSortEnd={onSortEnd}></SortableList>
        <button>Generate Karts</button>
      </div>
      <div className="Options">
        {new Array(5).fill(0).map(() => (
          <KartCombo
            parts={[
              context.selectedDriver,
              context.selectedBody,
              context.selectedTire,
              context.selectedGlider,
            ]}
          ></KartCombo>
        ))}
      </div>
    </div>
  );
};

export default Optimizer;
