import React from 'react'
import { useState ,useRef} from 'react'

const ToDo = () => {
    const [text,setText] = useState('');
    const [items,setItems] = useState([]);
    const inputRef = useRef(null)

    function handleChange(e) {

        setText(e.target.value)
    

    }

  
    function handleClick(e) {

        setItems(prevState=>[...prevState,text])
        setText('');
        inputRef.current.focus();

    }

    const listItems = items.map((item,index)=> {
        return <h4 key={index} className='items'>
            {item}
        </h4>
    })

  return (
    <div className='list'>

    <input 
        type="text" value={text} 
        placeholder="Enter Text" 
        onChange={handleChange} 
        className='list-input'
        ref={inputRef}
        />
    <button onClick={handleClick} className='list-button'> Add Item To List </button>
    <div className='list-items'>{
        listItems
    }</div>
    
    </div>
  )
}

export default ToDo