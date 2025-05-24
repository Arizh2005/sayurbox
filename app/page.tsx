import { Button } from "@/components/ui/button";
import React from "react";
import Container from "@/components/Container";
import Image from "next/image";


const Home = () => {
  return <Container className="bg-white"> 
      <Image src="/promo.svg"
        alt="Logo"
        width= {1920}
        height={100}
      />
      <Button size="lg">Check Out</Button>
    </Container>;
    
};

export default Home;