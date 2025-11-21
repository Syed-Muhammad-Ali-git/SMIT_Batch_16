// import React, { useState } from 'react';
// import POComponent from '../../components/po-component/po-component';

// const PerformanceOptimization = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1> Performance Optimization </h1>
//             <POComponent title="PO" />
//             <h2> Count: {count} </h2>
//             <button onClick={() => setCount(count + 1)}> Increament </button>
//         </div>
//     );
// };

// export default PerformanceOptimization;




















// import React, { useState, useMemo } from 'react';

// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Ahmed' },
//     { id: 3, name: 'Prince' },
//     { id: 4, name: 'Asad' },
//     { id: 5, name: 'Nick' },
// ];

// const OptimizeSearchBar = () => {
//     const [searchInput, setSearchInput] = useState("");

//     const filtered = useMemo(() => {
//         console.log('Searching user...');
//         return users?.filter((item) => {
//             return (item.name.toLowerCase().includes(searchInput.toLowerCase()));
//         }
//         );
//     }, [searchInput, users]);

//     return (
//         <div>
//             <h1> Search bar in React </h1>
//             <input
//                 placeholder='Search'
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//             />

//             <ul>
//                 {
//                     filtered.map((item, key) => {
//                         return (
//                             <li key={item.id}> {item.name} </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// };

// export default OptimizeSearchBar;


















import React, { useRef } from 'react';

const LearningAccessDOMEl = () => {

    const inputRef = useRef();

    const submitForm = () => {
        console.log(inputRef?.current);
        inputRef?.current?.focus();
    };

    return (
        <>
            <h1> Accessing DOM Elements in React </h1>
            <input
                ref={inputRef}
                type='text'
                placeholder='abc@xyz.com'
            />
            <button onClick={submitForm}> Submit Form </button>
        </>
    )
}

export default LearningAccessDOMEl;