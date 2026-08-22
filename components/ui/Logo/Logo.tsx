import { Link } from "@/lib/navigation";
import css from "./Logo.module.css";
import Image from "next/image";
import logo from "@/public/logo/logo-black_low-res.png";

const Logo = ({ height }: { height: number }) => (
  <Link href="/" className={css.logo}>
    <Image
      alt="Natalia Moskalova Logo"
      src={logo}
      style={{ height, width: "auto" }}
      className={css.img}
    />
  </Link>
);

export default Logo;
