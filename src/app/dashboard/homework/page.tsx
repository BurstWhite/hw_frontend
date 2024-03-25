/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j6miJL2ksVY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export function SingleHomework(subject : string, start_date : Date, end_date : Date) {
    return (
    <div className="flex items-center space-x-4">
    <div className="grid items-start sm:grid-cols-2">
      <div className="font-medium">{subject}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">开始时间: {start_date.toLocaleDateString()}</div>
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">结束时间: {end_date.toLocaleDateString()}</div>
    </div>
    )
}

export default function Component() {
    return (
      <div className="w-full py-6">
        <div className="container grid max-w-3xl px-4 gap-6 text-sm md:gap-10">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold">作业列表</h1>
          </div>
          <div className="space-y-1.5">
          </div>
            <div className="border-t w-full border-gray-200 dark:border-gray-800" />
            <div className="flex items-center space-x-4">
              <div className="grid items-start sm:grid-cols-2">
                <div className="font-medium">History</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Starts: 3/25/24</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Due: 3/30/24</div>
            </div>
            <div className="border-t w-full border-gray-200 dark:border-gray-800" />
            <div className="flex items-center space-x-4">
              <div className="grid items-start sm:grid-cols-2">
                <div className="font-medium">Science</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Starts: 3/27/24</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Due: 3/31/24</div>
            </div>
            <div className="border-t w-full border-gray-200 dark:border-gray-800" />
            <div className="flex items-center space-x-4">
              <div className="grid items-start sm:grid-cols-2">
                <div className="font-medium">English</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Starts: 3/29/24</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Due: 4/2/24</div>
            </div>
          </div>
        </div>
    )
  }
  
  