
const WebLinkExternal2 = ({ startColor = 'currentColor', middleColor = 'currentColor', endColor = 'currentColor' }) => {
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
                d="M853.333 469.333A42.667 42.667 0 00810.667 512v256A42.667 42.667 0 01768 810.667H256A42.667 42.667 0 01213.333 768V256A42.667 42.667 0 01256 213.333h256A42.667 42.667 0 00512 128H256a128 128 0 00-128 128v512a128 128 0 00128 128h512a128 128 0 00128-128V512a42.667 42.667 0 00-42.667-42.667z"></path>
            <path
                fill="url(#grad1)"
                d="M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 000 60.587 42.667 42.667 0 0060.586 0L810.667 273.92v67.413A42.667 42.667 0 00853.333 384 42.667 42.667 0 00896 341.333V170.667A42.667 42.667 0 00853.333 128H682.667a42.667 42.667 0 000 85.333z"></path>
        </svg>
    );
}

export default WebLinkExternal2;






