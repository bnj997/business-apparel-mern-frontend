import React, {useState, useEffect, useContext} from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import ItemCard from '../UIElements/ItemCard'
import { Button, TextField } from '@material-ui/core';
import { useHttpClient } from '../../shared/components/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { useSort } from '../utils/sorting';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const ClientCatalogue = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { sortNum, sortString, filterGarments } = useSort();
  const [ baseGarments, setBaseGarments ] = useState([]);
  const [ garmentsToShow, setGarmentsToShow ] = useState([]);
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
        setBaseGarments(responseData.garments)
      } catch (err) {}
    };
    fetchGarmentsForUser();
  }, [auth.userId, auth.token, sendRequest])

  
  useEffect(() => {
    setGarmentsToShow([...baseGarments])
  }, [baseGarments])

    

  const [cartCopy, setCartCopy] = useState([]);


  const addToCart = (item) => {  
    let localCart = localStorage.getItem(auth.userId);
    localCart = JSON.parse(localCart)
    let cartTemp = [...localCart];

    let {id, size, colour} = item;
    
    let existingItem = cartTemp.find(cartItem => cartItem.id === id  && cartItem.size === size && cartItem.colour === colour);
    
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
    <Dashboard user="client" onAdd={cartCopy}>
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Your Catalogue</h1> 
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
            <Button color="primary" onClick={() => setGarmentsToShow([...baseGarments])}>
              Reset to default
            </Button>
            <Button color="primary" onClick={() => setGarmentsToShow([...sortString(garmentsToShow, "name")])}>
              Sort by Name
            </Button>
            <Button color="primary" onClick={() => setGarmentsToShow([...sortString(garmentsToShow, "category")])}>
              Sort by Category
            </Button>
            <Button color="primary" onClick={() => setGarmentsToShow([...sortNum(garmentsToShow)])}>
              Sort by Price
            </Button>
          </div>
          <TextField 
            style={{verticalAlign: "baseline", backgroundColor: "white"}} 
            id="standard-basic"
            value ={filter}
            onChange={(e) => {
              setFilter(e.target.value)
              setGarmentsToShow([...filterGarments(baseGarments, e.target.value )])
            }}
            variant="outlined" 
            label="Search" 
          />
        </div>
      </div>
     
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <ErrorModal header="An Error Occured" error={error} onClear={clearError} />
        {isLoading ? (
          <div style={{placeItems: "center"}}>
            <LoadingSpinner />
          </div>
        ) : (
          garmentsToShow.length > 0 || isLoading ? ( 
            garmentsToShow.map((garments, index) => {
              return (
                <ItemCard
                  key={index}
                  image={garments.image}
                  id={garments.id}
                  name={garments.name}
                  category={garments.category}
                  styleNum={garments.styleNum}
                  price={garments.price}
                  colours={garments.colours}
                  sizes={garments.sizes}
                  onAdd={addToCart}
                />
              )
              }
            )
          ) : (
            <h2>Search returned no results. Please adjust filter.</h2>
          )
        )}
      </div>
    </Dashboard>
  );
}

export default ClientCatalogue;