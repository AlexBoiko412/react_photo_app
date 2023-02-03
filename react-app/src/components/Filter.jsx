import React from 'react';
import Option from "./UI/Option/Option";
import Input from "./UI/Input/Input";


const options = [
    "All",
    "Mountains",
    "Sea",
    "Architecture",
    "City"
]


const Filter = ({activeOption, setActiveOption, searchQuery, setSearchQuery}) => {
    return (
        <div className="filter">
            {options.map((option, index) =>
                <Option
                    key={option}
                    isActive={activeOption === index}
                    onClick={() => setActiveOption(index)}
                >{option}</Option>
            )}
            <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search..."
            />
        </div>
    );
};

export default Filter;