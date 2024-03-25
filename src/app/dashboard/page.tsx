/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IPEhfYD3RMb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center h-14 px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <SunIcon className="h-6 w-6" />
          <span className="sr-only">ZH1Z AIA Lab</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6" />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center py-6 space-y-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl -mt-10 text-gradient from-[#FF4500] to-[#FFD700]">
            欢迎使用
          </h1>
        </div>
      </main>
    </div>
  )
}

function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
