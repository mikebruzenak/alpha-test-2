import React, { useEffect, useReducer } from 'react'
import styled from "styled-components"
import RoomPanel from './components/RoomPanel'
import { rooms, roomsReducer } from './reducers/roomsReducer.jsx'

const Page = styled.div`
  background: white;
`
const RoomsPanel = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
margin: 20px 20px 0px 20px;
`

const Submit = styled.button`
  background: #c0c0c0;
  border-style: outset;
  width: 50px;
  margin: 0px 30px;
`
const Form = styled.form`
display: grid;
`

const App = () => {
  let storedRooms = JSON.parse(window.localStorage.getItem('hiltonRooms'))
  const [state, dispatch] = useReducer(roomsReducer, storedRooms || rooms)

  const handleSubmit = () => {
    window.localStorage.setItem('hiltonRooms', JSON.stringify(state))
  }

  return (
    <Page>
      <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <RoomsPanel>
          <RoomPanel room={state[0]} dispatch={dispatch} />
          <RoomPanel room={state[1]} dispatch={dispatch} />
          <RoomPanel room={state[2]} dispatch={dispatch} />
          <RoomPanel room={state[3]} dispatch={dispatch} />
        </RoomsPanel>
        <Submit>Submit</Submit>
      </Form>
    </Page>
  )
}

export default App
