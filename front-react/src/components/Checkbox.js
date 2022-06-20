import React from 'react'

export default function Checkbox(props) {
    //console.log(props.choice.id);
    let id = props.choice.id;
    let value = props.choice.context;
    ///console.log(props.choice.context);
  return (
    <div>
        <input type="checkbox" id={id} name={id} value={value} /> {" "}
        <label for={id}> { value}</label><br/>
    </div>
  )
}
