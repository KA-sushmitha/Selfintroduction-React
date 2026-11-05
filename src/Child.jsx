import React from 'react'

export default function Child(props) {
  return (
    <div>
        <h2>User Details</h2>
        <h5>name:{props.name}</h5>
        <h5>age:{props.age}</h5>
        <h5>city:{props.city}</h5>
        <h5>Email:{props.Email}</h5>
        <h5>PhoneNO:{props.Phoneno}</h5>
    </div>
  )
}
