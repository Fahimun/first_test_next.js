"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    // একটি ফেক সেভ অপশন
    setTimeout(() => {
      setLoading(false);
      alert("প্রোফাইল সফলভাবে আপডেট করা হয়েছে!");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">আপনার প্রোফাইল এবং একাউন্ট সেটিংস ম্যানেজ করুন।</p>
      </div>
      
      <Separator className="my-6" />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              আপনার নাম এবং ইমেল এখান থেকে পরিবর্তন করতে পারেন।
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="আপনার নাম লিখুন" defaultValue="Tasir Islam" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="example@mail.com" defaultValue="tasir@example.com" />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button onClick={handleSave} disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>
              একাউন্ট ডিলিট করলে সকল ডাটা চিরতরে মুছে যাবে।
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}