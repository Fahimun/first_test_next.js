interface PageProps {
  params: Promise<{
    category: string;
    productId: string;
  }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  // params থেকে ডাটা বের করে নেওয়া (Next.js 15+ এ এটি await করতে হয়)
  const { category, productId } = await params;

  // কনসোলে লগ করা (এটি আপনার টার্মিনালে দেখা যাবে)
  console.log("Category:", category);
  console.log("Product ID:", productId);

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-3xl font-bold border-b pb-2">Product Details</h1>
      
      <div className="bg-slate-100 p-6 rounded-lg shadow-sm">
        <p className="text-lg">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Product ID:</span> {productId}
        </p>
      </div>

      <div className="text-sm text-gray-500">
        চেক করুন: আপনার ব্রাউজারের বদলে পিসির টার্মিনালে কনসোল লগ দেখা যাবে।
      </div>
    </div>
  );
}