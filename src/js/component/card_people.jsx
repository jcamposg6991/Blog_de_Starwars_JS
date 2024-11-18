import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardPeople = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePeople();
    }, []);


    const peopleItems = store.people.map((item) => (
        <Carousel.Item key={item.id}>
            <div className="d-flex justify-content-center">
                <div className="card mb-5">
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
                                <Link type="button" className="btn btn-outline-primary" to={"/characterProfile/" + item.id}>Learn More!</Link>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <button
                                    type="button"
                                    className={`btn ${store.favorites.some(favorite => favorite.name === item.name) ? "btn-warning" : "btn-outline-warning"}`}
                                    onClick={() => {
                                        const isFavorite = store.favorites.some(favorite => favorite.name === item.name);
                                        isFavorite ? actions.deleteFavorite(item) : actions.saveFavorite(item);
                                    }}
                                >
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
        <div className="galaxyBackground">
            <p className="text-center text-white font-monospace display-3 fw-light">Characters</p>
            {peopleItems.length > 0 ? (
                <Carousel>
                    {peopleItems}
                </Carousel>
            ) : (
                <p className="text-center text-white">No characters available</p>
            )}
        </div>
    );
};
