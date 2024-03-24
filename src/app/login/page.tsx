/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XCHnG9Crsc1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="mx-auto space-y-4 w-full max-w-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">作业管理系统</h1>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="username">用户名</Label>
            <Input id="username" required type="text" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">密码</Label>
              <Link className="ml-auto inline-block text-sm underline" href="/register">
                忘记密码？
              </Link>
            </div>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full">登录</Button>
        </div>
        <div className="text-center text-sm">
          还没有帐号？
          <Link className="underline" href="#">
            注册
          </Link>
        </div>
      </div>
    </div>
  )
}

