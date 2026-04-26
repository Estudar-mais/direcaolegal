import { useEffect, useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";

export function BannerCarousel() {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <div className="relative w-full">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <Carousel
                opts={{ loop: true }}
                plugins={[plugin.current]}
                className="relative rounded-3xl overflow-hidden border-4 border-primary shadow-[0_20px_60px_-15px_oklch(0.86_0.19_95/0.55)]"
            >
                <CarouselContent>
                    <CarouselItem>
                        <img
                            src={banner1}
                            alt="Banner 1 - Direção Legal"
                            className="rounded-3xl w-full object-cover"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img
                            src={banner2}
                            alt="Banner 2 - Direção Legal"
                            className="rounded-3xl w-full object-cover"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
        </div>
    );
}
