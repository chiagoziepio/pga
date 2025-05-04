"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PuttingGreenInstallationSteps } from "@/lib/Datas";
import { useEffect, useState } from "react";

const InstallationCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const autoSwipeInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoSwipeInterval);
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full max-w-md mx-auto"
      >
        <CarouselContent>
          {PuttingGreenInstallationSteps.map((item) => (
            <CarouselItem key={item.id}>
              <div
                className="w-[80%] mx-auto md:w-full h-[300px] flex justify-center items-center "
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                }}
              >
                <p className="text-white text-xl font-semibold">{item.text}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex justify-center items-center" />

        <CarouselNext className="hidden md:flex justify-center items-center" />
      </Carousel>
    </div>
  );
};

export default InstallationCarousel;
