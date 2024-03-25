'use client'
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useState } from "react"
import { BasicServerMiddleware } from "@/utils/connection/middleware"
import Subjects from "@/utils/homework"

export default function SubmissionPage() {
  const [homeworks, setHomeworks] = useState([])
  const [students, setStudents] = useState([])
  const [fetched, setFetched] = useState(false)

  const handleHomeworkFetch = async () => {
    const middleware = new BasicServerMiddleware()
    const response = await middleware.request('/gethomework?id=30', {
      method: 'GET'
    });
    if (response.ok) {
      const json = await response.json();
      setHomeworks(json['data'])
    }

  }

  const handleHomeworkChange = async (value: number) => {
    const middleware = new BasicServerMiddleware()
    const response = await middleware.request('/students?class=12', {
      method: 'GET'
    });
    if (response.ok) {
      const json = await response.json();
      setStudents(json['students'])
    }
  }

  if (!fetched) {
    setFetched(true)
    handleHomeworkFetch()
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-semibold">提交情况</h1>
      </div>
      <div className="border rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Label className="font-medium" htmlFor="homework">
              选择作业：
            </Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {homeworks.map((homework: any) => (
                    <SelectItem key={homework.homework_id} value={homework.homework_id} onMouseDown={() => handleHomeworkChange(homework.homework_id)}>
                      {Subjects[homework.submission_required.slice(0, 1)]} 作业 {homework.end_date.slice(0, 10)}截止
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">学生</TableHead>
              <TableHead className="w-[200px]">提交时间</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student: any) => (
            <TableRow key={student.school_id}>
              <TableCell className="flex items-center gap-4">
                <div>
                  <div className="font-medium">{student.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">12班</div>
                </div>
              </TableCell>
              <TableCell>2 小时前</TableCell>
              <TableCell className="flex gap-2" />
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
