import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="font-medium bg-pink-500">Hello world</p>
      <Button variant="outline">
        Click me
      </Button>
    </div>
  );
}
