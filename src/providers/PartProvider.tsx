import React from "react";
import { Part, PartType } from "../components/PartTile/Part";
import drivers from "../json/drivers.json";
import bodies from "../json/bodies.json";
import tires from "../json/tires.json";
import gliders from "../json/gliders.json";

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
}

export const defaultPartData: PartData = {
  drivers: [new Part()],
  bodies: [new Part()],
  tires: [new Part()],
  gliders: [new Part()],
  selectedDriver: new Part(),
  selectedBody: new Part(),
  selectedTire: new Part(),
  selectedGlider: new Part(),
  setPart: (part: Part, type: PartType) => console.log(part, type),
};

export const PartContext = React.createContext<PartData>(defaultPartData);
PartContext.displayName = "PartData";

const PartProvider: React.FC = (children) => {
  const [partData, setPartData] = React.useState(defaultPartData);

  React.useEffect(() => {
    const setPart = (part: Part, type: PartType) => {
      switch (type) {
        case PartType.DRIVER:
          setPartData({ ...partData, selectedBody: part });
          break;
        case PartType.BODY:
          setPartData({ ...partData, selectedBody: part });
          break;
        case PartType.TIRE:
          setPartData({ ...partData, selectedTire: part });
          break;
        case PartType.GLIDER:
          setPartData({ ...partData, selectedGlider: part });
          break;
      }
    };

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
    });
  }, [partData]);

  return (
    <PartContext.Provider value={partData}>{children}</PartContext.Provider>
  );
};

export default PartProvider;
