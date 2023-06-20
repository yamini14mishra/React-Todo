// rafce
import React, { useState } from 'react'
import './todo.css';

const Todos = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItom = () => {
        if(!inputData){
            alert('Enter Text');
        }else if(inputData && !toggleSubmit){
            setItems(
                items.map((elem) => {
                    if(elem.id === isEditItem)
                    return{...elem, name:inputData
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null);
        }else{
            const allInputData = {id: new Date().getTime().toString(), name:inputData}
            setItems([...items, allInputData]);
            setInputData("")
        }   
    }
    const deleteItem = (index) => {
        const updatedItems = items.filter((elem) => {
            return index !== elem.id;
        })
        setItems(updatedItems);
    }
    const removeAll = () => {
        setItems([]);
    }
    const editItem = (id) => {
        let newEditItems = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItems);
        setToggleSubmit(false);
        setInputData(newEditItems.name);
        setIsEditItem(id);
    }
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>

            <figure >
                <img className='fig' src="https://vaibhavsharma1998.github.io/todo-list/static/media/Logo.3bee1e3a6c4ebdf1f139.png" alt='2022 Todo List Logo' />
                <figcaption>Add Your List Here ✌</figcaption>
            </figure>

            <div className='add-items'>
                <input className='input-cls' type='text' placeholder='✍ Add Items here...' value={inputData} onChange={(e)=>setInputData(e.target.value)} />
                {toggleSubmit ? <i className="fa fa-plus add-btn" title='Add Items' onClick={addItom} ></i> : 
                    <i className='far fa-edit add-btn' title='Update Items' onClick={addItom}></i>}
            </div>

            <div className='showItems'>
                {
                    items.map((elem) => {
                        return(
                            <div className='eachItem' key={elem.id}>
                                <h3>{elem.name}</h3>
                                <div className='todo-btn'>
                                    <i className='far fa-edit add-btn' title='Edit Items' onClick={()=>editItem(elem.id)}></i>
                                    <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={()=>deleteItem(elem.id)}></i>  
                                </div>
                            </div>
                        )
                    })
                }  
            </div>

            <div className='showItems'>
                <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                    <span>CHECK LIST</span>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todos;
