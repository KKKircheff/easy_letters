
const AIthin = ({ startColor = 'currentColor', middleColor = 'currentColor', endColor = 'currentColor' }) => {
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
                d="M678.656 96.224c11.584 0 22.72 4.16 31.392 11.68l3.552 3.392 169.376 179.936a48 48 0 0112.8 27.68l.256 5.216v556.064a48 48 0 01-43.392 47.776l-4.608.224H176a48 48 0 01-47.776-43.392l-.224-4.608v-96.8a16 16 0 0131.744-2.88l.256 2.88v96.8a16 16 0 0013.12 15.744l2.88.256h672.032a16 16 0 0015.744-13.12l.256-2.88V324.128a16 16 0 00-2.496-8.576l-1.856-2.4-169.376-179.904a16 16 0 00-9.024-4.8l-2.624-.224H176a16 16 0 00-15.744 13.12l-.256 2.88v63.04a16 16 0 01-31.744 2.88l-.256-2.88v-63.04a48 48 0 0143.392-47.808l4.608-.192h502.656z"
            ></path>
            <path
                fill="url(#grad1)"
                d="M496 576a112 112 0 110 224 112 112 0 010-224zm0 32a80 80 0 100 160 80 80 0 000-160zM199.36 240.512a112 112 0 0198.048 75.168 16 16 0 01-30.24 10.464 80 80 0 10-120.448 92.384 16 16 0 01-17.92 26.496 112 112 0 0170.56-204.512zM592 256a80 80 0 110 160 80 80 0 010-160zm0 32a48 48 0 100 96 48 48 0 000-96z"
            ></path>
            <path
                fill="url(#grad1)"
                d="M536.512 372.256l21.28 23.872-71.616 63.808-21.28-23.872z"
            ></path>
            <path fill="#27A2DF" d="M256 480a32 32 0 110 64 32 32 0 010-64z"></path>
            <path
                fill="url(#grad1)"
                d="M336 352a176 176 0 01176 176 16 16 0 11-32 0 144 144 0 10-144 144 16 16 0 010 32 176 176 0 110-352z"
            ></path>
        </svg>
    );
}

export default AIthin;




