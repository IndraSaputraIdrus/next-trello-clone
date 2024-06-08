import { SignedIn, SignedOut } from "@clerk/nextjs";
import Container from "../container";
import Logo from "../logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { MyUserButton } from "../my-user-button";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center border-b bg-white shadow-sm">
      <Container className="flex items-center justify-between">
        <Logo className="hidden md:flex" />
        <div className="flex w-full items-center justify-between space-x-4 md:w-auto">
          <SignedOut>
            <Button size="sm" variant="outline" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <MyUserButton />
          </SignedIn>
          <Button size="sm">Get taskify for free</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
