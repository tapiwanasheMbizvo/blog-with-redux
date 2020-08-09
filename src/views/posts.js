import React from 'react'
import  PropTypes from 'prop-types'
import  {connect} from 'react-redux'


import {fetchPosts} from "../actions/postActions";
import PostForm from "../components/posts/postForm";


class  Posts extends React.Component{

    componentWillMount(){

        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.newPost){

            this.props.posts.unshift(nextProps.newPost);

        }

    }

    render(){

        const  posts = this.props.posts.map(post=>(

            <li key={post.id}>

                {post.title}
            </li>
        ));

        return(


            <div>
                <h3>Posts</h3>
                <ul>
                    {posts}
                </ul>
                <PostForm/>

            </div>


        )
    }


}

Posts.propTypes = {

    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state =>({

    posts: state.posts.posts,
    newPost: state.posts.post

});

export  default connect(mapStateToProps, {fetchPosts})(Posts);