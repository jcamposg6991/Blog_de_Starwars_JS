import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";

export const Card = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePeople();
    }, []);

    return (
        <Carousel>
            {store.people.map((item) => (
                <Carousel.Item key={item.id}>
                    <div className="d-flex justify-content-center">
                        <div className="card" style={{marginBottom: "20px" }}>
                            <img
                                src="https://picsum.photos/800/500"
                                className="card-img-top"
                                alt={item.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
