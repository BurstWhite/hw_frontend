'use client'
import SingleHomework from "@/app/dashboard/homework/singlehomework"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import HomeworkCreationForm from "@/app/ui/dashboard/homework/creationform"

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: JSX.Element;
}

function Modal({ show, onClose, children }: ModalProps) {
  if (!show) {
      return null;
  }

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        {children}
      </div>
  );
}


export default function HomeworkPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full py-6">
      <div className="container grid max-w-3xl px-4 gap-6 text-sm md:gap-10">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold">作业列表</h1>
        </div>
        <div className="space-y-1.5">
          <SingleHomework subject="数学" start_date="2024-03-05" end_date="2024-03-26" />
        </div>
        <Modal show={showForm} onClose={() => setShowForm(false)}>
          <HomeworkCreationForm />
        </Modal>
        <div className="flex justify-end">
          <Button onClick={() => setShowForm(true)}>布置作业</Button>
        </div>
      </div>
    </div>
  )
}
