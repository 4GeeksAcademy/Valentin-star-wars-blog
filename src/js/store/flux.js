const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
        try {
          const store = getStore();
          const res = await fetch("https://www.swapi.tech/api/people/");
          const data = await res.json();

					setStore({ people: [...store.people, ...data.results] });
          console.log(data);
        } catch (error) {
          console.log("Problem while retrieving data: ", error);
        }
      },
    },
  };
};

export default getState;
