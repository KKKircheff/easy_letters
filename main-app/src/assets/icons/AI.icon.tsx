
const AI = ({ startColor = 'currentColor', middleColor = 'currentColor', endColor = 'currentColor' }) => {
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
                d="M720.369 813.01c-.676 0-1.352.026-2.033.072l-2.38.169-160.288 92.262a66.621 66.621 0 01-33.341 8.945 67.072 67.072 0 01-33.444-8.955L196.547 737.28a67.159 67.159 0 01-33.536-58.03v-88.095l-.666-1.776a29.174 29.174 0 00-15.17-16.175 28.513 28.513 0 00-37.597 14.516l-.896 2.012v108.78c0 31.344 16.84 60.477 43.935 76.026l325.786 187.69a87.485 87.485 0 0043.745 11.734 87.91 87.91 0 0043.807-11.725l175.672-101.1 1.25-1.612a29.03 29.03 0 006.112-19.768c-1.05-15.002-13.619-26.747-28.62-26.747zM127.2 520.888a27.873 27.873 0 0035.333-18.206l.477-1.521V342.994c0-23.926 12.846-46.157 33.525-58.025l292.475-168.14a66.601 66.601 0 0133.342-8.95 67.06 67.06 0 0133.443 8.96l93.272 53.683 2.309.194a27.71 27.71 0 002.345.097c2.846 0 5.754-.44 8.688-1.336 15.662-4.854 24.458-21.509 19.62-37.13l-2.12-6.83-113.735-65.393a87.44 87.44 0 00-43.746-11.74 87.816 87.816 0 00-43.801 11.73L152.617 247.706a87.977 87.977 0 00-43.935 76.021v178.34l1.234 3.082a27.889 27.889 0 0017.285 15.74zm764.857-273.29l-136.12-78.295-1.404-.353a27.28 27.28 0 00-6.6-.814 27.725 27.725 0 00-17.679 6.38 27.996 27.996 0 00-10.26 18.892 27.873 27.873 0 006.118 20.664l1.209 1.49 120.806 69.504a67.159 67.159 0 0133.541 58.03v336.052c0 23.925-12.846 46.156-33.526 58.02l-47.017 26.987-1.26 1.628a28.882 28.882 0 00-5.887 19.645c1.044 14.946 13.588 26.65 28.549 26.65.768 0 1.536-.03 2.31-.097l2.329-.185 64.9-37.37a87.967 87.967 0 0043.93-76.022V323.62c.006-31.335-16.84-60.472-43.94-76.022z"></path>
            <path
                fill="url(#grad1)"
                d="M745.8 372.603l-210.135-119.67a26.081 26.081 0 00-25.201-.169L300.349 367.611a26.03 26.03 0 00-13.301 22.635v243.671c0 9.314 5.058 17.956 13.194 22.528L510.218 774.82a26.226 26.226 0 0012.677 3.277c4.445 0 8.832-1.152 12.657-3.308l210.104-118.236a25.907 25.907 0 0013.2-22.533V395.116a25.861 25.861 0 00-13.056-22.513zM344.525 615.51V444.524l149.99 85.509v170.895l-149.99-85.417zm327.178-219.28l-148.66 85.182-150.123-85.826 150.088-84.557 148.695 85.202zM551.485 698.917V530.058l150.503-88.038v172.339l-150.503 84.557z"></path>

        </svg>
    );
}

export default AI;



