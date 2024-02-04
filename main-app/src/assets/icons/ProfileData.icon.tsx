const ProfileData = ({ startColor = 'currentColor', middleColor = 'currentColor', endColor = 'currentColor' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon"
            style={{ width: ".8em", height: ".8em", verticalAlign: "middle" }}
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

            {/* important 'fill attribute' must be added in the begining of each 'path' tag as above: fill="url(#grad1)" */}
            <path
                fill="url(#grad1)"
                d="M492.36 530.816c-133.125 0-241.424-108.303-241.424-241.428S359.235 47.959 492.36 47.959c133.12 0 241.418 108.303 241.418 241.429-.149 132.96-108.457 241.274-241.429 241.428h.01zm0-422.17c-99.656 0-180.736 81.08-180.736 180.742 0 99.655 81.08 180.736 180.736 180.736 99.66 0 180.74-81.08 180.74-180.736-.086-99.574-81.161-180.655-180.74-180.742z"
            ></path>
            <path
                fill="url(#grad1)"
                d="M93.164 961.47a29.978 29.978 0 01-21.177-9.319 29.85 29.85 0 01-8.171-23.393c33.766-374.18 294.86-443.981 405.55-456.627a29.83 29.83 0 0132.86 26.572c.154 1.419.205 2.873.148 4.306a29.962 29.962 0 01-27.12 28.851c-95.411 9.447-320.507 67.467-350.7 401.613-1.126 15.765-14.285 28.022-29.952 28.022a27.064 27.064 0 01-1.438-.026zm395.98-275.016c-20.987 0-30.34-9.354-30.34-30.346 0-20.987 9.353-30.342 30.34-30.342H846.5c20.992 0 30.346 9.355 30.346 30.342 0 20.992-9.354 30.346-30.346 30.346H489.144zm-42.28 138.823c-20.988 0-30.342-9.354-30.342-30.34 0-20.993 9.36-30.347 30.341-30.347h441.764c20.992 0 30.346 9.354 30.346 30.346 0 20.987-9.354 30.341-30.346 30.341H446.863zm-42.128 138.819c-20.987 0-30.346-9.354-30.346-30.346 0-20.987 9.36-30.341 30.346-30.341h526.31c20.992 0 30.352 9.354 30.352 30.34 0 20.993-9.36 30.347-30.352 30.347h-526.31z"
            ></path>
        </svg>
    );
}

export default ProfileData;