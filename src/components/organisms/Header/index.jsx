import React from "react";
import HeaderNav from "../../molecules/HeaderNav";

const items = [
    {
        text: "На главную",
        url: "/",
    },
    {
        text: "Новости",
        url: "/news",
    },
    {
        text: "Профиль",
        url: "/profile",
    },
];

const Header = () => {
    return (
        <div className="header">
            <HeaderNav items={items} />
        </div>
    );
};

export default Header;
