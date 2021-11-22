import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
import axios from 'axios';



const AddService = () => {

       const { register, handleSubmit, reset } = useForm();
       const onSubmit = data =>{
       console.log(data);
      axios.post('https://pure-headland-02528.herokuapp.com/watches', data)
      .then(res => {
          if (res.data.insertedId) {
              alert('service added successfully');
              reset();
          }
      })



       } 



    return (
        <div className="divAddService1">
            <h1 className="text-center">ADD PRODUCT</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Brand Name" {...register("name")} /> <br/>
                              <input placeholder="Image Link "  {...register("image")} /> <br/>
                              <textarea placeholder="Product Description"  {...register("description")} /> <br/>
                              <input placeholder="Product Price"  type="number"  {...register("price")} /> <br/>
                              <input type="submit" />
            
           
    </form>
        </div>
    );
};

export default AddService;