'use client'; // This ensures it's a client-side component

import { useParams, useSearchParams } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    lang?: string;
    sort?: string;
  };
}

export default function BlogDetailsPage() {
  // Using `useParams` to get route parameters
  const params = useParams();
  // Using `useSearchParams` to get query parameters
  const searchParams = useSearchParams();

  // ১. Dynamic Route Param (যেমন: 500)
  console.log("Route Param ID:", params.id);

  // ২. Query Param (যেমন: ?lang=bn)
  console.log("Query Param Lang:", searchParams?.get('lang'));

  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold text-blue-600">
        ব্লগ ডিটেইলস পেজ
      </h1>
     
      <div className="mt-8 border p-6 rounded-lg bg-slate-50">
        <p className="text-xl">
          বর্তমান ব্লগ আইডি (URL থেকে প্রাপ্ত):
          <span className="font-mono font-bold text-red-500 ml-2">
            {params.id}
          </span>
        </p>

        <p className="text-lg mt-4">
          ভাষা (Query Param):
          <span className="font-mono font-bold text-green-600 ml-2">
            {searchParams?.get('lang') || "দেওয়া নেই"}
          </span>
        </p>
      </div>
    </div>
  );
}
