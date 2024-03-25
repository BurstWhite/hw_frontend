import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="h-screen w-56 bg-gray-100 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          <Image
            alt="Company Logo"
            height="30"
            src="/logo.svg"
            style={{
              aspectRatio: "30/30",
              objectFit: "cover",
            }}
            width="30"
          />
          <Link href="/dashboard/#">
            <h1 className="text-lg font-medium">管理员后台</h1>
          </Link>
        </div>
        <nav className="space-y-2">
          <Link href="/dashboard/#">
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg hover:text-gray-500 active:text-gray-800">
              <i className="fas fa-tachometer-alt"></i>
              <span className="text-base font-medium">仪表板</span>
            </button>
          </Link>
          <Link href="/dashboard/submission">
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg hover:text-gray-500 active:text-gray-800">
              <i className="fas fa-file-alt"></i>
              <span className="text-base font-medium">提交情况</span>
            </button>
          </Link>
          <Link href="/dashboard/student">
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg hover:text-gray-500 active:text-gray-800">
              <i className="fas fa-users"></i>
              <span className="text-base font-medium">学生列表</span>
            </button>
          </Link>
          <Link href="/dashboard/homework">
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg hover:text-gray-500 active:text-gray-800">
              <i className="fas fa-book-open"></i>
              <span className="text-base font-medium">作业列表</span>
            </button>
          </Link>
        </nav>
      </aside>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
