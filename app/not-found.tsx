import Link from "next/link";
import Image from "next/image";
import { routes } from "@/data/routs";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center dark:text-gray-100 px-4 py-12 ">
      <Image
        src="/images/404.svg" // این عکس باید توی پوشه public/images/ باشه
        alt="404 Not Found"
        width={400}
        height={400}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-400 mb-4">صفحه پیدا نشد!</h1>
      <p className="text-gray-600 mb-6 text-center">
        متأسفیم، صفحه‌ای که دنبالش هستید وجود ندارد یا منتقل شده است.
      </p>
      <Link
        href={routes.HOME}
        className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
