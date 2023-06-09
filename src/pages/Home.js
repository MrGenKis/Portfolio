import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import Buttons from '../components/Buttons';
import CV from '../components/cv';

const Home = () => {
    return (
        <div>
            <Mouse />
            <div className='home'>

            </div>
            <Navigation />
            <SocialNetwork />
            <div className='home-main'>
                <div className='main-cotent' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <h1>Idriss ASKRI</h1>
                    <h2>

                        <DynamicText/>
                    </h2>
                </div>
             
                <Buttons right={"/projet-1"}/>
                <CV />
            </div>

           
        </div>
    );
};

export default Home;
