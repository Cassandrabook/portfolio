import React from "react";
import './header.scss';


export function Header(){

    return(
        <>
            <header className="portfolio">
                <p className="portfolio__name">Cassandra Book</p>
                <div className="portfolio__picture"></div>
                <p className="portfolio__webb">Webb developer student</p>
            </header>
            
        </>
    );
}