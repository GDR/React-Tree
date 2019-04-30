export default function reducer(state, action) {
	const id = action.id;
	const data = action.data;
	switch (action.type) {
		case OPEN_FOLDER:
			return {
				...state,
				ui: {
					...state.ui,
        [id]: { isOpen: true },
				}
      };
    case CLOSE_FOLDER:
			return {
				...state,
				ui: {
					...state,
				[id]: { isOpen: false },
			}
		};
		case INIT:
			return {
				data
			}
			default:
      return state;
  }
};