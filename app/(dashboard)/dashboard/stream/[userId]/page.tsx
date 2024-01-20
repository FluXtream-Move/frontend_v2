import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Stream", link: "/dashboard/stream" },
    { title: "Create", link: "/dashboard/stream/create" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ProductForm
        categories={[
          { _id: "personal", name: "personal" },
          { _id: "business", name: "business" },
          { _id: "other", name: "other" },
        ]}
        initialData={null}
        key={null}
      />
    </div>
  );
}
