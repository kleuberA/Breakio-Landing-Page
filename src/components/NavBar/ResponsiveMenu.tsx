interface ResponsiveMenuProps {
    isOpen: boolean
}

export default function ResponsiveMenu(props: ResponsiveMenuProps) {
    return (
        <div className="cursor-pointer">
            {props.isOpen == false ?
                (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g clip-path="url(#clip0_356_20954)">
                            <path d="M4 6.5H20" stroke="#C026D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 12.5H20" stroke="#C026D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 18.5H20" stroke="#C026D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_356_20954">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                )
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.5 6.5L17.5 17.5" stroke="#C026D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.5 6.5L6.5 17.5" stroke="#C026D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            }



        </div>
    )
}