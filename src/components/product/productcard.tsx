import Image from "next/image";

export default function Productcard({ product }) {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg p-2">
      <div className="relative object-contain">
        <Image
          src="https://i.ibb.co.com/fVDxS4Cr/6.jpg"
          alt="this is image"
          width={1500}
          height={800}
          className="h-56 w-full object-cover rounded-t-lg"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl text-black font-bold font-stretch-semi-condensed">
            Aroma Coffee Beans
          </h2>
          <p className="text-black">4.7</p>
        </div>
        <div className="flex text-black justify-between">
          <p>catagory</p>
          <p>brand</p>
        </div>
        <div className="flex justify-between text-black">
          <p>added</p>
          <p>instok</p>
        </div>
        <div className="flex justify-between text-black">
          <p>price</p>
          <button className="bg-[#177046] rounded-lg w-[100px] h-[35px]">
            buy
          </button>
        </div>
      </div>
    </div>
  );
}
