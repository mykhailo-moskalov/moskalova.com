import Image from "next/image";
import { Link } from "@/lib/navigation";
import logo from "@/public/logo/logo-black_low-res.png";

const Logo = ({ height }: { height: number }) => (
  <Link href="/" className="logo">
    <Image
      alt="Natalia Moskalova Logo"
      src={logo}
      style={{ height, width: "auto" }}
    />
  </Link>
);

export default Logo;
