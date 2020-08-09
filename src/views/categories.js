import React from 'react'
import  PropTypes from 'prop-types'
import  {connect} from 'react-redux'


import {fetchCategories} from "../actions/categoryActions";
import {fetchPosts} from "../actions/postActions";
import CategoryForm from "../components/categories/categoryForm";


class  Categories extends React.Component{

    componentWillMount(){

        this.props.fetchCategories();
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.newCategory){

            this.props.categories.unshift(nextProps.newCategory);

        }

    }

    render(){

        const  categories = this.props.categories.map(category=>(

            <li key={category.id}>

                {category.category_name} {category.id}
            </li>
        ));

        const  posts = this.props.posts.map(post=>(

            <li key={post.id}>

                {post.title}
            </li>
        ));
        return(


            <div>
                <h3>Categories</h3>
                <ol>
                    {categories}
                </ol>

                <h3>Posts</h3>
                <ol>
                    {posts}
                </ol>
               <CategoryForm/>

            </div>


        )
    }


}

Categories.propTypes = {

    fetchCategories: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    newCategory: PropTypes.object
};

const mapStateToProps = state =>({

   categories: state.categories.categories,
   posts: state.posts.posts,
   newCategory: state.categories.category

});

export  default connect(mapStateToProps, {fetchCategories, fetchPosts})(Categories);