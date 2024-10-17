import eltunel from "../../assets/eltunel.webp";

export const Testimony = () => {
    return (
        <div className="relative rounded-3xl text-gray-700 text-left bg-zinc-100 w-full sm:w-[300px] 2xl:w-[320px] overflow-hidden">
            <div className="px-4 py-6">
                <p className="text-xs mb-6">FLEX DE MELI</p>
                <p className="text-md font-extrabold mb-12">
                    "Muy útil a la hora de buscar pedidos y poder hacer
                    seguimientos del mismo"
                </p>
                <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                        <img
                            src={eltunel}
                            className="w-[52px] h-[52px] rounded-full z-50"
                        />
                        <div>
                            <p className="text-sm font-bold">GABRIEL LAUFER</p>
                            <p className="text-xs text-gray-500">
                                CEO de El Tunel Farmacia
                            </p>
                        </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-quote"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                    </svg>
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.dev/svgjs"
                viewBox="0 0 800 800"
                opacity=".5"
                className="absolute top-0 left-0 right-0 bottom-0"
            >
                <defs>
                    <filter
                        id="bbblurry-filter"
                        x="-100%"
                        y="-100%"
                        width="400%"
                        height="400%"
                        filterUnits="objectBoundingBox"
                        primitiveUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feGaussianBlur
                            stdDeviation="130"
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            in="SourceGraphic"
                            edgeMode="none"
                            result="blur"
                        ></feGaussianBlur>
                    </filter>
                </defs>
                <g filter="url(#bbblurry-filter)">
                    <ellipse
                        rx="77"
                        ry="81.5"
                        cx="-24.451581545525187"
                        cy="420.256014519337"
                        fill="hsl(185, 100%, 57%)"
                    ></ellipse>
                    <ellipse
                        rx="77"
                        ry="81.5"
                        cx="699.1655521093238"
                        cy="393.68070800142135"
                        fill="hsl(55, 100%, 85%)"
                    ></ellipse>
                    <ellipse
                        rx="77"
                        ry="81.5"
                        cx="505.8864440917969"
                        cy="445.3798828125"
                        fill="hsl(286, 100%, 68%)"
                    ></ellipse>
                </g>
            </svg>
        </div>
    );
};
