const HANDLE_FAVORITE_FILM = 'HANDLE_FAVORITE_FILM';

const handleFavorite = data => {
  return {
    data,
    type: HANDLE_FAVORITE_FILM,
  };
};

export {HANDLE_FAVORITE_FILM, handleFavorite};
