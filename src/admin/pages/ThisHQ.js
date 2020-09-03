import React, { useState, useEffect} from 'react';

import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import { Button } from '@material-ui/core';
import HQGarmentTable from '../components/Tables/HQGarmentTable';
import HQBranchTable from '../components/Tables/HQBranchTable';
import HQUserTable from '../components/Tables/HQUserTable';




// const HEADQUARTERS = [
//   {
//     id: 'h1',
//     HQImg: "",
//     name: 'Menarock',
//     telephone: "000000000",
//     email: "menarock@gmail.com",
//     garments: [
//       'WJ01',
//       'WJ057'
//     ]
//   },
//   {
//     id: 'h2',
//     HQImg: "",
//     name: 'Menarock2',
//     telephone: "000000000",
//     email: "menarock2@gmail.com",
//     garments: [
//       'WJ06',
//     ]
//   }
// ];

// const GARMENTS = [
//   {
//     id: 'WJ01',
//     garmentImg: 'Max Schwarz',
//     name: "garment name",
//     price: 25.46,
//     category: "Work",
//     supplier: "Menarock",
//     description: "garment description",
//     colours: ["Black", "White"],
//     sizes: ["S", "M", "L"]
//   },
//   {
//     id: 'WJ06',
//     garmentImg: 'Max Schwarz',
//     name: "garment name2",
//     price: 34.23,
//     category: "Work",
//     supplier: "Menarock2",
//     description: "garment description2",
//     colours: ["Black", "White"],
//     sizes: ["S", "M", "L", "XL"]
//   },
//   {
//     id: 'WJ057',
//     garmentImg: 'Max Schwarz',
//     name: "garment name3",
//     price: 34.23,
//     category: "Work",
//     supplier: "Menarock3",
//     description: "garment description3",
//     colours: ["Black", "White"],
//     sizes: ["S", "M", "L", "XL"]
//   }
// ];

const ThisHQ = props => {
  const [type, setType] = useState("Garments")

  // const hqGarmentArray = [];
  
  // useEffect(() => {
  //   const hq = HEADQUARTERS.filter(garments => garments.id === hqId)
  //   const hqGarmentId = hq[0].garments
  //   hqGarmentId.forEach(function(item, index) {
  //     hqGarmentArray.push(GARMENTS.filter(garment => garment.id === item)[0])
  //   })
  // }, [hqId, hqGarmentArray])
  
  

  return (
    <Dashboard>
      <div>
        <Button variant="contained" onClick={() => setType("Orders")}> Orders </Button>
        <Button variant="contained" onClick={() => setType("Garments")}> Garments </Button>
        <Button variant="contained" onClick={() => setType("Branches")}> Branches </Button>
        <Button variant="contained" onClick={() => setType("Users")}> Users </Button>
        { (type === "Garments") && <HQGarmentTable />}
        { (type === "Branches") && <HQBranchTable />}
        { (type === "Users") && <HQUserTable />}
      </div>
  
    </Dashboard>

  );
}

export default ThisHQ;