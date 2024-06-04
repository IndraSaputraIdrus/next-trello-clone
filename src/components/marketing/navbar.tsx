import Container from "../container";
import Logo from "../logo";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center border-b bg-white shadow-sm">
      <Container className="flex items-center justify-between">
        <Logo className="hidden md:flex" />
        <div className="flex justify-between w-full md:w-auto space-x-4">
          <Button size="sm" variant="outline">
            Login
          </Button>
          <Button size="sm">Get taskify for free</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
