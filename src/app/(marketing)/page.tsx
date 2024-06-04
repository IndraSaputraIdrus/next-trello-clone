import { Medal, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Poppins } from "next/font/google";
import Container from "@/components/container";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const MarketingPage = () => {
  return (
    <div className={cn(poppins.className)}>
      <Container className="flex flex-col items-center justify-center py-5">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex items-center gap-2 rounded-full bg-amber-100 p-4 px-6 text-amber-700 shadow-sm">
            <Medal className="size-4 md:size-6" />
            <p className="text-sm font-medium uppercase md:text-base">
              No 1 task management
            </p>
          </div>
          <h1 className="mb-8 text-center text-4xl font-semibold text-neutral-800 md:text-6xl">
            Taskify helps team move
          </h1>
          <p className="w-fit rounded bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 px-4 text-3xl font-bold text-white md:text-6xl">
            Work forward.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-md text-balance text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl">
          Collaborate, manage project, and reacth new productivity peaks. From
          high rises to the home office, the way your team works is unique -
          accomlish it all with Taskify
        </p>
        <Button asChild className="mt-6" size="lg">
          <Link href="/" className="flex items-center gap-3">
            Get Taskify for free <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default MarketingPage;
