import React from 'react';
import { Part, PartType } from '../classes/Part';
import drivers from '../json/drivers.json';
import bodies from '../json/bodies.json';
import tires from '../json/tires.json';
import gliders from '../json/gliders.json';

export interface PartData {
  drivers: Part[];
  bodies: Part[];
  tires: Part[];
  gliders: Part[];
  selectedDriver: Part;
  selectedBody: Part;
  selectedTire: Part;
  selectedGlider: Part;
  setPart: (part: Part, type: PartType) => void;
  setKart: (parts: Part[]) => void;
}

export const defaultPartData: PartData = {
  drivers: [],
  bodies: [],
  tires: [],
  gliders: [],
  selectedDriver: new Part(),
  selectedBody: new Part(),
  selectedTire: new Part(),
  selectedGlider: new Part(),
  setPart: (part: Part, type: PartType) => console.log(part, type),
  setKart: (parts: Part[]) => console.log(parts),
};

export const PartContext = React.createContext<PartData>(defaultPartData);
PartContext.displayName = 'PartData';

const PartProvider: React.FC = (props) => {
  const { children } = props;
  const [partData, setPartData] = React.useState(defaultPartData);

  const setPart = (part: Part, type: PartType) => {
    switch (type) {
      case PartType.DRIVER:
        setPartData((data) => {
          return { ...data, selectedDriver: part };
        });
        break;
      case PartType.BODY:
        setPartData((data) => {
          return { ...data, selectedBody: part };
        });
        break;
      case PartType.TIRE:
        setPartData((data) => {
          return { ...data, selectedTire: part };
        });
        break;
      case PartType.GLIDER:
        setPartData((data) => {
          return { ...data, selectedGlider: part };
        });
        break;
    }
  };

  const setKart = (parts: Part[]) => {
    setPartData((data) => {
      return {
        ...data,
        selectedDriver: parts[0],
        selectedBody: parts[1],
        selectedTire: parts[2],
        selectedGlider: parts[3],
      };
    });
  };

  React.useEffect(() => {
    setPartData({
      drivers: drivers,
      bodies: bodies,
      tires: tires,
      gliders: gliders,
      selectedDriver: drivers[0],
      selectedBody: bodies[0],
      selectedTire: tires[0],
      selectedGlider: gliders[0],
      setPart: setPart,
      setKart: setKart,
    });
  }, []);

  return (
    <PartContext.Provider value={partData}>{children}</PartContext.Provider>
  );
};

export default PartProvider;
