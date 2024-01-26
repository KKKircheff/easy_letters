import {useState, useEffect} from 'react';

export function useAspectRatio(
    xs = '1',
    sm = '1',
    md = '16/9',
    lg = '16/9',
    xl = '16/9'
) {
    const [ratio, setRatio] = useState('16/9');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) {
                setRatio(xs);
            } else if (width < 900) {
                setRatio(sm);
            } else if (width < 1200) {
                setRatio(md);
            } else if (width < 1536) {
                setRatio(lg);
            } else {
                setRatio(xl);
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
