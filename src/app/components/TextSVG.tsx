

export default function TextSVG() {
    return (
        <svg className="z-50 relative" viewBox="0 0 1200 1000" xmlns="http://www.w3.org/2000/svg">
            <mask id="m">
                <g id="cloud1">
                    <rect fill="#fff" width="100%" height="801" y="799" />
                    <image href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" />
                </g>
            </mask>

            <text className="svg-text text-6xl md:text-8xl font-black" fill="white" x="380" y="400">BUILDING</text>


            <g mask="url(#m)">
                <rect fill="#fff" width="100%" height="100%" />
                <text className="svg-text text-6xl md:text-8xl font-black" x="360" y="400" fill="#162a43">SMARTER</text>
            </g>

        </svg>


    );
}