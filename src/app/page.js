import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
  <div className={`w-full object-cover h-full`} style={{backgroundImage: `url('/gdscbackground.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <Homepage/>
  </div> 
  );
}
