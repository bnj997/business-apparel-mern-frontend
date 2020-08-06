import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import GarmentTable from '../components/Tables/GarmentTable';

const GARMENTS = [
  {
    id: 'WJ01',
    garmentImg: 'Max Schwarz',
    name: "garment name",
    price: 25.46,
    category: "Work",
    supplier: "Menarock",
    description: "garment description",
    colours: ["Black", "White"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 'WJ06',
    garmentImg: 'Max Schwarz',
    name: "garment name2",
    price: 34.23,
    category: "Work",
    supplier: "Menarock2",
    description: "garment description2",
    colours: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 'WJ057',
    garmentImg: 'Max Schwarz',
    name: "garment name3",
    price: 34.23,
    category: "Work",
    supplier: "Menarock3",
    description: "garment description3",
    colours: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"]
  }
];

const Garments = props => {
  return (
    <Dashboard>
      <GarmentTable data={GARMENTS}/>
    </Dashboard>
  );
}

export default Garments;