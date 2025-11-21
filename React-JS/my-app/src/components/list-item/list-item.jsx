import React from 'react';

const Li_Component = (props) => {
    console.log('Li Props: ', props);
    const { liData, delHandler, liKey } = props;
    return (
        <li>
            {liData}
            <button onClick={() => delHandler(liKey)}> Delete Item </button>
            {/* <button onClick={() => editItem(index, item)}> Edit Item </button> */}
        </li>
    )
}

export default Li_Component;