import React from 'react';
import {
} from "@material-ui/core/styles";
import './ValuesRow.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ValueCard from './ValueCard';

const ValueRow = props => {
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

            <ValueCard
              {...item}
            />      

          </CSSTransition> 
        )
      )
      }
    </TransitionGroup> 
  );
};

export default ValueRow;