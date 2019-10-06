

export const rooms = [
    {
        index: 0,
        id: 'Room 1',
        adults: 1,
        children: 0,
        checked: true
    },
    {
        index: 1,
        id: 'Room 2',
        adults: 1,
        children: 0,
        checked: false
    },
    {
        index: 2,
        id: 'Room 3',
        adults: 1,
        children: 0,
        checked: false
    },
    {
        index: 3,
        id: 'Room 4',
        adults: 1,
        children: 0,
        checked: false
    },
]


const roomOrdering = (rooms) => {
    let uncheck = false
    rooms.forEach((room, i) => {
        uncheck && (rooms[i].checked = false)
        if (!room.checked) {
            uncheck = true
            rooms[i].adults = '1'
            rooms[i].children = '0'
        }
    })
    return rooms
}

export const roomsReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_ROOM':
            let newRooms = Object.assign([...state], { [action.index]: { ...state[action.index], checked: action.checked } })
            newRooms = roomOrdering(newRooms)
            return newRooms
        case 'SET_ADULTS':
            return Object.assign([...state], { [action.index]: { ...state[action.index], adults: action.adults } })
        case 'SET_CHILDREN':
            return Object.assign([...state], { [action.index]: { ...state[action.index], children: action.children } })
        default:
            return state
    }
}

export const setAdults = (room_index, adults) => ({ type: 'SET_ADULTS', index: room_index, adults: adults })
export const setChildren = (room_index, children) => ({ type: 'SET_CHILDREN', index: room_index, children: children })
export const selectRoom = (room_index, checked) => ({ type: 'SELECT_ROOM', index: room_index, checked: checked })
