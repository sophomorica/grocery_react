import React from "react"

class ThingForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {name: ""}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleSubmit(e){
    e.preventDefault()
    this.props.addItem(this.state.name)

    this.setState({name: "",})
  } 
  handleChange(e){
    this.setState({name: e.target.value})
  }
  render(){
    return(
     <form onSubmit = {this.handleSubmit}>

       <input
       required
       placeholder = "What Else to Buy?"
       //value = {this.state.name}
       name = "name"
       onChange = {this.handleChange}/>
     </form>
    )
  }

}
export default ThingForm