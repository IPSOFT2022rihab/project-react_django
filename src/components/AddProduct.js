import React, {useEffect,useState} from "react";

function Ajouterproduit() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const[image,setImage]=useState(null);

     const handlesubmit = (e) => {
        console.log(image)
        const formdata=new FormData()
        formdata.append("name",name)  
        formdata.append("price",price)
        formdata.append("description",description)
        formdata.append("category",category)
        formdata.append("image",image)

         if (image === null) {
           } else {
           formdata.append("image",image)
                  }
           console.log(typeof image)
             e.preventDefault()
  
    fetch("http://127.0.0.1:8000/product/",
      {
        method: "POST",
    
        body: formdata
      }).then(() => {
           console.log(formdata);
         
        }).catch((e) => {
  
          alert('error!!')
        })
    }
   
    return(
        <div>
           <h1>add product</h1>
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
                <button className="btn btn-primary btn-block"  type="submit" onClick={handlesubmit}>Add Product</button>

            </div>



           </div>
        </div>

    );
      };
export default Ajouterproduit;