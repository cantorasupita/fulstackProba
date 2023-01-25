import React from 'react'
import styles from './Search.module.scss';

import debounce from 'lodash.debounce'

//redux
import {useDispatch} from 'react-redux';

import { setSearchValue } from '../../redux/slices/filterSlice';




const Search:React.FC = ()  => {

    //dispatch
    const dispatch = useDispatch()
    //input 
    const inputRef= React.useRef(null)
    //state
    const [value, setValue] = React.useState('')


    //debounce---------------------------------
    const updateSearchValue = React.useCallback(
        debounce((str)=>{
            console.log('HELLO')
            setValue(str)
            dispatch(setSearchValue(str))
        }, 1000)

    ,[])

    //change input-------------------------------
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }
        
    //clear input----------------------------------
    const onClickClear = (e: React.MouseEventHandler<HTMLSpanElement>) =>{
        setValue('')
        dispatch(setSearchValue(value))
            inputRef.current?.focus()
    }

    return(
        <div className={styles.root}> 

            <svg  className={styles.icon} enableBackground="new 0 0 32 32" id="EditableLine" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"></circle>
                <line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366">
                </line>
            </svg>

            <input 
                ref={inputRef} 
                onChange={e=>onChangeInput(e)} 
                className={styles.input} 
                placeholder='Поиск пиццы...'
                value={value}/>

           {value &&  <span onClick={onClickClear} className={styles.clearInput}>X</span> }

        </div>
      
    )
  } 



  export default Search;