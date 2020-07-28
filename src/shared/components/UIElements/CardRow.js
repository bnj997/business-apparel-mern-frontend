import React, { useState } from 'react';
import {
} from "@material-ui/core/styles";
import './CardRow.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SupplierCard from './SupplierCard';


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
  return (
    <TransitionGroup className="card-row">
      {props.supplier.map((item, index) => 
        (
          <CSSTransition 
            in={true}
            appear={true}
            timeout={1000 + ((index+1)*500)}
            //classNames={classes.fade}
            classNames={`fade${index}`}
          >
            <SupplierCard
              {...item}
            />
          </CSSTransition> 
        )
      )
      }
    </TransitionGroup> 
  );
};

export default CardRow;