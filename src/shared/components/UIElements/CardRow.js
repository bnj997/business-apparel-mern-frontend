import React from 'react';
import {
} from "@material-ui/core/styles";
import './CardRow.css';
import SupplierCard from './SupplierCard';
import ValueCard from './ValueCard';
import TeamCard from './TeamCard';


const CardRow = props => {

  const Render = ({
    elements,
  }) => {
    if (props.type === "supplier") {
      return <SupplierCard {...elements}/>
    } else if (props.type === "value")  {
      return <ValueCard {...elements}/>
    } else if (props.type === "team")  {
      return <TeamCard {...elements}/>
    }
  }
  
  return (
    <div className="center">
      {props.content.map((item, index) => 
        (
          <Render elements={item}/>       
        )
      )
      }
    </div> 
  );
};

export default CardRow;