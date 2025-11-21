// import React from 'react'

type H2Prop = {
    userType: 'admin' | 'customer'
}

const H2Component = (props: H2Prop) => {
    console.log('Props: ', props);
    const { userType } = props;

    return (
        <h2> Selected user: {userType} </h2>
    );
};

export default H2Component;