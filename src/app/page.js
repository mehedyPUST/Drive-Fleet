import Banner from "@/components/Banner";
import Image from "next/image";
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <WhyChooseUs />

    </div>
  );
}
