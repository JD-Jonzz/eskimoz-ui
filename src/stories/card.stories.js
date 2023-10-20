import React from "react";
import { Meta } from "@storybook/react"
import Card from "../components/card/card";



const meta = {
    title: 'Card',
    component: Card,
}

export default meta



export const DefaultCard = (args) => <Card {...args} />;
DefaultCard.args = {
    type: 'default',
    title: 'Project management',
    date: '3 centuries ago',
    pinned: true
};

export const EmptyCard = (args) => <Card {...args} />;
EmptyCard.args = {
    type: 'empty'
};