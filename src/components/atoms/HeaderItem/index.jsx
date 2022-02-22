import React from "react";

const HeaderItem = (props) => {
    const { text } = props;

    return <div className="header-item">{text}</div>;
};

export default HeaderItem;
