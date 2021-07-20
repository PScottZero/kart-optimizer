import React, { Component } from 'react'
import { Part } from '../components/PartTile/Part'
import drivers from '../json/drivers.json'
import bodies from '../json/bodies.json'
import tires from '../json/tires.json'
import gliders from '../json/gliders.json'

interface IPartContext {
  drivers: Part[],
  bodies: Part[],
  tires: Part[],
  gliders: Part[]
}

const context = {
  drivers: drivers,
  bodies: bodies,
  tires: tires,
  gliders: gliders
}

export const PartContext = React.createContext<IPartContext>(context);

export default class PartProvider extends Component {
  render() {
    return <PartContext.Provider value={context}></PartContext.Provider>
  }
}
