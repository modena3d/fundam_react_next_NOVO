import Image from "next/image";

export default function LogoAlt() {
  return (
    <div className=" flex items-center gap-2">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkbzoSZyuzHM-UReDyetzwdgfxpaduuatRA&s"
        height={50}
        width={50}
        alt="Logo"
      />
      <span className="text-xl font-black">LOGO</span>
    </div>
  );
}
