import React from 'react';

interface StatPriorityData {
  statPriority: StatNames[];
  setNewStatPriority: (statPriority: StatNames[]) => void;
}

export enum StatNames {
  SPEED = 'Speed',
  ACCELERATION = 'Acceleration',
  WEIGHT = 'Weight',
  HANDLING = 'Handling',
  TRACTION = 'Traction',
  PRIORITY = '',
}

const defaultStatPriorityData = {
  statPriority: [
    StatNames.SPEED,
    StatNames.ACCELERATION,
    StatNames.PRIORITY,
    StatNames.WEIGHT,
    StatNames.HANDLING,
    StatNames.TRACTION,
  ],
  setNewStatPriority: (statPriority: StatNames[]) => console.log(statPriority),
};

export const StatPriorityContext = React.createContext<StatPriorityData>(
  defaultStatPriorityData
);

const StatPriorityProvider: React.FC = (props) => {
  const { children } = props;
  const [statPriority, setStatPriority] = React.useState(
    defaultStatPriorityData
  );

  const setNewStatPriority = (statPriority: StatNames[]) => {
    setStatPriority((data) => {
      return { ...data, statPriority: statPriority };
    });
  };

  React.useEffect(() => {
    setStatPriority((data) => {
      return { ...data, setNewStatPriority: setNewStatPriority };
    });
  }, []);

  return (
    <StatPriorityContext.Provider value={statPriority}>
      {children}
    </StatPriorityContext.Provider>
  );
};

export default StatPriorityProvider;
