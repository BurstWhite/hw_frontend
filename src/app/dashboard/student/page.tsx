import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-100 py-6 md:py-12 dark:bg-gray-850">
        <div className="container px-4 sm:px-6 grid gap-6">
          <div className="flex items-center space-x-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter">学生列表</h1>
              <p className="text-gray-500 dark:text-gray-400">Period 3</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 items-stretch divide-y divide-gray-200 dark:divide-gray-800">
                <div className="p-4 sm:p-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Emma Johnson</h3>
                    <p className="text-gray-500 dark:text-gray-400">ID: 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 items-stretch divide-y divide-gray-200 dark:divide-gray-800">
                <div className="p-4 sm:p-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Noah Smith</h3>
                    <p className="text-gray-500 dark:text-gray-400">ID: 67890</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 items-stretch divide-y divide-gray-200 dark:divide-gray-800">
                <div className="p-4 sm:p-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Olivia Brown</h3>
                    <p className="text-gray-500 dark:text-gray-400">ID: 54321</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 items-stretch divide-y divide-gray-200 dark:divide-gray-800">
                <div className="p-4 sm:p-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Liam Miller</h3>
                    <p className="text-gray-500 dark:text-gray-400">ID: 13579</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 items-stretch divide-y divide-gray-200 dark:divide-gray-800">
                <div className="p-4 sm:p-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Ava Johnson</h3>
                    <p className="text-gray-500 dark:text-gray-400">ID: 24680</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
