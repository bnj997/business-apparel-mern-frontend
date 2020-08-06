import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import HQTable from '../components/Tables/HQTable';

const HEADQUARTERS = [
  {
    id: 'h1',
    HQImg: "",
    name: 'Menarock',
    telephone: "000000000",
    email: "menarock@gmail.com",
    garments: [
      'WJ01',
      'WJ057'
    ]
  },
  {
    id: 'h2',
    HQImg: "",
    name: 'Menarock2',
    telephone: "000000000",
    email: "menarock2@gmail.com",
    garments: [
      'WJ06',
    ]
  }
];


const Headquarters = props => {
  return (
    <Dashboard>
      <HQTable data={HEADQUARTERS}/>
    </Dashboard>
  );
}

export default Headquarters;