import React from 'react'

export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: 'hello' }
  }

  handleChange() {
    console.log('changed')
  }

  render() {
    return ( 
      <div className = "commentBox" >
      About 
      </div>
    )
  }
}
