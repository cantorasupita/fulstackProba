import React from 'react';

import styles from './NotFoundBlock.module.scss'


const NotFoundBlock:React.FC = () =>{
    return (
        <div>
            <h1 className={styles.root}>
                    :(404
                Ничего не найдено
            </h1>
        </div>
    )
}


export default NotFoundBlock;