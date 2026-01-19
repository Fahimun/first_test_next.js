import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // আমরা পুরো কোডটিকে একটি ফ্র্যাগমেন্ট (<>...</>) অথবা একটি মেইন ডিভ দিয়ে মুড়িয়ে দেব
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      
      {/* উপরের সেকশন */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-600">
          স্বাগতম আমার প্রথম Next.js অ্যাপে!
        </h1>
        <p className="text-red-500 text-lg">
          আমরা এখন Shadcn এবং Tailwind দিয়ে কাজ করছি।
        </p>
      </div>

      <hr className="w-full max-w-md border-slate-200" />

      {/* বাটন সেকশন */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">আমার প্রথম Shadcn বাটন</h2>
        
        <div className="flex gap-4">
          {/* সাধারণ বাটন */}
          <Button>Click Me</Button>

          {/* ভিন্ন ভেরিয়েন্ট বা কালার */}
          <Button variant="destructive">Delete Item</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </div>

    </main>
  );
}