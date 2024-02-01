const WebLink = ({ startColor = 'currentColor', middleColor = 'currentColor', endColor = 'currentColor' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon"
            style={{ width: "1em", height: "1em", verticalAlign: "middle" }}
            viewBox="0 0 1024 1024"
        >
            {/* important this defs block below is mandatort */}
            <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="5%" stopColor={startColor}></stop>
                    <stop offset="40%" stopColor={middleColor}></stop>
                    <stop offset="50%" stopColor={middleColor}></stop>
                    <stop offset="100%" stopColor={endColor}></stop>
                </linearGradient>
            </defs>

            {/* important at the end of each 'path' there must be a 'fill attribute' added */}
            <path
                fill="url(#grad1)"
                d="M172.9 536.9V201.8c0-16.5 13.5-29.9 30.2-29.9h448.8c16.7 0 30.2 13.4 30.2 29.9V537c0 16.5-13.5 29.9-30.2 29.9h-153c-15 0-27.2 12.2-27.2 27.2v5.5c0 15 12.2 27.2 27.2 27.2H682c33.3 0 60.4-26.8 60.4-59.9v-395c0-33.1-27-59.9-60.4-59.9H142.7c-16.7 0-30.2 13.4-30.2 29.9v424.9c0 33.1 27 59.9 60.4 59.9h30.2c15 0 27.2-12.2 27.2-27.2V594c0-15-12.2-27.2-27.2-27.2-16.7.1-30.2-13.3-30.2-29.9z"></path>
            <path
                fill="url(#grad1)"
                d="M852.1 397.3h-30.2c-13.3 0-24.2 10.8-24.2 24.2V433c0 13.3 10.8 24.2 24.2 24.2 16.7 0 30.2 13.4 30.2 29.9v335.2c0 16.5-13.5 29.9-30.2 29.9H370.1c-16.7 0-30.2-13.4-30.2-29.9V487.1c0-16.5 13.5-29.9 30.2-29.9h159c13.3 0 24.2-10.8 24.2-24.2v-11.5c0-13.3-10.8-24.2-24.2-24.2H339.9c-33.3 0-60.4 26.8-60.4 59.9v395c0 33.1 27 59.9 60.4 59.9h512.2c33.3 0 60.4-26.8 60.4-59.9v-395c0-33.1-27-59.9-60.4-59.9z"></path>
        </svg>
    );
}

export default WebLink;