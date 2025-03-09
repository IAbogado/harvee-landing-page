import { useState } from 'react';
import React from 'react';
import { formDB } from '../config/config';
import { addDoc, collection } from '@firebase/firestore';
import { v4 } from 'uuid';

export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const clearState = () =>
        setState({
            name: '',
            email: '',
            message: '',
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, message);

        try {
            const ref = collection(formDB, 'messages');
            await addDoc(ref, {
                id: v4(),
                name,
                email,
                message,
                createdAt: new Date(),
            });
            clearState();
            alert('Mensaje enviado correctamente');
        } catch (error) {
            console.log(error);
            alert('Error al enviar el mensaje');
        }
    };

    return (
        <div id="contact" className="padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section- mb-4">
                            <h2>Contáctanos</h2>
                            <p>Completa el formulario y nos pondremos en contacto contigo.</p>
                        </div>
                        <form
                            name="sentMessage"
                            validate
                            onSubmit={handleSubmit}
                            className="contact-form"
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Nombre"
                                            required
                                            value={name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Correo Electrónico"
                                            required
                                            value={email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Mensaje"
                                    required
                                    value={message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>Información de Contacto</h3>
                            <p>
                                <span>
                                    <i className="fa fa-map-marker"></i> Dirección:
                                </span>
                                {props.data ? props.data.address : 'Cargando...'}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-phone"></i> Teléfono:
                                </span>
                                {props.data ? props.data.phone : 'Cargando...'}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email:
                                </span>
                                {props.data ? props.data.email : 'Cargando...'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    #contact {
                        background: #edf1ef;
                        padding: 100px 0;
                        color: #000;
                    }
                    .contact-form {
                        background: #fff;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
                    }
                    .form-control {
                        border-radius: 5px;
                        border: 1px solid #d4e2e2;
                        padding: 12px;
                        font-size: 16px;
                    }
                    .btn-custom {
                        background: #91b6ca;
                        color: #fff;
                        padding: 12px 30px;
                        font-size: 16px;
                        border-radius: 5px;
                        transition: background 0.3s ease-in-out;
                        border: none;
                    }
                    .btn-custom:hover {
                        background: #3e4b56;
                        color: #fff;
                    }
                `}
            </style>
        </div>
    );
};
