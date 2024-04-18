import { Skeleton } from "@/components/ui/skeleton";

export function DetailSkeleton() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
      <Skeleton className="w-full h-[350px] rounded-lg bg-gray-200 dark:bg-primary" />

      <div>
        <Skeleton className="w-[150px] h-6 bg-gray-200 dark:bg-primary" />
        <div className="mt-12 flex flex-col gap-y-12 gap-x-20 items-start lg:flex-row lg:mt-8">
          <div className="space-y-4">
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
          </div>

          <div className="space-y-4">
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
            <Skeleton className="w-[200px] h-4 bg-gray-200 dark:bg-primary" />
          </div>
        </div>
        <Skeleton className="mt-12 w-[200px] h-[60px] bg-gray-200 dark:bg-primary" />
      </div>
    </div>
  );
}
