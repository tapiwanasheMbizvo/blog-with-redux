import  React from 'react'

import {connect} from 'react-redux'
import  PropTypes from 'prop-types'
import {
    Button, Form, Label, Input
} from 'reactstrap';
import {addCategory} from "../../actions/categoryActions";


class  CategoryForm extends  React.Component{

    constructor(props){

        super(props);
        this.state={
            category_name:'',
            category_desc:''


        };

        this.onChange= this.onChange.bind(this);
        this.sendData = this.sendData.bind(this);


    }
    onChange (e){
        this.setState({[ e.target.name]: e.target.value});
    }

    sendData(e){

        e.preventDefault();

        const categoryData= {

            category_name:this.state.category_name,
            category_desc:this.state.category_desc
        };

        this.props.addCategory(categoryData);
    }
    render(){

        return(


            <div className={"container"}>
                <div className={"col-sm-6"}>
                <Form>
                    <Label for="title">Title</Label>
                    <Input
                        type="text"
                        name="category_name"
                        id="title"

                        value={this.state.category_name}
                        onChange={this.onChange}
                        placeholder="with a placeholder"
                    />
                    <Label for="title">Description</Label>
                    <Input

                        type="textarea"
                        name="category_desc"
                        id="exampleText"
                        onChange={this.onChange}
                        value={this.state.category_desc}
                        placeholder={"enter description"}
                    />

                    <br/>

                    <Button onClick={this.sendData} color="primary"  block>Add Category</Button>
                </Form>
                </div>
            </div>
        )
    }

}

CategoryForm.propTypes= {
    addCategory: PropTypes.func.isRequired
}
export  default connect(null, {addCategory}) (CategoryForm);