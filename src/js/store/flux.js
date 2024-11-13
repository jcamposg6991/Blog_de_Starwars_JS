const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			PeopleDetalis:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			loadSomePeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						const peoplePromises = data.results.map(person =>
							fetch(`https://www.swapi.tech/api/people/${person.uid}`)
								.then(res => res.json())
								.then(detail => ({
									id: person.uid,
									name: person.name,
									gender: detail.result.properties.gender,
									hair_color: detail.result.properties.hair_color,
									eye_color: detail.result.properties.eye_color,
									description: detail.result.description
								}))
						);
						return Promise.all(peoplePromises);
					})
					.then(peopleDetails => setStore({ people: peopleDetails }))
					.catch(err => console.error(err));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
