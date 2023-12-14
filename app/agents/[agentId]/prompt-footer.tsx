import Link from "next/link"

import { cn } from "@/lib/utils"

export function PromptFooter({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground px-2 text-center text-xs leading-normal",
        className
      )}
      {...props}
    >
      Powered by{" "}
      <Link passHref href="https://www.superagent.sh">
        <span className="text-foreground">Superagent.sh</span>
      </Link>
    </p>
  )
}
