const { Button } = require("./ui/button");

export const NavBar = () => {
  return (
    <div>
      <Button>Movies</Button>
      <Button>TV Shows</Button>
      <Button>Watchlist</Button>
      <Button>SignIn</Button>
    </div>
  );
};
