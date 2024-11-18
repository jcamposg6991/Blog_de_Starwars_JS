import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.people);
	
	// console.log(`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`);
	return (
		<>
			<div className="row d-flex align-items-center justify-content-center mx-1 galaxyBackground">
				<div className="col-lg-6 col-11">
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
						onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
						className="card-img-top"
						alt={store.people[params.theid].name}
					/>
				</div>
				<div className="col-lg-6 col-11 text-white text-center d-flex align-items-center">

					<p><h1 className="text-warning" style={{ fontSize: "60px" }}>Description</h1><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt metus sit amet lorem tempor, vitae mattis nunc convallis. Nunc non mattis diam. Maecenas neque ipsum, fermentum at varius in, dictum eget nulla. Aenean iaculis posuere luctus. Phasellus auctor, risus vel elementum luctus, ex eros molestie nulla, eget mattis velit ligula non turpis. Suspendisse vitae sapien diam. Donec aliquam vitae nisi porta lacinia. Nam ac turpis at erat convallis feugiat sit amet nec massa. Sed sollicitudin, nisi sit amet aliquet ultrices, metus tortor finibus purus, a varius nisl tortor eget odio.

						Aliquam erat volutpat. Donec convallis urna vel tellus finibus efficitur. Integer commodo risus sed eros interdum, nec scelerisque leo pharetra. Nulla nisi justo, placerat ac posuere blandit, maximus interdum odio. Fusce nibh mauris, ultricies id mi nec, ornare rutrum ipsum. Fusce accumsan fermentum volutpat. Pellentesque volutpat rutrum libero eu eleifend. Donec tincidunt consectetur cursus. Curabitur eu sodales enim. Etiam pellentesque ex purus, a commodo quam ultricies tincidunt. Duis hendrerit porttitor imperdiet. Duis a dui sed urna ultricies accumsan. Aenean eu metus eget ante iaculis auctor sed pulvinar orci. Aliquam consequat elit et magna luctus, sed pellentesque massa aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt metus sit amet lorem tempor, vitae mattis nunc convallis. Nunc non mattis diam. Maecenas neque ipsum, fermentum at varius in, dictum eget nulla. Aenean iaculis posuere luctus. Phasellus auctor, risus vel elementum luctus, ex eros molestie nulla, eget mattis velit ligula non turpis. Suspendisse vitae sapien diam. Donec aliquam vitae nisi porta lacinia. Nam ac turpis at erat convallis feugiat sit amet nec massa. Sed sollicitudin, nisi sit amet aliquet ultrices, metus tortor finibus purus, a varius nisl tortor eget odio.

						Aliquam erat volutpat. Donec convallis urna vel tellus finibus efficitur. Integer commodo risus sed eros interdum, nec scelerisque leo pharetra. Nulla nisi justo, placerat ac posuere blandit, maximus interdum odio. Fusce nibh mauris, ultricies id mi nec, ornare rutrum ipsum. Fusce accumsan fermentum volutpat. Pellentesque volutpat rutrum libero eu eleifend. Donec tincidunt consectetur cursus. Curabitur eu sodales enim. Etiam pellentesque ex purus, a commodo quam ultricies tincidunt. Duis hendrerit porttitor imperdiet. Duis a dui sed urna ultricies accumsan. Aenean eu metus eget ante iaculis auctor sed pulvinar orci. Aliquam consequat elit et magna luctus, sed pellentesque massa aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt metus sit amet lorem tempor, vitae mattis nunc convallis. Nunc non mattis diam. Maecenas neque ipsum, fermentum at varius in, dictum eget nulla. Aenean iaculis posuere luctus. Phasellus auctor, risus vel elementum luctus, ex eros molestie nulla, eget mattis velit ligula non turpis. Suspendisse vitae sapien diam. Donec aliquam vitae nisi porta lacinia. Nam ac turpis at erat convallis feugiat sit amet nec massa. Sed sollicitudin, nisi sit amet aliquet ultrices, metus tortor finibus purus, a varius nisl tortor eget odio.

						Aliquam erat volutpat. Donec convallis urna vel tellus finibus efficitur. Integer commodo risus sed eros interdum, nec scelerisque leo pharetra. Nulla nisi justo, placerat ac posuere blandit, maximus interdum odio. Fusce nibh mauris, ultricies id mi nec, ornare rutrum ipsum. Fusce accumsan fermentum volutpat. Pellentesque volutpat rutrum libero eu eleifend. Donec tincidunt consectetur cursus. Curabitur eu sodales enim. Etiam pellentesque ex purus, a commodo quam ultricies tincidunt. Duis hendrerit porttitor imperdiet. Duis a dui sed urna ultricies accumsan. Aenean eu metus eget ante iaculis auctor sed pulvinar orci. Aliquam consequat elit et magna luctus, sed pellentesque massa aliquet.</p>
				</div>

			</div>
			<hr className="border border-light border-3"/>
			<div className="row mx-1 galaxyBackground">
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Name</p>
					<h1 className="text-white">{store.people[params.theid-1].name}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Birth Year</p>
					<h1 className="text-white">{store.people[params.theid-1].birth_year}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Gender</p>
					<h1 className="text-white">{store.people[params.theid-1].gender}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Height</p>
					<h1 className="text-white">{store.people[params.theid-1].height}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Skin Color</p>
					<h1 className="text-white">{store.people[params.theid-1].skin_color}</h1>

				</div>
				<div className="col-lg-2 col-6 text-center">
					<p className="text-warning fs-5">Eye Color</p>
					<h1 className="text-white">{store.people[params.theid-1].eye_color}</h1>
				</div>

			</div>
			<hr className="border border-light border-3"/>
			<div className="d-flex justify-content-start galaxyBackground">
				<Link type="button" className="btn btn-warning ms-2 mt-4" to={"/"}>Go Back</Link>
			</div>


		</>
	);
};

CharacterProfile.propTypes = {
	match: PropTypes.object
};
