// import

import Style from "./dropdown.module.css";
import React, {useState} from "react";


function Dropdown() {

    const list = [
        "Absolutely, dropdowns add a touch of elegance to any interface!",
        "Indeed, dropdowns can streamline user interactions with style.",
        "Definitely, they make navigating options smooth and effortless.",
        "For sure, dropdowns enhance user experience with clarity and ease.",
        "Without a doubt, dropdowns bring a polished and functional touch to UI design."
    ];


    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");


    // dropdown toggle
    const dropdownToggle = () => {
        setdropdownOpen(!dropdownOpen);
    };
    // selecting the options
    const handleList = (option) => {
        setSelectedOption(option);
        setdropdownOpen(false);
    };



  return (
        <div className={Style.dropdown}>
            <h1 className={Style.title}>Use the below dropDown</h1>
            <h3 className={Style.selectedOption}>{selectedOption}</h3>
            <button className={Style.dropdownButton} onClick={dropdownToggle} onMouseEnter={()=>{setdropdownOpen(true)}}>
                Try
            </button>
            {dropdownOpen && (
                <ul className={Style.dropdownMenu}>
                {list.map((item, index) => (
                    <li
                    key={index}
                    className={Style.dropdownMenuItem}
                    onClick={() => handleList(item)}
                    >
                    {item}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}


// export
export default Dropdown