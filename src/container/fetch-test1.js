import React, { Component } from 'react';
import JsonTest from './json-test1';

class FetchApiTest1 extends Component {
    constructor (props) {
        super(props)
        this.state = { posts: [] };
    }

    componentDidMount() {
        let api = 'https://jsonplaceholder.typicode.com/posts';
        fetch(api).then( (res) => {
            return res.json();
            }).then( (data) => {
                //handle data
                // var posts = data.map( (current, index) => {
                //     return {
                //         id: index,
                //         title: current.title
                //     }
                // });
                this.setState( { posts : data } )
            }).then(function(data) {
                console.log(data);
             });
    }

    render() {
        return (
            <div>
            <JsonTest posts={ this.state.posts }/>
            </div>
        )
    }
}


export default FetchApiTest1;
