import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";

export const CardPeople = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePeople();
    }, []);

    // Mapear los elementos y guardarlos en una constante
    const peopleItems = store.people.map((item) => (
        <Carousel.Item key={item.id}>
            <div className="d-flex justify-content-center">
                <div className="card" style={{ marginBottom: "20px" }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
                        className="card-img-top"
                        alt={item.name}
                    />
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p className="card-text fw-light fs-4">
                            Gender: {item.gender}<br />
                            Hair color: {item.hair_color}<br />
                            Eye color: {item.eye_color}<br />
                        </p>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start">
                                <button type="button" className="btn btn-outline-primary">Learn More!</button>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <button type="button" className="btn btn-outline-warning" onClick={() => { actions.saveFavorite(item) }}>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
    ));

    return (
        <div>
            <p className="text-center font-monospace display-3 fw-light bg-light">Characters</p>
            {peopleItems.length > 0 ? (
                <Carousel>
                    {peopleItems}
                </Carousel>
            ) : (
                <p className="text-center">No characters available</p>
            )}
        </div>
    );
};
