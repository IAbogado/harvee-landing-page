import React from 'react';

export const About = (props) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {' '}
                        <img
                            src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="img-responsive"
                            alt=""
                        />{' '}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Nosotros</h2>
                            <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                            <h3>Por qué elegirnos?</h3>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((d, i) => (
                                                  <li key={`${d}-${i}`}>{d}</li>
                                              ))
                                            : 'loading'}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((d, i) => (
                                                  <li key={`${d}-${i}`}> {d}</li>
                                              ))
                                            : 'loading'}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
