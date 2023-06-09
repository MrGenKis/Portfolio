import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from'react-copy-to-clipboard';

const Contact = () => {
    return (
        <main>
            <Mouse />
                <div className='contact'>
                    <Navigation />
                    <Logo />
                    <ContactForm />
                    <div className='contact-info'>
                        <div className='adresse'>
                            <div className='content'>
                                <h4>Adresse</h4>
                                <p>12 rue du portfolio</p>
                                <p>75000 Paris</p>
                            </div>
                        </div>
                        <div className='telephone'>
                            <div className='content'>
                            <h4>Telehone</h4> 
                            <CopyToClipboard CopyToClipboard text='0676983254' className="hover"> 
                            <p style={{cursor: "pointer"}} className='clipboard' onClick={() => alert("Telephone copié !")}>0676983254</p>
                            </CopyToClipboard>
                            </div>
                          

                        </div>
                        </div>

                </div>

        </main>
    );
};

export default Contact;