import React from 'react';
import { Posts } from './components/Posts';
// import './styles.css';

export default class App extends React.Component {
    state = {
        posts: [
            { id: 1, name: 'JS' },
            { id: 2, name: 'React' },
            { id: 3, name: 'Html' },
        ]
    };


    deletePost = (id) => {
        this.setState({ posts: this.state.posts.filter(f => f.id !== id) })
    }

    render() {
        const { posts } = this.state
        return (
            <div className="App">
                <Posts posts={posts} cb={this.deletePost} />
            </div>
        );
    }
}



















// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     posts: [],
//     loading: true,
//     comments: [],
//   }

//   componentDidMount() {
//     console.log('componentDidMount(компонента вмонтировалась)')
//     fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then(responce => responce.json())
// 	.then(data=> this.setState({posts:data,loading:false}))

// 	this.timerId = setInterval(()=>{
// 		fetch('https://jsonplaceholder.typicode.com/comments')
// 		.then(responce => responce.json())
// 		.then(data=> this.setState({comments:data}))
// 	},3000)
//   }

//   componentDidUpdate() {
//     console.log('componentDiUpdate(компонента обновилась)')
//   }

//   componentWillUnmount() {
// 	console.log('componentWillUnmount(компонента размонтировалась)')
// 	clearInterval(this.timerId)
//   }

//   render() {
//     return (
//       <div className="App">
//        {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length} was loaded</h3>}
//       </div>
//     )
//   }
// }

// export default App
