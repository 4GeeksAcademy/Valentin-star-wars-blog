const getState = ({ getStore, getActions, setStore }) => {
  const API_REQUEST_DELAY = 1000;
  const API_REQUEST_DELAY2 = 2000;
  const API_REQUEST_DELAY3 = 3000;
  return {
    store: {
      people: [],
      character: [],
      planets: [],
      planet: [],
      vehicles: [],
      vehicle: [],
      favorites: [],
      isLoading: true,
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
        try {
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(
            "https://www.swapi.tech/api/people/",
            settings
          );
          const json = await request.json();
          const data = json;
          const store = getStore();
          setStore({ ...store, people: data.results });
          await new Promise((resolve) =>
            setTimeout(resolve, API_REQUEST_DELAY)
          );
        } catch (error) {
          console.log("No se pudo cargar: ", error);
        }
      },

      getCharacterDescription: async (url) => {
        try {
          const store = getStore();
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(url, settings);
          const data = await request.json();
          setStore({ character: [...store.character, data.result.properties] });
        } catch (error) {
          console.log(error);
        }
      },

      charDescription: (url) => {
        getActions().getCharacterDescription(url);
      },
      getPlanet: async () => {
        try {
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(
            "https://www.swapi.tech/api/planets/",
            settings
          );
          const json = await request.json();
          const data = json;
          setStore({ planets: data.results });
          await new Promise((resolve) =>
            setTimeout(resolve, API_REQUEST_DELAY2)
          );
        } catch (error) {
          console.log(error);
        }
      },

      getPlanetDescription: async (url) => {
        try {
          const store = getStore();
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(url, settings);
          const json = await request.json();
          const data = json;
          setStore({ planet: [...store.planet, data.result.properties] });
        } catch (error) {
          console.log("Planets load problem", error);
        }
      },

      planetDescription: (url) => {
        getActions().getPlanetDescription(url);
      },
      getVehicle: async () => {
        try {
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(
            "https://www.swapi.tech/api/vehicles/",
            settings
          );
          const json = await request.json();
          const data = json;
          setStore({ vehicles: data.results });
          await new Promise((resolve) =>
            setTimeout(resolve, API_REQUEST_DELAY3)
          );
        } catch (error) {
          console.log(error);
        }
      },

      getVehicleDescription: async (url) => {
        try {
          const store = getStore();
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(url, settings);
          const json = await request.json();
          const data = json;
          setStore({ vehicle: [...store.vehicle, data.result.properties] });
        } catch (error) {
          console.log("Vehicle load problem", error);
        }
      },

      vehicleDescription: (url) => {
        getActions().getVehicleDescription(url);
      },

      addCharacters: (char) => {
        const store = getStore();
        const favoriteExist = store.favorites.includes(char);
        if (!favoriteExist) {
          setStore({ favorites: [...store.favorites, char] });
        }
      },
      addPlanets: (planet) => {
        const store = getStore();
        const favoriteExist = store.favorites.includes(planet);
        if (!favoriteExist) {
          setStore({ favorites: [...store.favorites, planet] });
        }
      },
      addVehicles: (vehicle) => {
        const store = getStore();
        const favoriteExist = store.favorites.includes(vehicle);
        if (!favoriteExist) {
          setStore({ favorites: [...store.favorites, vehicle] });
        }
      },
      deleteFavorite: (favorite) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(
          (item) => item !== favorite
        );
        setStore({ favorites: updatedFavorites });
      },
      login: async (userEmail, userPassword) => {
        // console.log(userEmail,userPassword);
        try {
          let response = await axios.post(
            "https://valentinfrar-upgraded-disco-v4vqw666pvwcxw4v-3000.preview.app.github.dev/login",
            {
              email: userEmail,
              password: userPassword,
            }
          );
          if (response.status === 200) {
            localStorage.setItem("myToken", response.data.access_token);
            return true;
          }
        } catch (err) {
          console.log(err);
          if (err.response.status === 401) {
            return false;
          }
        }
      },
      signin: async (userEmail,userPassword) => {
        // console.log(userEmail,userPassword);
        try{
          let response = await axios.post('https://valentinfrar-upgraded-disco-v4vqw666pvwcxw4v-3000.preview.app.github.dev/signup', {
            email:userEmail,
            password:userPassword
            })
          if(response.status === 200){
            console.log("Todo perfecto")
          }

        }catch(err){
          console.log(err);
          if(err.response.status === 401){
            return false;
          }
        }

      },
    },
  };
};

export default getState;
