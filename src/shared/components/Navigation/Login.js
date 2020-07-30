import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Modal from '../UIElements/Modal'
import SmallButton from '../FormElements/SmallButton';
import { Button} from "@material-ui/core";
import {AuthContext} from '../../context/auth-context';
import './Login.css';
import './NavLinks.css';

const Login = props => {

  const auth = useContext(AuthContext);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function showWarning() {
    setShowConfirmModal(true)
  }
  function cancelLogout() {
    setShowConfirmModal(false)
  }

  function confirmLogout() {
    setShowConfirmModal(false)
    auth.logout();
  }

  return (
    <ul className="nav-links login" >
      <Modal 
        show={showConfirmModal}
        onCancel={cancelLogout}
        header="Are you sure?" 
        footerClass="logout__modal-actions" 
        footer={
          <React.Fragment>
            <Button variant="contained" onClick={cancelLogout} > Cancel </Button>
            <Button variant="contained" onClick={confirmLogout} > Logout </Button>
          </React.Fragment>
        }
      >
       <p>Are you sure you want to logout?</p>
      </Modal>

      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login" exact> Log In </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Button onClick={showWarning}> Log Out </Button>
        </li>
      )}
    </ul>
  );
};

export default Login;
