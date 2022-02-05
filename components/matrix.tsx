import { Component, useEffect, useRef, useState } from 'react';

// Initialisation of Matrix Rain constants
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;
const fontSize = 20;

// Adapted from https://github.com/javascriptacademy-stash/digital-rain
export const MatrixRain = () => {
    // Initialisation of canvas ref and raindrop stateful variable
    const canvas = useRef(null);
    const [rainDrops, setRainDrops] = useState([]);

    // useEffect because this is going to be re-rendered
    useEffect(() => {
        const context = canvas.current.getContext('2d');
        context.fillRect(0, 0, canvas.current.width, canvas.current.height);
        canvas.current.width = window.innerWidth;
        canvas.current.height = window.innerHeight;
        const columns = canvas.current.width / fontSize;

        const rainDropsTemp = [];
        for (let x = 0; x < columns; x++) {
            rainDropsTemp[x] = 1; // Initialisation
        }
        setRainDrops(rainDropsTemp);
        // Draw at the starting point understands that rainDrops is a null array
        const intervalId = setInterval(() => draw(context), 60); // Takes snapshot of what the draw function looks like, therefore
                                                                 // requiring the previous value inside draw to be known and stored
        draw(context);
        return () => clearInterval(intervalId);
    }, []) 
    
    // Because of the setInterval, you need to use the closure version of the setState
    const draw = (context: any) => {
        // Draw is being called inside of a set interval, thus raindrops keeps mutating
        // All logic of mutating the raindrops array is done inside of the setState()
        setRainDrops((rainDropsPrev) => {
            const rainDropsTemp = [...rainDropsPrev];
            for (let i = 0; i < rainDropsTemp.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                context.fillText(text, i * fontSize, rainDropsTemp[i] * fontSize);
                
                if (rainDropsTemp[i] * fontSize > canvas.current.height && Math.random() > 0.975) {
                    rainDropsTemp[i] = 0;
                }
                rainDropsTemp[i]++;
            }
            return rainDropsTemp;
        });
        
        // Fade out animation
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.current.width, canvas.current.height);
        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
    };
    
    return ( // Return the canvas, keeping in mind the ref you created to it
        <canvas ref={canvas}/> 
    )
}
