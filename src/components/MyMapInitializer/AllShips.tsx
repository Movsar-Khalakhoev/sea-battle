import React from 'react'
import { IMap } from '../../models/Map'
import Map from '../Map/Map'

interface AllShipsProps {}

const AllShips: React.FC<AllShipsProps> = () => {
  return <Map mapState={defaultMap} position={{ x: 4, y: 4 }} />
}

export default AllShips

const defaultMap: IMap = {
  hits: [],
  ships: [
    {
      coords: [
        {
          x: 'b',
          y: '2',
        },
        {
          x: 'b',
          y: '3',
        },
        {
          x: 'b',
          y: '4',
        },
        {
          x: 'b',
          y: '5',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'd',
          y: '2',
        },
        {
          x: 'd',
          y: '3',
        },
        {
          x: 'd',
          y: '4',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'f',
          y: '2',
        },
        {
          x: 'f',
          y: '3',
        },
        {
          x: 'f',
          y: '4',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'h',
          y: '2',
        },
        {
          x: 'h',
          y: '3',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'j',
          y: '2',
        },
        {
          x: 'j',
          y: '3',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'j',
          y: '5',
        },
        {
          x: 'j',
          y: '6',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'h',
          y: '5',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'h',
          y: '7',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'f',
          y: '6',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'd',
          y: '6',
        },
      ],
      destroyed: false,
    },
  ],
}
