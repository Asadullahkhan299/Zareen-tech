import React, { useState } from 'react'
import noteContext from './NoteContext'
const NoteState = (props) => {


    const [addingclass, setAddingclass] = useState('menu')
    return (
        <noteContext.Provider value={[addingclass, setAddingclass]}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
