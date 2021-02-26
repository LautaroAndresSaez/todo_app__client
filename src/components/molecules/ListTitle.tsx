import React from 'react';

import Subtitle from '../atoms/Subtitle';

const ListTitle: React.FC = ({children}) => {

    return (
        <li className='tasks__title'>
            <Subtitle>
                {
                    children
                }
            </Subtitle>
        </li>
    );
}

export default ListTitle;