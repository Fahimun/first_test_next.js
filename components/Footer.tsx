export default function Footer() {
  return (
    <footer className="w-full py-6 border-t bg-gray-50 mt-10">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <p className="mt-2 text-xs">
          Built with <span className="text-blue-500">Next.js</span> & <span className="text-blue-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}