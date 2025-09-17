import { useEffect, useState } from "react";
import { FinalDescription } from "./FinalDescription";
import axios from "axios";
import { FinalItem } from "./FinalItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useLocalStorage } from "react-use-storage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductItem {
  id: number;
  title: string;
  images: { src: string }[];
}

export function FinalList() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [favorites] = useLocalStorage<number[]>("favorites", []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://jeval.com.au/collections/hair-care/products.json?page=1"
        );
        const favoritedProducts = response.data.products.filter(
          (product: ProductItem) => favorites.includes(product.id)
        );
        setProducts([
          ...favoritedProducts,
          ...response.data.products.filter(
            (product: ProductItem) => !favorites.includes(product.id)
          ),
        ]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-9 justify-center md:px-12  md:-translate-y-[50px] md:flex-row">
      <FinalDescription />
      <div className="max-w-[600px] overflow-hidden">
        <Swiper
          slidesPerView={window.innerWidth < 768 ? 1 : 2}
          slidesPerGroup={2}
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <FinalItem
                id={product.id}
                title={product.title}
                image={product.images[0]?.src}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
