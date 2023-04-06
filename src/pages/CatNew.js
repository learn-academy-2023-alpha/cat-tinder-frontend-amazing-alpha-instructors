import React, {useState} from 'react'
import {Form, FormGroup, FormText, Col, Label, Input, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const CatNew = ({createCat}) => {
  // useNavigate is a React hook that allows us to handle redirects with ease
  // Store useNavigate to a variable that will be called on after information from form has been passed to App.js
  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    // Use the setNewCat method to update state
    // Make a copy of the current state with the spread operator
    // e.target.name tells us which key we are updating based on the name input attribute
    // set our user value input to e.target.value using that key.
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createCat(newCat)
    // Use our navigate variable to redirect user to cat index
    navigate("/catindex")
  }

  return (
    <>
      <h1 className='new-header'>Join The Clowder of Cats!</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Cat Name
          </Label>
            <Input
              name="name"
              placeholder="What is your name"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>


        <FormGroup>
          <Label for="age">
            Cat Age
          </Label>
            <Input
              name="age"
              placeholder="What is your age?"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
            <Input
              name="enjoys"
              placeholder="What do you enjoy?"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>


        <FormGroup>
          <Label for="image">
            Image URL
          </Label>
            <Input
              name="image"
              type="url"
              onChange={handleChange}
            />
        </FormGroup>
    
        <Button onClick={handleSubmit} name="submit">
              Submit
        </Button>
      </Form>
    </>
  )
}

export default CatNew