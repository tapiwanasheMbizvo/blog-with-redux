import React from 'react'
import  PropTypes from 'prop-types'

import  {connect} from 'react-redux'
import {fetchCategories} from "../actions/categoryActions";

class  Categories extends React.Component{

    componentWillMount(){

        this.props.fetchCategories();
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.newCategory){

            this.props.categories.unshift(nextProps.newCategory);

        }

    }

    render(){

        const  categories = this.props.categories.map(category=>(

            <li key={category.id}>

                {category.category_name}
            </li>
        ));

        return(
            <div>
                <h3>Categories</h3>
                <ul>
                    {categories}
                </ul>
            </div>

        )
    }


}

Categories.propTypes = {

    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    newCategory: PropTypes.object
};

const mapStateToProps = state =>({

   categories: state.categories.categories,
   newCategory: state.categories.category

});

export  default connect(mapStateToProps, {fetchCategories})(Categories);