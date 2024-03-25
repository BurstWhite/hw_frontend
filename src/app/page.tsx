"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // 使用replace方法重定向到/login，这不会在浏览器历史中添加新记录
    router.replace("/login");
  }, [router]);

  // 可以返回加载中的界面或者null
  return null;
}
