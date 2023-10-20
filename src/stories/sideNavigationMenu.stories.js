import SideNavigationMenu from "../components/SideNavigationMenu/sideNavigationMenu";
import React from "react";
import { Dollar, Dollar2 } from "../icons/Dollar";
import { Users } from "../icons/Users";
import { NotePencil } from "../icons/NotePencil";
import { User } from "../icons/User";
import { LoadArrows } from "../icons/LoadArrows";
import { ArrowCircle } from "../icons/ArrowCircle";
import { UserCard } from "../icons/UserCard";

const meta = {
  title: "SideNavigationMenu",
  component: SideNavigationMenu,
};
export default meta;

export const MenuAdmin = (args) => <SideNavigationMenu {...args} />;
MenuAdmin.args = {
  logo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2261&q=80",
  title: "John Doe",
  variant: "primary",
  data: [
    {
      title: "Changer de workspace",
      icon: <LoadArrows />,
      action: () => console.log("Changer de workspace"),
    },
    {
      title: "Mon profil",
      icon: <User />,
      action: () => console.log("Mon profil"),
    },
    {
      title: "CRM",
      icon: <UserCard />,
      action: () => console.log("CRM"),
    },
    {
      title: "Déconnexion",
      icon: <ArrowCircle />,
      action: () => console.log("Déconnexion"),
    },
  ],
};
export const MenuClient = (args) => <SideNavigationMenu {...args} />;
MenuClient.args = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Adidas_isologo.svg",
  title: "Alaska",
  subTitle: "Adidas",
  variant: "secondary",
  data: [
    {
      title: "Changer de workspace",
      icon: <LoadArrows />,
      action: () => console.log("Changer de workspace"),
    },
    {
      title: "Mon profil",
      icon: <User />,
      action: () => console.log("Mon profil"),
    },
    {
      title: "La team",
      icon: <Users />,
      action: () => console.log("La team"),
    },
    {
      title: "Finances",
      icon: <Dollar />,
      action: () => console.log("Finances"),
    },
    {
      title: "Contrats",
      icon: <NotePencil />,
      action: () => console.log("Contrats"),
    },
    {
      title: "Déconnexion",
      icon: <ArrowCircle />,
      action: () => console.log("Déconnexion"),
    },
  ],
};
