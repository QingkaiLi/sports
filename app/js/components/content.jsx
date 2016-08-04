import React from 'react'

export default class CommentBox extends React.Component{
	constructor(props){
		super(props)
		this.state={message:'hello'}
	}

	handleChange(){
		console.log('changed')
	}

  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
         <input type="text" onChange={this.handleChange} />
      </div>
     
    )
  }
}
