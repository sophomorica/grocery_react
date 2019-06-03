import React from 'react'
import Thing from "./Thing"


const List = (props) => {
  return(
  <div>
    <h1>{props.name}</h1>
    <ul>
      {props.items.map( item => <Thing key ={item.id}{...item} thingClick={props.thingClick}/>)}
    </ul>
  </div>
  )
}


export default List;