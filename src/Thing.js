import React from "react"

const Thing = (props) =>(
  <li style = {props.bought ? {...styles.thing, ...styles.bought}: styles.thing } onClick={() => props.thingClick(props.id)}
  >
    {props.name}
  </li>
)
const styles = {
  thing: {cursor: "pointer"},
  bought: {color: "grey", textDecoration: "line-through"}

}

export default Thing