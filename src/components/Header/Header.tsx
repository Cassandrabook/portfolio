import React from "react";
import './header.scss';


export function Header(){

    return(
        <>
            <section className="portfolio">
                <h1 className="portfolio__name slide-right">Cassandra Book</h1>
                <div className="portfolio__picture"></div>
                <p className="portfolio__webb slide-right">Webb developer student</p>
            </section>
            
        </>
    );
}