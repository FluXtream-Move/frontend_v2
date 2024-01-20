import BreadCrumb from "@/components/breadcrumb";
import { StreamClient } from "@/components/tables/stream-tables/client";
import { streams } from "@/constants/data";

const breadcrumbItems = [{ title: "Stream", link: "/dashboard/stream" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <StreamClient data={streams} />
      </div>
    </>
  );
}
