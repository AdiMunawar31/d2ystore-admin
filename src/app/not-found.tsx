import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RootNotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild variant="link" className="text-lg">
        <Link href="/">Return Home</Link>
      </Button>
    </main>
  )
}
