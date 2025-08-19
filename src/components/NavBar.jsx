const { Button } = require("./ui/button");

export const NavBar = () => {
  return (
    <div className="flex gap-2 mt-2 mb-2">
      <Button variant="movieNavButton">Movies</Button>
      <Button variant="movieNavButton">TV Shows</Button>
      <Button variant="movieNavButton">Watchlist</Button>
      <Button variant="movieNavButton">SignIn</Button>
      <Button variant="movieNavButtonTheme"></Button>
    </div>
  );
};
