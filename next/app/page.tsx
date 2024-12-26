import CardsSelect from "@/components/CardsSelect";
import SelectLanguage from "@/components/SelectLanguage";



export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-4 w-screen items-center justify-evenly h-screen">
      <SelectLanguage />
      <CardsSelect />
    </div>
  );
}
