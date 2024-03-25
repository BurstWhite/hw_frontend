'use client'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function HomeworkCreationForm() {
    const [subject, setSubject] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const CreationHandle = () => {
        console.log(subject, startDate, endDate)
    }

  return (
    <form onSubmit={CreationHandle}>
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
          <Button>布置</Button>
        </CardFooter>
      </Card>
    </form>
  );
}