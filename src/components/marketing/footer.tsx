import Container from "../container";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer>
      <Container className="flex items-center justify-between gap-3 py-3 md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms of Service
        </Button>
      </Container>
    </footer>
  );
};

export default Footer;
