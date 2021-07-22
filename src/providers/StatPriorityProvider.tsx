import React from 'react';

interface StatPriorityData {
  statPriority: string[];
  setNewStatPriority: (statPriority: string[]) => void;
}

const defaultStatPriorityData = {
  statPriority: ['Speed', 'Acceleration', 'Weight', 'Handling', 'Traction'],
  setNewStatPriority: (statPriority: string[]) => console.log(statPriority),
};

export const StatPriorityContext = React.createContext<StatPriorityData>(
  defaultStatPriorityData
);

const StatPriorityProvider: React.FC = (props) => {
  const { children } = props;
  const [statPriority, setStatPriority] = React.useState(
    defaultStatPriorityData
  );

  const setNewStatPriority = (statPriority: string[]) => {
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
