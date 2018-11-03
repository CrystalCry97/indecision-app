import React from 'react';

const Header = (props) /* get parameter as a prop */ => ( 
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {/* check if value of subtitle is exist & if yes, do h2 tag*/}
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;