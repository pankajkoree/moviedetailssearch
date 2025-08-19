import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex justify-center w-full bg-amber-700">
      <div className="flex justify-center bg-amber-200 lg:w-[60%]">
        <NavBar />
      </div>
    </div>
  );
}
