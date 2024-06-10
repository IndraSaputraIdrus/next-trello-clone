import { OrganizationResource } from "@clerk/types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image"
import {
  Activity,
  CreditCard,
  Layout,
  LucideIcon,
  Settings,
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

type Props = {
  isActive: boolean;
  isExpanded: boolean;
  organization: OrganizationResource;
  onExpand: (id: string) => void;
}

type Route = {
  label: string;
  icon: LucideIcon;
  href: string;
}


export const SidebarItem = ({
  isActive, isExpanded, organization, onExpand
}: Props) => {

  const router = useRouter()
  const pathname = usePathname()

  const routes: Array<Route> = [
    {
      label: "Boards",
      icon: Layout,
      href: `/organization/${organization.id}`
    },
    {
      label: "Activity",
      icon: Activity,
      href: `/organization/${organization.id}/activity`
    },
    {
      label: "Settings",
      icon: Settings,
      href: `/organization/${organization.id}/settings`
    },
    {
      label: "Billing",
      icon: CreditCard,
      href: `/organization/${organization.id}/billing`
    }
  ]

  const handleClick = (href: string) => router.push(href)

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center",
          "gap-2 p-1.5",
          "text-neutral-700 hover:bg-neutral-500/10",
          "no-underline text-start hover:no-underline",
          "rounded-md transition",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="size-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt={organization.name}
              className="rounded-md object-cover"
            />
          </div>
          <p className="font-medium text-xs">{organization.name}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700 px-1">
        {routes.map(route => (
          <Button
            key={route.href}
            size="sm"
            onClick={() => handleClick(route.href)}
            variant="ghost"
            className={cn(
              "w-full",
              "font-normal",
              "flex justify-start",
              "pl-10 mb-1",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
          >
            <route.icon className="size-4 mr-4" />
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
