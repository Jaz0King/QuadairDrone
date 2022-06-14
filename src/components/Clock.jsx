import React from 'react';
import '../App.css';
import { useState, useRef, useEffect } from 'react';


const Clock = () => {

    const ref = useRef(null);
    const [timer, setTimer] = useState('00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 900);
        return deadline;
    }

    const clearTimer = (e) => { 
        setTimer('15:00');
        if (ref.current) clearInterval(ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        ref.current = id;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
   
    return (
        <>
        <div id="timerContainer">
            <div id="timer">
                <div id="clock">
                    <div id="minutes">
                        <p>{timer}</p>
                        <h6 id="sh7">HURRY UP!</h6>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Clock;