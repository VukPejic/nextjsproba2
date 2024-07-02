'use client'

import React, { useState, useEffect } from 'react';
import { postInsert } from '@/_actions/postInput';

const Forma = ({ refreshPosts }) => {
    const [ime, setIme] = useState('');
    const [email, setEmail] = useState('');
    const [tip, setTip] = useState('generalno');
    const [pitanje, setPitanje] = useState('');

    const handleButtonClick = async () => {
        await postInsert(ime, email, tip, pitanje);
        refreshPosts();
    };

  return (
    <>
    <div className='formma'>
        <p>Ime: <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} /></p>
        <p>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></p> 
        <p>
            Tip: <input 
                type="radio" 
                id='gen' 
                value="generalno" 
                name='pitanje' 
                checked={tip === 'generalno'} 
                    onChange={(e) => setTip(e.target.value)} 
            />
            <label htmlFor="gen">Generalno</label>
            <input 
                type="radio" 
                id='kar' 
                value="karpos" 
                name='pitanje' 
                checked={tip === 'karpos'} 
                    onChange={(e) => setTip(e.target.value)}
            /> 
            <label htmlFor="kar">Karpos</label>
            <input 
                type="radio" 
                id='mla' 
                value="mlatisumina" 
                name='pitanje' 
                checked={tip === 'mlatisumina'} 
                    onChange={(e) => setTip(e.target.value)}
            />
            <label htmlFor="mla">Mlatisumina</label>
        </p>
        <p>Pitanje:</p>
        <textarea style={{width: '350px', height: '200px'}} value={pitanje} onChange={(e) => setPitanje(e.target.value)} ></textarea>
        <input type="submit" value="Salji" onClick={handleButtonClick} />
    </div>
    </>
  )
}

export default Forma