import React from 'react';
import  {connect} from 'react-redux';
import  PropTypes from 'prop-types';

import  {

    Button,
    Form,
    Label,
    Input

} from  'reactstrap'

import  {addPost} from "../../actions/postActions";

class PostForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            body:'',
            user:{
                id:''
            },
            topic:{

                id:''
            }

        };

        this.onChange = this.onChange.bind(this);
        this.sendData= this.sendData.bind(this);
    }

    onChange(e){

        this.setState({[e.target.name]: e.target.value})
    }
    sendData(e){

        e.preventDefault();

        const postData= {
            title:this.state.title,
            body:this.state.body,
            user:{
                id:2
            },
            topic:{
                id:9
            }

        };

        this.props.addPost(postData);
    }


    render(){
        return(

            <div className={"container"}>
                <div className={"col-sm-6"}>
                    <Form>

                        <Label>Title</Label>
                        <Input
                            name={"title"}
                            type={"text"}
                            value={this.state.title}
                            onChange={this.onChange}
                            placeholder={"some title"}
                        />
                        <Label>Body</Label>
                        <Input
                            name={"body"}
                            type={"textarea"}
                            value={this.state.body}
                            onChange={this.onChange}
                            placeholder={"some body"}

                        />
                        <br/>
                        <Button onClick={this.sendData} color={"primary"} block>Add Post</Button>

                    </Form>
                </div>
            </div>


        )

    }


}

PostForm.propTypes={
    addPost: PropTypes.func.isRequired
};

export  default connect(null, {addPost})(PostForm);
