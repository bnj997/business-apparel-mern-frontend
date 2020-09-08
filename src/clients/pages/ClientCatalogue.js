import React, {useState, useEffect, useContext, useRef} from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import ItemCard from '../UIElements/ItemCard'
import { Button, TextField } from '@material-ui/core';
import { useHttpClient } from '../../shared/components/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { useSort } from '../utils/sorting';

const ClientCatalogue = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { sortNum, sortString, filterGarments } = useSort();
  const [ baseGarments, setBaseGarments ] = useState([]);
  const [ Garments, setGarments ] = useState([]);
  const [ filter, setFilter ] = useState("");
  
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
        setBaseGarments(sortString(responseData.garments, "name"))
      } catch (err) {}
    };
    fetchGarmentsForUser();
  }, [auth.userId, auth.token])

  const [ garmentToAdd, setGarmentToAdd ] = useState({});
  const [cartCopy, setCartCopy] = useState([]);

  useEffect(() => {
    let localCart = localStorage.getItem(auth.userId);
    localCart = JSON.parse(localCart);
    if (localCart) 
      setCartCopy(localCart)
  }, []) 


  const addToCart = (item) => {  
    //assuming we have an ID field in our item
    let cartTemp = [...cartCopy];

    let {id, size, colour} = item;
    
    
    //look for item in cart array
    let existingItem = cartTemp.find(cartItem => cartItem.id === id  && cartItem.size === size && cartItem.colour === colour);
    
    //if item already exists
    if (existingItem) {
      existingItem.quantity += item.quantity //update item
    } else { //if item doesn't exist, simply add it
      cartTemp.push(item)
    }
    
    //update app state
    setCartCopy(cartTemp)
    
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartTemp);
    localStorage.setItem(auth.userId, stringCart)
  }

  return (
    <Dashboard user="client" cart={cartCopy}>
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Your Catalogue</h1> 
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
            <Button color="primary" onClick={() => setGarments([...sortString(Garments, "name")])}>
              Sort by Name
            </Button>
            <Button color="primary" onClick={() => setGarments([...sortString(Garments, "category")])}>
              Sort by Category
            </Button>
            <Button color="primary" onClick={() => setGarments([...sortNum(Garments)])}>
              Sort by Price
            </Button>
          </div>
          <TextField 
            style={{verticalAlign: "baseline", backgroundColor: "white"}} 
            id="standard-basic"
            value ={filter}
            onChange={(e) => {
              setFilter(e.target.value)
              setGarments([...filterGarments(baseGarments, e.target.value )])
            }}
            variant="outlined" 
            label="Search" 
          />
        </div>
      </div>
     
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Garments.length > 0 || isLoading ? ( 
          Garments.map((function(garments) {
            return (
              <ItemCard
                image={garments.image}
                id={garments._id}
                name={garments.name}
                category={garments.category}
                styleNum={garments.styleNum}
                price={garments.price}
                colours={garments.colours}
                sizes={garments.sizes}
                onAdd={addToCart}
              />
            )
            })
          )
        ) : (
          <h2>Search returned no results. Please adjust filter.</h2>
        )}
      </div>
    </Dashboard>
  );
}

export default ClientCatalogue;