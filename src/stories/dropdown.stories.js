import React from "react";
import { Meta } from "@storybook/react"
import Dropdown from "../components/dropdown/checkboxDropdown";
import RadioDropdown from "../components/dropdown/radioDropdown";
import LanguageDropdown from "../components/dropdown/languageDropdown";



const meta = {
    title: 'Dropdown',
    component: Dropdown
}

export default meta


const options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4' },
    { label: 'Option 5', value: 'option-5' },
]

export const checkboxDropdown = (args) => <Dropdown {...args} />;
checkboxDropdown.args = {
    label: 'Open options',
    options: options,
    onChange: (e)=>{
        console.log(e);
    }
};



export const radioDropdownn = (args) => <RadioDropdown {...args} />;
radioDropdownn.args = {
    label: 'Open options',
    options: options,
    onChange:(e) => console.log(e.target.value)
};




export const languageDropdownn = (args) => <LanguageDropdown {...args} />;
languageDropdownn.args = {
    onSelect: (items) => {
        console.log(items);
    }
};
