export const initialState = {
  name: '',
  email: '',
  phone: '',
  degree: '',
  institution: '',
  year: '',
  interests: '',
  achievements: '',
};

export function profileReducer(state, action) {
  switch (action.type) {
    case 'SET_PERSONAL_INFO':
    case 'SET_EDUCATION_INFO':
      return { ...state, ...action.payload };
    case 'SET_INTERESTS':
      return { ...state, interests: action.payload };
    case 'SET_ACHIEVEMENTS':
      return { ...state, achievements: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
