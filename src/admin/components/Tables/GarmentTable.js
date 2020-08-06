import React from 'react';
import DataTable from '../../../shared/components/FormElements/DataTable';


const GarmentTable = props => {
  return (
    <DataTable
      height="55rem"
      title="Garments"
      defaultValueArray={["", "", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]]}
      columns={[
        {
          name: "styleNum",
          label: "StyleNum",
        },
        {
          name: "garmentImg",
          label: "Image",
          options: {
            sort: false,
            customBodyRender: (value) => (
              <img
                alt="garment display"
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
          name: "price",
          label: "Price",
        },
        {
          name: "category",
          label: "Category",
        },
        {
          name: "supplier",
          label: "Supplier",
        },
        {
          name: "description",
          label: "Description",
        },
        {
          name: "colours",
          label: "Colours",
        },
        {
          name: "sizes",
          label: "Sizes",
        }
      ]}
    />
  )
}

export default GarmentTable;

