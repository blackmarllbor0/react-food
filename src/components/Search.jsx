import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

import { searchFilteredCatalog } from "../reducers/mainReducer";

export default function Serach({ method }) {
    const [value, setValue] = useState('');

    const handleKey = event => {
        if (event.key === 'Enter') {
            HandleSubmit();
        }
    };
    
    const HandleSubmit = () => {
        method(value);
    };
    
    return (
        <div className="row">
            <div className="input-field col s12">
                <input 
                    type="search"
                    id='search-field'
                    placeholder="search"
                    onKeyDown={event => handleKey(event)}
                    onChange={event => setValue(event.target.value)}
                    value={value}
                />
                <button
                    className="btn deep-purple darken-3"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }}
                    onClick={HandleSubmit}
                > Search </button>
            </div>
        </div>
    );
}