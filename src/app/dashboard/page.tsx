export default function WelcomePage() {
  return (
    <div className="bg-gray-50/90 w-full min-h-screen py-12 sm:py-16">
      <div className="relative grid gap-6 lg:gap-12">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-rose-500 to-fuchsia-500 opacity-50 rounded-t-lg dark:opacity-75" />
        <div className="container grid-in-container px-4 md:px-6">
          <div className="flex flex-col justify-center min-h-[400px] space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
              欢迎使用
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
