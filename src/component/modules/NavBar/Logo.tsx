import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo.jpg" alt="this is image" width={90} height={90}></Image>
    </div>
  );
};

export default Logo;
