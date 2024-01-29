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

            <path d="M810.667 640A42.667 42.667 0 11896 640v234.795a106.624 106.624 0 01-106.816 106.538H149.483A106.752 106.752 0 0142.667 874.517V234.816A106.71 106.71 0 01149.205 128H384a42.667 42.667 0 110 85.333H149.205c-11.648 0-21.205 9.6-21.205 21.483v639.701A21.432 21.432 0 00149.483 896h639.701a21.29 21.29 0 0021.483-21.205V640zm25.002-512H640a42.667 42.667 0 110-85.333h298.667a42.667 42.667 0 0142.666 42.666V384A42.667 42.667 0 11896 384V188.33L542.165 542.166a42.667 42.667 0 01-60.33-60.33L835.669 128z" fill="url(#grad1)">
            </path>
            {/* important at the end of each 'path' there must be a 'fill attribute' added */}

        </svg>
    );
}

export default WebLink;