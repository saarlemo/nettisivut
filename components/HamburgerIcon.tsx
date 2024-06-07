interface Props {
    isOpen: boolean;
}

const HamburgerIcon: React.FC<Props> = ({ isOpen }) => {
    /* https://tailwindcomponents.com/component/animated-hamburger-menu-icon */
    return (
        <div className="group">
            <div className="relative flex overflow-hidden items-center justify-center w-[100%] h-[100%] transform transition-all duration-200">
                <div className="flex flex-col justify-between w-6 h-6 transform transition-all duration-300 origin-center overflow-hidden">
                    <div className={isOpen 
                        ? "bg-white h-[2px] w-9 transform transition-all duration-300 origin-left rotate-[42deg]"
                        : "bg-white h-[2px] w-9 transform transition-all duration-300 origin-left"
                    }></div>
                    <div className={isOpen
                        ? "bg-white h-[2px] w-9 rounded transform transition-all duration-300 -translate-x-10"
                        : "bg-white h-[2px] w-9 rounded transform transition-all duration-300"
                    }></div>
                    <div className={isOpen
                        ? "bg-white h-[2px] w-9 transform transition-all duration-300 origin-left -rotate-[42deg]"
                        : "bg-white h-[2px] w-9 transform transition-all duration-300 origin-left"
                    }></div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerIcon;