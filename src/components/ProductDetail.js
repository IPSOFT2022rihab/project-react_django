import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetail = () => {

const [product, setProduct] = useState([])

const {id} = useParams();


useEffect(() => {
    getSingleProduct();
},[])


const getSingleProduct = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`)
  console.log(data);
  setProduct(data);
  

}

    return (
        <div>
            <h2>Detail of Single Product </h2>
            <hr></hr>
            <div className="full-student-detail">
                <img src={product.image} height="300" width="500"/>
                <div className="student-detail">
                    <p>{product.id}</p>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <Link className='btn btn-primary m-2' to={`/${product.id}/update`}>Update</Link>
                   

                </div> 
               
            </div>
           
          
        </div>
    );
};

export default ProductDetail;