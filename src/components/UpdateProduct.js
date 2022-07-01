import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Updateproduit() {
    
   
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const[image,setImage]=useState(null);

    const { id } = useParams();

    useEffect(() => {
        loadproduit();
    }, [])
    const UpdateProductinfo = () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('price',price)
        formField.append('description',description)
        formField.append('category',category)

        if(image !== null) {
          formField.append('image', image)
          
        }

        fetch("http://127.0.0.1:8000/product/" + id,
        {
          method: "PUT",
      
          body: formField
        }).then(() => {
             console.log(formField.data);
           
          }).catch((e) => {
    
            alert('error!!')
          })

        
    }

    let loadproduit = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/product/${id}`);
        console.log(result.data);
        setName(result.data.name);
        setPrice(result.data.price);
        setDescription(result.data.description);
        setCategory(result.data.category);
        setImage(result.data.image);
    
      
       }

    return(

      <div><h1>Update Product</h1>
      <div className="container">
            <div className="form-group">
                <div className="form-control">

                <input
              type="file"
              className="form-control form-control-lg"
              placeholder="Enter Your Image"
              name="image"
              
              onChange={(event)=>{setImage(event.target.files[0])}}
            />

                <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

              <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

             <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
             </div>
                <button className="btn btn-primary btn-block"  type="submit" onClick={UpdateProductinfo}>Update Product</button>

            </div>



           </div>

       </div>


    )

};
export default Updateproduit ;
