
export default {
  state: {
    cards: [
      {
        id: 1,
        API: "AdoptAPet",
        Description: "Resource to help get pets adopted",
        Auth: "apiKey",
        HTTPS: true,
        Cors: "yes",
        Link: "/project/todos",
        Category: "Todo"
      },
      {
        id: 2,
        API: "mixin",
        Description: "Collection of axolotl pictures and facts",
        Auth: "",
        HTTPS: true,
        Cors: "no",
        Link: "mixin",
        Category: "Option"
      },
      {
        id: 3,
        API: "Param",
        Description: "Daily cat facts",
        Auth: "",
        HTTPS: true,
        Cors: "no",
        Link: "/param/1",
        Category: "Router"
      },
      {
        id: 4,
        API: "Query",
        Description: "Daily cat facts",
        Auth: "",
        HTTPS: true,
        Cors: "no",
        Link: "/query?name=123",
        Category: "Router"
      }
    ]
  },
  getters: {
    cardData(state) {
      return state.cards;
    }
  },
  mutations: {
    removeCard(state, payload) {
      const filterData = state.cards.filter((item) => item.API != payload);
      state.cards = filterData;
    }
  }
}