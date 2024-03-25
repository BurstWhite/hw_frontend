'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BasicServerMiddleware } from "@/utils/connection/middleware"

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const body = JSON.stringify({
      account: username,
      passwd: password
    });

    const middleware = new BasicServerMiddleware()
    const response = await middleware.request('/login', {method: 'POST', body: body, headers: {
    },})
    if(response.status === 200) {
      window.location.href = '/dashboard'
    } else {
      alert('用户名或密码错误')
    }
  };
  
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="mx-auto space-y-4 w-full max-w-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">作业管理系统</h1>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="username">用户名</Label>
            <Input id="username" required type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">密码</Label>
            </div>
            <Input id="password" required type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="w-full" onClick={handleLogin}>登录</Button>
        </div>
        <div className="text-center text-sm">
          还没有帐号？
          <Link className="underline" href="/register">
            注册
          </Link>
        </div>
      </div>
    </div>
  )
}
