import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="outline">Click me</Button>
      <p className="font-medium bg-slate-500 text-red-700">Helo world!</p>
    </div>
  );
}
