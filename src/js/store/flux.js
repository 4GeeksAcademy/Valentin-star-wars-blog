const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      character: [],
			planets: [],
			planet: []
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/people`, settings);
				const json = await request.json();
				const data = json;
				setStore({ people: data.results });
			},

			getCharacterDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ character: [...store.character, data.result.properties] });
			},

			charDescription: url => {
				getActions().getCharacterDescription(url);
			},
			getPlanet: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/people`, settings);
				const json = await request.json();
				const data = json;
				setStore({ planets: data.results });
			},

			getPlanetDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ planet: [...store.planet, data.result.properties] });
			},

			planetDescription: url => {
				getActions().getPlanetDescription(url);
			},
    },
  };
};

export default getState;
