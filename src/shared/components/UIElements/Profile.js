import React, {useContext, useState, useEffect} from 'react'
import './Profile.css';
import { useHttpClient } from '../hooks/http-hook';
import { AuthContext } from '../../context/auth-context';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Profile = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [BranchImage, setBranchImage] = useState('');
  const [BranchName, setBranchName] = useState('');
  const [BranchAddress, setBranchAddress] = useState('');
  const [BranchPhone, setBranchPhone] = useState('');
  const [BranchEmail, setBranchEmail] = useState('');
  const [showOrderAddModal, setShowOrderAddModal] = useState(true);

  useEffect(() => {
    const fetchBranchInfo = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/branches/user/${auth.userId}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        console.log()
        setBranchImage(responseData.userBranch.hq.image)
        setBranchName(responseData.userBranch.branch.name)
        setBranchAddress(responseData.userBranch.branch.address)
        setBranchPhone(responseData.userBranch.branch.telephone)
        setBranchEmail(responseData.userBranch.branch.email)
      } catch (err) {}
    };
    fetchBranchInfo();
  }, [sendRequest, auth.token])


  return (
    <div className="profile_section">
      <div className="hq_logo">  
        <img
          style={{width: "250px", height: "250px"}}
          alt="organisation logo"
          src={`http://localhost:5000/${BranchImage}`}
          > 
        </img>
      </div>
      <div className="info">
        <Table>
          <TableBody>
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
          </TableBody>
        </Table>

        


      </div>
    </div>
  );
};

export default Profile;
