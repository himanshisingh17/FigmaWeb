import React, {Component} from 'react';
import axios from 'axios';
import './PostForm.css';
import PostList from './PostList';

class PostForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         post: {},
         posts: []
      }
      this.fetchList = this.fetchList.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount(){
        this.fetchList()
    }

    fetchList() {
        axios.get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile')
        .then(response =>{
            this.setState({
                posts:response.data
            })
            console.log(response.data)
        })
    }

    handleDelete(id) {
        axios.delete(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`)
            .then(() => this.fetchList())
    }
    
    handleChange=(e)=>{
        console.log(e)
        const post = this.state.post
        if (e.target.name === 'status') {
            post[e.target.name] = e.target.checked
        }
        else {
            post[e.target.name] = e.target.value
        }
        this.setState({
            post: post
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const body = this.state.post
        if (body.id) {
            // if id already exists, make a PUT request to edit the item
            axios.put(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${body.id}`, body)
                .then(() => {
                    this.setState({
                        post: {}
                    })
                    this.fetchList()
                })
        }
        else {
            // if no id, make a POST request to create the item
            axios.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', body)
            .then(response =>{
                console.log(response)
                this.fetchList()
            })
        }
    }

    handleEdit(post) {
        this.setState({
            post: {...post}
        })
        document.querySelector('#contact-form').scrollIntoView()
    }

    render(){
        const{first_name, last_name, emailId,age, mobilenumber, pan_no, adhaar_no, status, gender} = this.state.post
        return(
            <div id='contact-form' class="container">
                <form onSubmit={this.handleSubmit}>
                {/* <div class="form-box">
                        <label>CreatedAt:</label>
                        <input
                         type='date'
                         name='createdAt'
                         value={createdAt}
                         onChange={this.handleChange}
                         ></input>
                    </div> */}

                    <div class="form-box">
                        <label>First Name:</label>
                        <input
                         type='text'
                         name='first_name'
                         value={first_name}
                         onChange={this.handleChange}
                         ></input>
                    </div>
                    
                    <div class="form-box">
                        <label>Last Name:</label>
                        <input
                         type='text'
                         name='last_name'
                         value={last_name}
                         onChange={this.handleChange}
                         ></input>
                    </div>
                    <div class="form-box">
                        <label>Email-Id:</label>
                        <input
                         type='email'
                         name='emailId'
                         value={emailId}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Age:</label>
                        <input
                         type='number'
                         name='age'
                         value={age}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Gender:</label>
                        <input
                         type='radio'
                         name='gender'
                         value='Male'
                         onChange={this.handleChange}
                         checked={gender === 'Male'}
                         ></input><label>Male</label>
                         <input
                         type='radio'
                         name='gender'
                         value='Female'
                         onChange={this.handleChange}
                         checked={gender === 'Female'}
                         ></input><label>Female</label>
                    </div>
                    <div class="form-box">
                        <label>Mobile Number:</label>
                        <input
                         type='number'
                         name='mobilenumber'
                         value={mobilenumber}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Pan Number:</label>
                        <input
                         type='text'
                         name='pan_no'
                         value={pan_no}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Adhaar Number:</label>
                        <input
                         type='number'
                         name='adhaar_no'
                         value={adhaar_no}
                         onChange={this.handleChange}
                         ></input>
                    </div>    

                    <div className="form-box">
                    <input type="checkbox" id="status" name="status" checked={status} onChange={this.handleChange} />
                    <label for="status">Status</label>
                    </div> 
{/* 
                    <div class="form-box">
                        <label>Id:</label>
                        <input
                         type='text'
                         name='id'
                         value={id}
                         onChange={this.handleChange}
                         ></input>
                    </div> */}

                    <div>
                        <button type='submit'>Submit</button>
                    </div>

                </form>
                    <PostList posts={this.state.posts} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />

            </div>

        )
    }
}
export default PostForm