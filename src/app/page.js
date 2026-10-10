import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import DecreasePrice from "@/components/DecreasePrice";
import IncreasePrice from "@/components/IncreasePrice";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback= {'Loading...'}>
        <IncreasePrice></IncreasePrice>
      </Suspense>
      <Suspense fallback= {'Loading...'}>
        <DecreasePrice></DecreasePrice>
      </Suspense>
      <Suspense fallback= {'Loading...'}>
        <AllProducts></AllProducts>
      </Suspense>
    </div>
  );
}
