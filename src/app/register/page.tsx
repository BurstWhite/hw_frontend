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
          <h1 className="text-3xl font-bold">注册</h1>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="username">用户名</Label>
            <Input id="username" required type="text" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">密码</Label>
            </div>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">确认密码</Label>
            </div>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full">注册</Button>
        </div>
      </div>
    </div>
  )
}

