import React from 'react';
import { Part, PartType } from '../classes/Part';
import drivers from '../json/drivers.json';
import bodies from '../json/bodies.json';
import tires from '../json/tires.json';
import gliders from '../json/gliders.json';
import { Kart } from '../classes/Kart';

export interface PartData {
  drivers: Part[];
  bodies: Part[];
  tires: Part[];
  gliders: Part[];
  selectedDriver: Part;
  selectedBody: Part;
  selectedTire: Part;
  selectedGlider: Part;
  statPriority: string[];
  setPart: (part: Part, type: PartType) => void;
  setKart: (kart: Kart) => void;
}

const defaultStatPriority = [
  'Speed',
  'Acceleration',
  'Weight',
  'Handling',
  'Traction',
];

export const defaultPartData: PartData = {
  drivers: [],
  bodies: [],
  tires: [],
  gliders: [],
  selectedDriver: new Part(),
  selectedBody: new Part(),
  selectedTire: new Part(),
  selectedGlider: new Part(),
  statPriority: defaultStatPriority,
  setPart: (part: Part, type: PartType) => console.log(part, type),
  setKart: (kart: Kart) => console.log(kart),
};

export const PartContext = React.createContext<PartData>(defaultPartData);

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

  const setKart = (kart: Kart) => {
    setPartData((data) => {
      return {
        ...data,
        selectedDriver: kart.driver,
        selectedBody: kart.body,
        selectedTire: kart.tire,
        selectedGlider: kart.glider,
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
      statPriority: defaultStatPriority,
      setPart: setPart,
      setKart: setKart,
    });
  }, []);

  return (
    <PartContext.Provider value={partData}>{children}</PartContext.Provider>
  );
};

export default PartProvider;
