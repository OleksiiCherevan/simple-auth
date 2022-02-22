import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
import HeaderItem from "../../atoms/HeaderItem";

const HeaderNav = (props) => {
    const { items = [] } = props;

    return (
        <div className="header-nav">
            {items.map((item) => (
                <Link key={item.text} to={item.url}>
                    <HeaderItem text={item.text}></HeaderItem>
                </Link>
            ))}
        </div>
    );
};

export default HeaderNav;
