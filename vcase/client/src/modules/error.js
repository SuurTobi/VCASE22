const error = (state = { error: false }, action) => {
  switch (action.type) {
    case 'GET_AVAILABLE_KEYS_ERROR':
      return {
        error: true,
        message:
          'vCase.gg kasutamiseks pead sa esmalt enda kasutajasse sisenema <a href="//trade.opskins.com">trade.opskins.com</a> oma Steam ID-ga. Ning siis sisenema vCase.gg - sse sama Steam ID-ga',
      };
    case 'GET_CASES_ERROR':
      return {
        error: true,
        message:
          'Me ei saa serverist kastide nimekirjasid. Palun värskenda lehekülg ja proovi uuesti.',
      };
    case 'EXIT':
      return { error: false };
    default:
      return state;
  }
};

export default error;
