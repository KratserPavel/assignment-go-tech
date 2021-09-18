import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={'container'}>
            <div className={styles['headerTopPipe']}/>
            <h1>GoTech Questionnaire</h1>
            <span>Show me what you got!</span>
            <div className={styles['headerTitle']}>*<span>Required</span></div>
        </div>
    );
};

export default Header;