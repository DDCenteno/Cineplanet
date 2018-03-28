import React from 'react';
import HeaderCines from './HeaderCines';
import ScheduleCineInfo from './ScheduleCineInfo';
import Footer from './Footer';

const ScheduleCine = ({navigateTo}) => (
    <div>
        <HeaderCines />
        <ScheduleCineInfo navigateTo={navigateTo}/>
    </div>
    
);

export default ScheduleCine;