import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		store.favorites;
	}, []);


	return (
		<nav className="navbar navbar-light bg-light mb-3 ps-5">
			<Link to="/">
				<img src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt="" width="200" height="100" />
			</Link>
			<div className="ml-auto pe-5">
				<div class="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="btnGroupDrop1">
						{store.favorites.length === 0 ? (
							<li className="task-item">There're not favorites</li>
						) : (
							store.favorites.map((item) => (
								<li class="d-flex" key={item.id}><a class="dropdown-item" href="#">{item.name}</a><button type="button" class="btn btn-light" onClick={() => { actions.deleteFavorite(item) }}><i class="fa-solid fa-trash"></i></button></li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
