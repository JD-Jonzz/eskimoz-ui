import React, { useState } from "react";
import { Meta } from "@storybook/react"
import Alert from "../components/alert/alert";

const meta = {
    title: 'Alert',
    component: Alert,
}

export default meta


export const AlertSucess = (args) => <Alert {...args} />;
AlertSucess.args = {
    type: 'success',
    title: 'Success Hello world!',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    show: true
};

export const AlertWarning = (args) => <Alert {...args} />;
AlertWarning.args = {
    type: 'warning',
    title: 'Warning Hello world!',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    show: true
};

export const AlertDanger = (args) => <Alert {...args} />;
AlertDanger.args = {
    type: 'danger',
    title: 'Danger Hello world!',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    show: true
};
