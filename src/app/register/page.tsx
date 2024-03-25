'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BasicServerMiddleware } from "@/utils/connection/middleware"

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = async () => {
    if(password !== confirmPassword) {
      alert('两次密码输入不一致')
      return
    };
    const body = JSON.stringify({
      account: username,
      passwd: password
    });

    const middleware = new BasicServerMiddleware()
    const response = await middleware.request('/register', {method: 'POST', body: body})
    if(response.status === 200) {
      alert('注册成功, 即将跳转到登录页面')
      window.location.href = '/login'
    } else {
      alert('注册失败')
    }
  };

  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="mx-auto space-y-4 w-full max-w-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">注册</h1>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="username">用户名</Label>
            <Input
              id="register-username"
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">密码</Label>
            </div>
            <Input
              id="register-password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">确认密码</Label>
            </div>
            <Input
              id="register-confirm-password"
              required
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleRegister} className="w-full">
            注册
          </Button>
        </div>
      </div>
    </div>
  );
}

