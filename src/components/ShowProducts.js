import React, {useState , useEffect} from "react";
import axios from 'axios' ;
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ShowProducts  = () =>{


    const [products , setProducts] = useState([])
    const getProducts = async () =>{
        
        const response = await axios.get('http://127.0.0.1:8000/product')
      
           setProducts(response.data)    
           //console.log(products.data)
    }

    useEffect( () =>{
        getProducts();} ,[] )
        const goToDetail = () => {
          alert("detail page")
      }

    return(
        <div className="products-card-info">
            
            {

                products.map((product) => (
                  
                        <Card className="m-2 rounded show-lg " style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={product.image} />
                          <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.category}</Card.Text>

                            <Link className="btn btn-primary mr-2" to={`/${product.id}`}>Full Detail</Link>

                          </Card.Body>
                        </Card>
                      
                    
                )
                )
            }
          
        </div>

    );
      };
export default ShowProducts;