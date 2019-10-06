import React from 'react'
import styled from "styled-components"
import { setAdults, setChildren, selectRoom } from '../reducers/roomsReducer.jsx'

const RoomPanelDiv = styled.div`
display: grid;
align-items: stretch;
grid-template-rows: 30% auto;
grid-template-columns: 50% 50%;
height: 100px;
width: 110px;
margin: 10px;
background: ${props => props.checked ? 'white' : '#dbdbe3'};
padding: 0;
border-radius: 5px;
border: 2px solid ${props => props.checked ? '#e7e7e7' : '#c8cad8'};
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  background: ${props => props.checked ? 'white' : '#dbdbe3'};
  `

const CheckboxLabel = styled.div`
  margin: 0;
  padding 0px;
  margin-left: 10px;
  font-size: 10px;
`

const Select = styled.select`
  width: 36px;
  height: 15px;
  color: black;
  padding-left: 5px;
  font-size: 10px;
  border-top: 1px solid gray;
  margin: 5px 0 0 10px;
`

const RoomTitle = styled.div`
  background: ${props => props.checked ? '#e7e7e7' : '#c8cad8'};
  grid-area: 1 / 1 / span 1 / span 2;
  padding: 3px 0px 8px 10px;
  font-size: 12px;
  font-weight: bold;
  height: 50%;
  border-radius: 5px 5px 0 0;
  `

const roomChecked = (dispatch, room, checked) => {
    dispatch(selectRoom(room.index, checked))
    if (!checked) {
        dispatch(setAdults(room.index, '1'))
        dispatch(setChildren(room.index, '0'))
    }
}

const RoomPanel = (props) => {
    return (
        <RoomPanelDiv checked={props.room.checked}>
            <RoomTitle checked={props.room.checked}>
                {props.room.id !== 'Room 1' && <input type="checkbox"
                    checked={props.room.checked}
                    onChange={e => roomChecked(props.dispatch, props.room, e.target.checked)}
                />}
                {props.room.id}
            </RoomTitle>
            <SelectContainer checked={props.room.checked}>
                <CheckboxLabel>Adults</CheckboxLabel>
                <CheckboxLabel>(18+)</CheckboxLabel>
                <Select disabled={!props.room.checked} value={props.room.adults} onChange={e => props.dispatch(setAdults(props.room.index, e.target.value))}>
                    <option selected="selected">{props.room.adults}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </Select>
            </SelectContainer>
            <SelectContainer style={{ padding: '5px 10px 0px 0px' }} checked={props.room.checked} onChange={e => props.dispatch(setChildren(props.room.index, e.target.value))}>
                <CheckboxLabel>Children</CheckboxLabel>
                <CheckboxLabel>(0-17)</CheckboxLabel>
                <Select disabled={!props.room.checked} value={props.room.children}>
                    <option selected="selected">{props.room.children}</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </Select>
            </SelectContainer>
        </RoomPanelDiv>
    )
}

export default RoomPanel
