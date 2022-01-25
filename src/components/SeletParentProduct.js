import React, { useEffect, useState, useRef } from 'react';

import AsyncSelect from 'react-select/async';

function SeletParentProduct(props) {

    const { onChangeSelect } = props;

    const [selectedParent, setSelectedParent] = useState([]);

    const changeParent = (selectParent) => {
        setSelectedParent(selectParent);
        onChangeSelect(selectParent.value);
    }

    const loadOptions = async (inputText, callback) => {
        const response = await fetch(`http://localhost:5000/product?search=${inputText}`)
        const json = await response.json();


        callback(json.data.map(i => (
            { 
                label: <div><img src={i.image} alt="" width="20px" /> <label>{i.name}</label> </div>,
                value: i.id  
            }
        )))
    }

    return (

        <AsyncSelect

          value={selectedParent}
          onChange={changeParent}
          placeholder={'type something...'}
          loadOptions={loadOptions}

        />
    );
}

export default SeletParentProduct;
