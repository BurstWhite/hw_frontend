'use client'
import SingleHomework from "@/app/dashboard/homework/singlehomework"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { BasicServerMiddleware } from "@/utils/connection/middleware"
import Subjects from "@/utils/homework"
import Head from "next/head"

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: JSX.Element;
}

function Modal({ show, onClose, children }: ModalProps) {
  if (!show) {
      return null;
  }

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        {children}
      </div>
  );
}


export default function HomeworkPage() {
  const [fetched, setFetched] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [homeworks, setHomeworks] = useState<any[]>([]);

  const handleHomeworkFetch = async () => {
    setShowForm(false);
    const middleware = new BasicServerMiddleware();
    const response = await middleware.request('/gethomework?id=10000', {
      method: 'GET'
    });
    if (response.ok) {
      const json = await response.json();
      setHomeworks(json['data']);
    } else {
    }
  }

  if (!fetched) {
    handleHomeworkFetch();
    setFetched(true);
  }

  return (
    <><Head>
      <title>作业列表 - 教师端</title>
    </Head><div className="w-full py-6">
        <div className="container grid max-w-3xl px-4 gap-6 text-sm md:gap-10">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold">作业列表</h1>
          </div>
          <div className="space-y-1.5">
            {homeworks.map((homework: any) => (
              <SingleHomework key={homework.homework_id} subject={Subjects[homework.submission_required.slice(0, 1)]} start_date={homework.start_date.slice(0, 10)} end_date={homework.end_date.slice(0, 10)} />
            ))}
          </div>
          <Modal show={showForm} onClose={() => handleHomeworkFetch()}>
            <HomeworkCreationForm onClose={() => setShowForm(false)} />
          </Modal>
          <div className="flex justify-end">
            <Button onClick={() => setShowForm(true)}>布置作业</Button>
          </div>
        </div>
      </div></>
  )
}

interface HomeworkCreationFormProps {
  onClose: () => void;
}

function HomeworkCreationForm({ onClose }: HomeworkCreationFormProps) {
    const [subject, setSubject] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const CreationHandle = async (event: any) => {
        event.preventDefault();
        const middleware = new BasicServerMiddleware();
        const body = JSON.stringify({
            // "homework_id": 1,
            // "submission_required": "1#2#3#4#5#6#7",
            // "start_date": "2024-03-01",
            // "end_date": "2024-03-04"
            homework_id : Math.floor(Math.random()*(99900) + 100),
            submission_required : subject,
            start_date : startDate,
            end_date : endDate
        });
        console.log(body);
        const response = await middleware.request('/create', {
            method: 'POST',
            body: body,
        });
        if (response.ok) {
            alert('作业创建成功！');
            onClose();
        }
        else
            alert('作业创建失败！');
        
    }

  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>布置作业</CardTitle>
          <CardDescription>输入作业详情</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select onValueChange={(value) => setSubject(value)}>
              <SelectTrigger>
                <SelectValue placeholder="选择科目" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">语文</SelectItem>
                <SelectItem value="2">数学</SelectItem>
                <SelectItem value="3">英语</SelectItem>
                <SelectItem value="4">物理</SelectItem>
                <SelectItem value="5">化学</SelectItem>
                <SelectItem value="6">生物</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-date">开始日期</Label>
              <Input
                id="start-date"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">截止日期</Label>
              <Input
                id="end-date"
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={(e) => CreationHandle(e)}>布置</Button>
        </CardFooter>
      </Card>
    </form>
  );
}