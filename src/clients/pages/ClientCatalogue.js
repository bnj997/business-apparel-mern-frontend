import React, {useState, useEffect, useContext, useRef} from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import ItemCard from '../UIElements/ItemCard'
import { Button } from '@material-ui/core';
import { useHttpClient } from '../../shared/components/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { useSort } from '../utils/sorting';

const ClientCatalogue = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { sortNum, sortString } = useSort();

  const auth = useContext(AuthContext);

  const [ Garments, setGarments ] = useState([]);

  
  useEffect(() => {
    const fetchGarmentsForUser = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/garments/user/${auth.userId}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setGarments(sortString(responseData.garments, "name"))
      } catch (err) {}
    };
    fetchGarmentsForUser();
  }, [auth.userId, auth.token])


  return (
    <Dashboard user="client" >
      <h1>Your Catalogue</h1> 
      <Button onClick={() => setGarments([...sortString(Garments, "name")])}> Sort by Name</Button>
      <Button onClick={() => setGarments([...sortString(Garments, "category")])}> Sort by Category</Button> 
      <Button onClick={() => setGarments([...sortNum(Garments)])}> Sort by Price</Button> 


      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Garments.map((function(garments) {
          return (
            <ItemCard
              image={garments.image}
              name={garments.name}
              category={garments.category}
              styleNum={garments.styleNum}
              price={garments.price}
              colours={garments.colours}
              sizes={garments.sizes}
            />
          )
        }))}
      

      </div>
    </Dashboard>
  );
}

export default ClientCatalogue;