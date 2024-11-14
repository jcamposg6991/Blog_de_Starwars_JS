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
			favorites:[]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			loadSomePeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						const peoplePromises = data.results.map(person =>
							fetch(`https://www.swapi.tech/api/people/${person.uid}`)
								.then(res => res.json())
								.then(data => ({
									id: person.uid,
									name: person.name,
									gender: data.result.properties.gender,
									hair_color: data.result.properties.hair_color,
									eye_color: data.result.properties.eye_color,
									description: data.result.description
								}))
						);
						return Promise.all(peoplePromises);
					})
					// .then(data => console.log(data))
					.then(data => setStore({ people: data }))
					.catch(error => console.error(error));
					
			},

			saveFavorite:(itemId, itemName) => {
				const favorite = [{id:itemId,name:itemName,}]
				setStore({favorites: favorite})
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
