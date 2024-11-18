import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.planets);

	// console.log(`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`);
	return (
		<>
			<div className="row d-flex align-items-center justify-content-center mx-1 galaxyBackground">
				<div className="col-lg-6 col-11 d-flex justify-content-center">
					<img
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
                        className="card-img-top"
                        alt={item.name}
                    />
				</div>
				<div className="col-lg-6 col-11 text-white text-center d-flex align-items-center">

					<p className="fs-5"><h1 className="text-warning" style={{ fontSize: "60px" }}>Description</h1><br></br>This individual stands at a height of {store.people[params.theid - 1].height} cm and weighs {store.people[params.theid - 1].mass} kg, presenting a {store.people[params.theid - 1].gender} appearance with {store.people[params.theid - 1].hair_color} hair and {store.people[params.theid - 1].eye_color} eyes. Their {store.people[params.theid - 1].skin_color} complexion adds to their distinctive features, making them notable in their surroundings. Born in the year {store.people[params.theid - 1].birth_year}, they come from an era that has shaped their personality and destiny in significant ways.
						Originating from {store.people[params.theid - 1].homeworld}, their story is closely tied to their planet of birth, a place that influences their outlook and character. Their existence was officially documented on {store.people[params.theid - 1].created} and updated on {store.people[params.theid - 1].edited}, reflecting their relevance and role in the larger narrative.
						Their unique blend of physical traits and background makes them an intriguing figure, whether they are a symbol of hope, a skilled warrior, or a leader navigating through challenges in their journey.</p>
				</div>

			</div>
			<hr className="border border-light border-3" />
			<div className="row mx-1 galaxyBackground">
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Name</p>
					<h1 className="text-white">{store.planets[params.theid].name}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Diameter</p>
					<h1 className="text-white">{store.planets[params.theid].diameter}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">climate</p>
					<h1 className="text-white">{store.people[params.theid].climate}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Gravity</p>
					<h1 className="text-white">{store.people[params.theid].gravity}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Terrain</p>
					<h1 className="text-white">{store.people[params.theid].terrain}</h1>

				</div>
				<div className="col-lg-2 col-6 text-center">
					<p className="text-warning fs-5">Rotation Period</p>
					<h1 className="text-white">{store.people[params.theid].rotation_period}</h1>
				</div>

			</div>
			<hr className="border border-light border-3" />
			<div className="d-flex justify-content-start galaxyBackground">
				<Link type="button" className="btn btn-warning ms-2 mt-4" to={"/"}>Go Back</Link>
			</div>


		</>
	);
};

PlanetProfile.propTypes = {
	match: PropTypes.object
};
