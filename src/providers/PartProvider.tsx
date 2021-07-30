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
  selectedDriverIsFixed: boolean;
  selectedBodyIsFixed: boolean;
  selectedTireIsFixed: boolean;
  selectedGliderIsFixed: boolean;
  setPart: (part: Part, type: PartType) => void;
  setKart: (kart: Kart) => void;
  setFixed: (type: PartType) => void;
  unsetFixed: (type: PartType) => void;
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
  selectedDriverIsFixed: false,
  selectedBodyIsFixed: false,
  selectedTireIsFixed: false,
  selectedGliderIsFixed: false,
  setPart: (part: Part, type: PartType) => console.log(part, type),
  setKart: (kart: Kart) => console.log(kart),
  setFixed: (type: PartType) => console.log(type),
  unsetFixed: (type: PartType) => console.log(type),
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

  const setFixed = (type: PartType) => {
    switch (type) {
      case PartType.DRIVER:
        setPartData((data) => {
          return {
            ...data,
            selectedDriverIsFixed: true,
          };
        });
        break;
      case PartType.BODY:
        setPartData((data) => {
          return {
            ...data,
            selectedBodyIsFixed: true,
          };
        });
        break;
      case PartType.TIRE:
        setPartData((data) => {
          return {
            ...data,
            selectedTireIsFixed: true,
          };
        });
        break;
      case PartType.GLIDER:
        setPartData((data) => {
          return {
            ...data,
            selectedGliderIsFixed: true,
          };
        });
        break;
    }
  };

  const unsetFixed = (type: PartType) => {
    switch (type) {
      case PartType.DRIVER:
        setPartData((data) => {
          return {
            ...data,
            selectedDriverIsFixed: false,
          };
        });
        break;
      case PartType.BODY:
        setPartData((data) => {
          return {
            ...data,
            selectedBodyIsFixed: false,
          };
        });
        break;
      case PartType.TIRE:
        setPartData((data) => {
          return {
            ...data,
            selectedTireIsFixed: false,
          };
        });
        break;
      case PartType.GLIDER:
        setPartData((data) => {
          return {
            ...data,
            selectedGliderIsFixed: false,
          };
        });
        break;
    }
  };

  React.useEffect(() => {
    setPartData({
      drivers: drivers.map((driver) => Object.assign(new Part(), driver)),
      bodies: bodies.map((body) => Object.assign(new Part(), body)),
      tires: tires.map((tire) => Object.assign(new Part(), tire)),
      gliders: gliders.map((glider) => Object.assign(new Part(), glider)),
      selectedDriver: Object.assign(new Part(), drivers[0]),
      selectedBody: Object.assign(new Part(), bodies[0]),
      selectedTire: Object.assign(new Part(), tires[0]),
      selectedGlider: Object.assign(new Part(), gliders[0]),
      selectedDriverIsFixed: false,
      selectedBodyIsFixed: false,
      selectedTireIsFixed: false,
      selectedGliderIsFixed: false,
      setPart: setPart,
      setKart: setKart,
      setFixed: setFixed,
      unsetFixed: unsetFixed,
    });
  }, []);

  return (
    <PartContext.Provider value={partData}>{children}</PartContext.Provider>
  );
};

export default PartProvider;
