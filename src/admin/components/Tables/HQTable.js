import React from 'react';
import DataTable from '../../../shared/components/FormElements/DataTable';


const HQTable = props => {
  return (
    <DataTable
      height="55rem"
      ownPage={true}

      title="Headquarters"
      defaultValueArray={["", "", "", ""]}
      columns={[
        {
          name: "HQImg",
          label: "Image",
          options: {
            sort: false,
            customBodyRender: (value) => (
              <img
                alt="organisation logo"
                src={value}
                > 
              </img>
            )
          }
        },
        {
          name: "name",
          label: "Name",
        },
        {
          name: "telephone",
          label: "Telephone",
        },
        {
          name: "email",
          label: "Email",
        }
      ]}
    />
  )
}

export default HQTable;
