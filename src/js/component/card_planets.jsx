import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";

export const CardPlanets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePlanets();
    }, []);

    // Mapeamos los planetas y los guardamos en una constante
    const planetItems = store.planets.map((item, index) => (
        <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
                <div className="card" style={{ marginBottom: "20px" }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
                        className="card-img-top"
                        alt={item.name}
                    />
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p className="card-text fw-light fs-4">
                            Population: {item.population}<br />
                            Terrain: {item.terrain}<br />
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
            <p className="text-center font-monospace display-3 fw-light bg-light">Planets</p>
            {planetItems.length > 0 ? (
                <Carousel>
                    {planetItems}
                </Carousel>
            ) : (
                <p className="text-center">No planets available</p>
            )}
        </div>
    );
};
