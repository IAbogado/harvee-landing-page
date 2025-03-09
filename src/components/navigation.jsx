import React, { useState } from 'react';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    {/* Botón de menú para móviles */}
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        aria-label="Toggle navigation"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Assessment_brain_icon.png"
                        alt="logo"
                        className="navbar-brand page-scroll logo"
                    />
                    <a href="#header" className="navbar-brand page-scroll">
                        <span className="light">Abo</span> AI
                    </a>
                </div>

                <div className={`collapse navbar-collapse ${isOpen ? 'in' : ''}`}>
                    <ul className="nav navbar-nav navbar-right">
                        {[
                            { label: 'Características', href: '#features' },
                            { label: 'Acerca de', href: '#about' },
                            { label: 'Servicios', href: '#services' },
                            { label: 'Testimonios', href: '#testimonials' },
                            { label: 'Contacto', href: '#contact' },
                        ].map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="page-scroll"
                                    onClick={() => setIsOpen(false)} // Cierra menú al hacer clic
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
