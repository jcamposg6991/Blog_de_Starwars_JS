import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="row">
				<div className="col-6">
				<img
                        src={`https://starwars-visualguide.com/assets/img/characters/{${params.theid}}.jpg`}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
                        className="card-img-top"
                        alt={store.people[params.theid].name}
                    />
				</div>
				<div className="col-6">

				</div>

			</div>
			<div className="row">
				<div className="col-2">

				</div>
				<div className="col-2">

				</div>
				<div className="col-2">

				</div>
				<div className="col-2">

				</div>
				<div className="col-2">

				</div>
				<div className="col-2">

				</div>

			</div>
		</>
	);
};

CharacterProfile.propTypes = {
	match: PropTypes.object
};
