import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'
import axios from 'axios';



const AddReview = () => {

       const { register, handleSubmit, reset } = useForm();
       const onSubmit = data =>{
       console.log(data);
      axios.post('http://localhost:5000/reviews', data)
      .then(res => {
          if (res.data.insertedId) {
              alert('Review added successfully');
              reset();
          }
      })



       } 



    return (
        <div className="divAddReview1">
            <h1 className="text-center">ADD REVIEW</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                               <input placeholder="Put Landscape image link "  {...register("image")} /> <br/>
                              <input placeholder="Your Name" {...register("name")} /> <br/>
                              <textarea placeholder="Review"  {...register("description")} /> <br/>
                              <input placeholder="type a number 1 - 5"  type="number"  {...register("star")} /> <br/>
                              <input type="submit" />
            
           
    </form>
        </div>
    );
};

export default AddReview;