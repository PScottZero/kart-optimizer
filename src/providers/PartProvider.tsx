import React from 'react';
import { Part, PartType } from '../classes/Part';
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
  driverIsFixed: boolean;
  bodyIsFixed: boolean;
  tireIsFixed: boolean;
  gliderIsFixed: boolean;
  topKarts: Kart[];
  topKartsLoaded: boolean;
  setPart: (part: Part, type: PartType) => void;
  setKart: (kart: Kart) => void;
  setTopKarts: (topKarts: Kart[]) => void;
  toggleFixed: (type: PartType) => void;
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
  driverIsFixed: false,
  bodyIsFixed: false,
  tireIsFixed: false,
  gliderIsFixed: false,
  topKarts: [],
  topKartsLoaded: true,
  setPart: (part: Part, type: PartType) => console.log(part, type),
  setKart: (kart: Kart) => console.log(kart),
  setTopKarts: (topKarts: Kart[]) => console.log(topKarts),
  toggleFixed: (type: PartType) => console.log(type),
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

  const setTopKarts = (topKarts: Kart[]) => {
    setPartData((data) => {
      return {
        ...data,
        topKarts: topKarts
      }
    })
  }

  const toggleFixed = (type: PartType) => {
    switch (type) {
      case PartType.DRIVER:
        setPartData((data) => {
          return {
            ...data,
            driverIsFixed: !data.driverIsFixed,
          };
        });
        break;
      case PartType.BODY:
        setPartData((data) => {
          return {
            ...data,
            bodyIsFixed: !data.bodyIsFixed,
          };
        });
        break;
      case PartType.TIRE:
        setPartData((data) => {
          return {
            ...data,
            tireIsFixed: !data.tireIsFixed,
          };
        });
        break;
      case PartType.GLIDER:
        setPartData((data) => {
          return {
            ...data,
            gliderIsFixed: !data.gliderIsFixed,
          };
        });
        break;
    }
  }

  const getPartList = async (endpoint: string): Promise<Part[]> => {
    try {
      const response = await fetch(endpoint, { method: 'GET' });
      if (response.ok) {
        return response.text().then(jsonString => JSON.parse(jsonString) as Part[])
      } else {
        return []
      }
    } catch (error) {
      return []
    }
  }

  React.useEffect(() => {
    setPartData({
      drivers: [],
      bodies: [],
      tires: [],
      gliders: [],
      selectedDriver: new Part(),
      selectedBody: new Part(),
      selectedTire: new Part(),
      selectedGlider: new Part(),
      driverIsFixed: false,
      bodyIsFixed: false,
      tireIsFixed: false,
      gliderIsFixed: false,
      topKarts: [],
      topKartsLoaded: true,
      setPart: setPart,
      setKart: setKart,
      setTopKarts: setTopKarts,
      toggleFixed: toggleFixed
    });
    getPartList('/drivers').then(drivers =>
      setPartData(data => {
        return {
          ...data,
          drivers: drivers,
          selectedDriver: drivers[0]
        }
      })
    );
    getPartList('/bodies').then(bodies => {
      setPartData(data => {
        return {
          ...data,
          bodies: bodies,
          selectedBody: bodies[0]
        }
      })
    })
    getPartList('/tires').then(tires => {
      setPartData(data => {
        return {
          ...data,
          tires: tires,
          selectedTire: tires[0],
        }
      })
    })
    getPartList('/gliders').then(gliders => {
      setPartData(data => {
        return {
          ...data,
          gliders: gliders,
          selectedGlider: gliders[0]
        }
      })
    })
  }, []);

  return (
    <PartContext.Provider value={partData}>{children}</PartContext.Provider>
  );
};

export default PartProvider;
