'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
// import { URL } from "@/lib/url"

// 测试用
export default function Component() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if(username === 'burstwhite' && password === 'A8877388') {
      window.location.href = '/dashboard'
    }
  };
  // const handleLogin = async () => {
  //   try {
  //     // 发送登录请求到服务器
  //     const body = JSON.stringify({
  //       "account": username,
  //       "passwd": password,
  //     });
  //     console.log(body);
  //     const response = await fetch('http://149.88.90.116:1145/login', {
  //       method: 'POST',
  //       // mode: 'no-cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': '*/*',
  //         'Accept-Encoding': 'gzip, deflate, br'
  //       },
  //       body: body
  //     })
  //     const data = await response.text();
  //     console.log(data);
  //     if(!response.ok) {
  //       throw new Error('登录失败');
  //     }
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // };
  



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
