import React, {useContext, useState, useEffect} from 'react'
import './Profile.css';
import { useHttpClient } from '../hooks/http-hook';
import { AuthContext } from '../../context/auth-context';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ErrorModal from './ErrorModal';
import LoadingSpinner from './LoadingSpinner';

const Profile = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [BranchImage, setBranchImage] = useState('');
  const [BranchName, setBranchName] = useState('');
  const [BranchAddress, setBranchAddress] = useState('');
  const [BranchPhone, setBranchPhone] = useState('');
  const [BranchEmail, setBranchEmail] = useState('');

  useEffect(() => {
    const fetchBranchInfo = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/branches/user/${auth.userId}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setBranchImage(responseData.userBranch.hq.image)
        setBranchName(responseData.userBranch.branch.name)
        setBranchAddress(responseData.userBranch.branch.address)
        setBranchPhone(responseData.userBranch.branch.telephone)
        setBranchEmail(responseData.userBranch.branch.email)
      } catch (err) {}
    };
    fetchBranchInfo();
  }, [sendRequest, auth.token, auth.userId])


  return (
    <div className="profile_section">
      <div className="hq_logo">  
        {isLoading ? (
          <div style={{width: '250px', height: '250px', display: "grid", placeItems: "center"}}>
            <LoadingSpinner />
          </div>
          ) : (
          <img
            style={{width: "250px", height: "250px"}}
            alt="organisation logo"
            src={BranchImage}
            > 
          </img>
          )}
      </div>
      <div className="info">
        <ErrorModal header="An Error Occured" error={error} onClear={clearError} />
          <Table>
            <TableBody>
            {isLoading ? (
              <div style={{width: '30rem', height: '15rem', display: "grid", placeItems: "center"}}>
                <LoadingSpinner />
              </div>
             ) : (
              <React.Fragment>
                <TableRow>
                  <TableCell align="left">Name: </TableCell>
                  <TableCell align="left">{BranchName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Address: </TableCell>
                  <TableCell align="left">{BranchAddress}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Telephone: </TableCell>
                  <TableCell align="left">{BranchPhone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Email: </TableCell>
                  <TableCell align="left">{BranchEmail}</TableCell>
                </TableRow>
              </React.Fragment>
             )}
            </TableBody>
          </Table>
      </div>
    </div>
  );
};

export default Profile;
