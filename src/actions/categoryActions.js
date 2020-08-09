import {FETCH_CATEGORIES, ADD_CATEGORY} from "./types";


export  const  fetchCategories=()=>dispatch=>{


    fetch('http://localhost:8080/categories')
        .then(res=> res.json())
        .then(categories =>dispatch({


            type: FETCH_CATEGORIES,
            payload:categories
        }));

};


export  const  addCategory = (categoryData)=>dispatch=>{

    fetch('http://localhost:8080/categories', {

        method: 'POST',
        headers:{
            'content-type': 'Application/json'
        },
        body: JSON.stringify(categoryData)

    }).then(res => res.json())
        .then(category=> dispatch({

            type:ADD_CATEGORY,
            payload:category
        }))



};