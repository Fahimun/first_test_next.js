import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea 
            rows={4} 
            placeholder="Write your message here..." 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Shadcn Button ব্যবহার করা হয়েছে */}
        <Button className="w-full">Send Message</Button>
      </form>

      <div className="mt-10 text-center text-gray-600">
        <p>Email: contact@myapp.com</p>
        <p>Location: Dhaka, Bangladesh</p>
      </div>
    </div>
  );
}