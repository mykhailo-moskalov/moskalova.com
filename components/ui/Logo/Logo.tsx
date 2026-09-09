import Image from "next/image";
import { useWidthStore } from "@/lib/store/widthStore";
import { Link } from "@/lib/navigation";
import logo from "@/public/logo/logo-black_low-res.png";

export default function Logo() {
  const isDesktop = useWidthStore((state) => state.isDesktop);
  return (
    <Link href="/" className="logo">
      <Image
        src={logo}
        alt="Natalia Moskalova Logo"
        height={!isDesktop ? 48 : 64}
        width={!isDesktop ? 143 : 191}
        priority
      />
    </Link>
  );
}
