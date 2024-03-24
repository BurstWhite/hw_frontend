/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OGY2ZNzW0FL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-semibold">提交情况</h1>
        <form className="ml-auto">
          <div className="flex rounded-lg shadow-sm w-full max-w-md">
            <SearchIcon className="h-4 w-4 m-2 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full rounded-lg shadow-none border-none appearance-none dark:bg-gray-950"
              placeholder="搜索..."
              type="search"
            />
            <Button className="rounded-l-none" type="submit">
              搜索
            </Button>
          </div>
        </form>
      </div>
      <div className="border rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Label className="font-medium" htmlFor="homework">
              选择作业：
            </Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="选择作业" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="homework1">作业 1</SelectItem>
                  <SelectItem value="homework2">作业 2</SelectItem>
                  <SelectItem value="homework3">作业 3</SelectItem>
                  <SelectItem value="homework4">作业 4</SelectItem>
                  <SelectItem value="homework5">作业 5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">学生</TableHead>
              <TableHead>作业</TableHead>
              <TableHead className="w-[200px]">提交时间</TableHead>
              <TableHead className="w-[100px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center gap-4">
                <img
                  alt="头像"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <div>
                  <div className="font-medium">爱丽丝 史密斯</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">alice.smith@example.com</div>
                </div>
              </TableCell>
              <TableCell className="font-medium">作业 1</TableCell>
              <TableCell>2 小时前</TableCell>
              <TableCell className="flex gap-2">
                <Button className="h-8 w-8 rounded-full border" size="icon" variant="outline">
                  <DownloadIcon className="w-4 h-4" />
                  <span className="sr-only">下载</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
