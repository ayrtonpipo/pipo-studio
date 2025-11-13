import { CogIcon } from "lucide-react";

export default function Home() {
   return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
         <h2 className="text-5xl md:text-6xl text-foreground-secondary text-center">
            Em desenvolvimento
         </h2>
         <CogIcon className="w-10 h-10 text-foreground-secondary animate-spin" />
      </div>
   )
}