import { Iproduct } from "@/src/type";
import Image from "next/image";

export default function Productcard({ product }: { product: Iproduct }) {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg p-2">
      <div className="relative object-contain ">
        <Image
          src="https://i.ibb.co.com/fVDxS4Cr/6.jpg"
          alt="this is image"
          width={1500}
          height={600}
          className="h-[200] w-full object-cover rounded-t-lg"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl text-black font-semibold font-serif">
            {product.name}
          </h2>
          <p className="text-black">4.7</p>
        </div>
        <div className="flex text-black justify-between">
          <p>{product.category}</p>
          <p>{product.brand}</p>
        </div>
        <div className="flex justify-between text-black">
          <p>{product.added}</p>
          <p>{product.inStock}</p>
        </div>
        <div className="flex justify-between text-black">
          <p>${product.price}</p>
          <button className="bg-[#177046] rounded-lg w-[100px] h-[35px]">
            buy
          </button>
        </div>
      </div>
    </div>
  );
}
