const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      character: []
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacter: async () => {
        try {
          const store = getStore();
          const res = await fetch("https://www.swapi.tech/api/people/");
          const data = await res.json();
					setStore({ character: data.results });
          console.log(data);
        } catch (error) {
          console.log("Problem while retrieving data: ", error);
        }
      },
    },
  };
};

export default getState;
