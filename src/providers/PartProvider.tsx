import React, { useCallback } from 'react';
import { Part, PartType } from '../classes/Part';
import { Kart } from '../classes/Kart';
import { TopKartsRequest } from '../classes/TopKartsRequest';

const AWS_URL = 'http://kart-optimizer-backend.us-east-2.elasticbeanstalk.com/';

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
  getTopKarts: (request: TopKartsRequest) => void;
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
  getTopKarts: (request: TopKartsRequest) => {
    console.log(request);
  },
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
  };

  const getPartList = async (endpoint: string): Promise<Part[]> => {
    try {
      const response = await fetch(`${AWS_URL}/parts/${endpoint}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      if (response.ok) {
        return response
          .text()
          .then((jsonString) => JSON.parse(jsonString) as Part[]);
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  };

  const getTopKarts = useCallback(async (request: TopKartsRequest) => {
    setPartData((data) => {
      return {
        ...data,
        topKartsLoaded: false,
      };
    });
    try {
      const response = await fetch(`${AWS_URL}/optimizer/topKarts`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(request),
      });
      if (response.ok) {
        response.text().then((jsonString) => {
          console.log(request)
          console.log(jsonString)
          const topKarts: Kart[] = JSON.parse(jsonString);
          setPartData((data) => {
            return {
              ...data,
              topKarts: topKarts,
              topKartsLoaded: true,
            };
          });
        });
      }
    } catch {
      return;
    }
  }, []);

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
      getTopKarts: getTopKarts,
      toggleFixed: toggleFixed,
    });
    getPartList('/drivers').then((drivers) =>
      setPartData((data) => {
        return {
          ...data,
          drivers: drivers,
          selectedDriver: drivers[0],
        };
      })
    );
    getPartList('/bodies').then((bodies) => {
      setPartData((data) => {
        return {
          ...data,
          bodies: bodies,
          selectedBody: bodies[0],
        };
      });
    });
    getPartList('/tires').then((tires) => {
      setPartData((data) => {
        return {
          ...data,
          tires: tires,
          selectedTire: tires[0],
        };
      });
    });
    getPartList('/gliders').then((gliders) => {
      setPartData((data) => {
        return {
          ...data,
          gliders: gliders,
          selectedGlider: gliders[0],
        };
      });
    });
  }, [getTopKarts]);

  return (
    <PartContext.Provider value={partData}>{children}</PartContext.Provider>
  );
};

export default PartProvider;
