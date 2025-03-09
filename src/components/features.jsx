import React from 'react';

export const Features = (props) => {
    return (
        <div id="features" className="text-center py-5">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title mb-5">
                    <h2 className="font-weight-bold" style={{ color: '#3e4b56' }}>
                        Características
                    </h2>
                    <p className="text-muted">Descubre nuestras principales funcionalidades</p>
                </div>

                <div className="row justify-content-center">
                    {props.data ? (
                        props.data.map((d, i) => (
                            <div
                                key={`${d.title}-${i}`}
                                className="col-xs-12 col-sm-6 col-md-3 mb-5"
                            >
                                <div className="feature-box p-4 shadow-sm rounded">
                                    <h3
                                        className="h5 font-weight-bold mb-3"
                                        style={{ color: '#3e4b56' }}
                                    >
                                        {d.title}
                                    </h3>
                                    <p className="text-muted">{d.text}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted">Cargando...</p>
                    )}
                </div>
            </div>

            <style>
                {`
                    #features {
                        background: #edf1ef;
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }
                    
                    .feature-box {
                        background: #d4e2e2;
                        padding: 25px;
                        border-radius: 10px;
                        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
                        transition: transform 0.2s ease-in-out;
                    }
                    
                    .feature-box:hover {
                        transform: translateY(-5px);
                    }
                    
                    .text-muted {
                        color: #3e4b56;
                        opacity: 0.8;
                    }
                `}
            </style>
        </div>
    );
};
