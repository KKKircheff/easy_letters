import {useState, useEffect} from 'react';

export function useAspectRatio() {
    const [ratio, setRatio] = useState('16/9');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) {
                // xs
                setRatio('1');
            } else if (width < 900) {
                // sm
                setRatio('2/1');
            } else {
                // md and above
                setRatio('2/1.5');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return ratio;
}
