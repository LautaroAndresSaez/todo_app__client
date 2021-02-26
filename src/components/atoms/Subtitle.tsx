import React from 'react';


const Subtitle: React.FC = ({children}) => {


    return (
        <h3 className='subtitle' >
            {
                children
            }
        </h3>
    )
}

export default Subtitle;