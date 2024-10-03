import React, { Component } from 'react'
import axios from 'axios'

import './PostList.css'
import { Card } from 'react-bootstrap'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: props.posts
        }
    }

    render() {
        const { posts } = this.props
        return (
            <div className='contact-container'>
                <h1>Contact List</h1>{
                    posts.map(post => (<Card key={post.id} className='contact-card p-4'>
                        <span>{post.id}</span>
                        <div className='contact-card__details'>
                            <h5>{post.first_name} {post.last_name}</h5>
                            <div>
                                <p>Email: {post.emailId}</p>
                                <p>Age: {post.age}</p>
                                <p>Gender: {post.gender}</p>
                                <p>Mobile: {post.mobilenumber}</p>
                                <p>PAN: {post.pan_no}</p>
                                <p>Aadhaar No: {post.adhaar_no}</p>
                                <p>Status: {String(post.status)}</p>
                            </div>
                        </div>
                        <button  onClick={() => this.props.handleEdit(post)}>edit</button>
                        <button onClick={() => this.props.handleDelete(post.id)}>delete</button>
                    </Card>))
                }
            </div>
        )
    }
}
export default PostList