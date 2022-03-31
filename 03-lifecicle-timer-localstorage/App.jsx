import React from 'react';
// import './styles.css';

export default class App extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };

    componentDidMount() {
		console.log('componentDidMount(компонента вмонтировалась)');
		const userCount = localStorage.getItem('countValue');
		if (userCount){
			this.setState({count: +userCount})
		}
		
	}

    componentDidUpdate() {
		localStorage.setItem('countValue',this.state.count)
	}

    componentWillUnmount() {
		// console.log('componentDidMount(компонента размонтировалась)');
		// callBack()
		// const handleReset = () => {
		// 	this.setState({count:this.state.count = 0})
		// }
	}

	handleStart = () => {
		this.setState({isCounting:true})
		this.counterId = setInterval( () => {
		this.setState({count:this.state.count + 1})
		},1000)
	}

	handleStop = () => {
		this.setState({isCounting:false})
		clearInterval(this.counterId)
	}

	 handleReset = () => {
		this.setState({count:0,isCounting:false})
		clearInterval(this.counterId)
	}

    render() {
        return (
            <div className="App">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
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
