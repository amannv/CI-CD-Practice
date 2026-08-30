export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900 font-sans text-white">
      <main className="flex flex-col items-center gap-8 p-12 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            CI/CD Pipeline Status
          </h1>
          <p className="text-xl text-gray-400">
            Welcome to your deployment test page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-2">
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Status</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold text-lg">Active & Deployed</span>
            </div>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-2">
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Version</span>
            <span className="font-mono text-blue-400 font-semibold text-lg">v1.0.0</span>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Make a change to this file, commit, and watch your CI/CD pipeline deploy it automatically.
        </div>
      </main>
    </div>
  );
}
