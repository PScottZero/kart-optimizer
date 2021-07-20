import React, { Component } from 'react'
import { Part, PartType } from '../components/PartTile/Part'

export interface IKartContext {
  selectedDriver: Part,
  selectedBody: Part,
  selectedTire: Part,
  selectedGlider: Part
}

const context = {
  selectedDriver: new Part(),
  selectedBody: new Part(),
  selectedTire: new Part(),
  selectedGlider: new Part()
}

export const KartContext = React.createContext<IKartContext>(context);

export const setKartParts = (context: IKartContext, part: Part, type: PartType) => {
  switch (type) {
    case PartType.DRIVER: context.selectedDriver = part; break;
    case PartType.BODY: context.selectedBody = part; break;
    case PartType.TIRE: context.selectedTire = part; break;
    case PartType.GLIDER: context.selectedDriver = part; break;
  }
}

export default class KartProvider extends Component {
  render() {
    return <KartContext.Provider value={context}></KartContext.Provider>
  }
}
