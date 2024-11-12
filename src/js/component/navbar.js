import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
					<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<li><a class="dropdown-item" href="#">Dropdown link</a></li>
						<li><a class="dropdown-item" href="#">Dropdown link</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
