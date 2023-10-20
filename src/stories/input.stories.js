import React from "react";
import { Meta } from "@storybook/react"
import Input from "../components/input/input";



const meta = {
    title: 'Input',
    component: Input,
}

export default meta



export const InputText = (args) => <Input {...args} />;
InputText.args = {
    type: 'text',
    placeholder: 'Input text is here',
    label: 'Text input',
    required: true
};

export const InputEmail = (args) => <Input {...args} />;
InputEmail.args = {
    type: 'email',
    placeholder: 'Input email with icon is here',
    label: 'Email input'
};

export const InputUrl = (args) => <Input {...args} />;
InputUrl.args = {
    type: 'url',
    placeholder: 'Input email with https:// is here',
    label: 'Url input',
    required: true
};