import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col items-end justify-center space-y-4 bg-gray-100 p-6 dark:bg-gray-950">
        <Card className="w-64 cursor-pointer border-2 border-transparent transition-colors hover:border-gray-300 dark:hover:border-gray-700">
          <CardContent className="flex flex-col items-start gap-2 p-4">
            <h4 className="text-lg font-semibold">Project A</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of Project A.</p>
          </CardContent>
        </Card>
        <Card className="w-64 cursor-pointer border-2 border-transparent transition-colors hover:border-gray-300 dark:hover:border-gray-700">
          <CardContent className="flex flex-col items-start gap-2 p-4">
            <h4 className="text-lg font-semibold">Project B</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of Project B.</p>
          </CardContent>
        </Card>
        <Card className="w-64 cursor-pointer border-2 border-transparent transition-colors hover:border-gray-300 dark:hover:border-gray-700">
          <CardContent className="flex flex-col items-start gap-2 p-4">
            <h4 className="text-lg font-semibold">Project C</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">This is a description of Project C.</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 bg-white p-6 dark:bg-gray-900">
        <div className="flex h-full flex-col">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Project A</h2>
            <Button className="mt-2" size="sm">
              Open Text Editor
            </Button>
          </div>
          <div className="flex-1 overflow-auto">
            <p>
              This is the main content area for Project A. When a card is selected, the header and a button to open a
              text editor will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}