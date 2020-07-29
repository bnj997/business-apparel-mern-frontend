import React from 'react';
import {
} from "@material-ui/core/styles";
import './CardRow.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SupplierCard from './SupplierCard';
import ValueCard from './ValueCard';


// var delay = 0;
// function setDelay() {
//   delay = delay + 500;
//   return delay;
// }

// const useStyles = makeStyles({
//   fade: {
//     '&-appear': {
//       opacity: 0,
//     },
//     '&-appear-active': {
//       opacity: 1,
//       transition: `opacity 1000ms linear ${setDelay()}ms `
//     },
//   }
// });


const CardRow = props => {

  const Render = ({
    elements,
  }) => {
    if (props.type === "supplier") {
      return <SupplierCard {...elements}/>
    } else if (props.type === "value")  {
      return <ValueCard {...elements}/>
    }
  }
  
  return (
    <TransitionGroup className="center">
      {props.content.map((item, index) => 
        (
          <CSSTransition 
            in={true}
            appear={true}
            timeout={1000 + ((index+1)*500)}
            //classNames={classes.fade}
            classNames={`fade${index}`}
          > 
            <Render elements={item}/>       

          </CSSTransition> 
        )
      )
      }
    </TransitionGroup> 
  );
};

export default CardRow;