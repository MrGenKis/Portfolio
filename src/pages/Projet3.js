import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Buttons from '../components/Buttons';
import Project from '../components/Project';


const Projet3 = () => {
    return (
        <main>
        <Mouse />
        <div className='project'>
            <Navigation/>
            <Logo />
            <Project projectNumber={2} />
            
            <Buttons left={"/projet-2"} right={"/"} />

        </div>

       </main>
    );
};

export default Projet3;

