"use client";
import { useEffect } from "react";
import { useRouter } from "@/lib/navigation";

export default function ClientRedirect() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
