import CustomForm from "@/components/customUI/CustomForm";
import React from "react";

export default function page() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center py-3 gap-5">
      <h1 className="text-2xl font-bold text-primary">Create an account</h1>
      <CustomForm />
    </div>
  );
}
