import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import { RecentActivity } from "@/components/recent-activity";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Dashboard</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Completed Flows
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium ">
                    Total Assests
                  </CardTitle>  
                  <div className="inline-flex items-center gap-[2px] px-[12px] py-[4px] relative flex-[0_0_auto] bg-blue-100 rounded-[14px] ">
          <div className="relative w-fit mt-[-1.00px] font-caption-caption-1-medium font-[number:var(--caption-caption-1-medium-font-weight)] text-[#0058aa] text-[length:var(--caption-caption-1-medium-font-size)] tracking-[var(--caption-caption-1-medium-letter-spacing)] leading-[var(--caption-caption-1-medium-line-height)] whitespace-nowrap [font-style:var(--caption-caption-1-medium-font-style)]">
            10k
          </div>
          <div className="relative w-[16px] h-[16px]">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.03031 2.80304C8.73742 2.51015 8.26254 2.51015 7.96965 2.80304L3.30298 7.46971C3.01009 7.7626 3.01009 8.23748 3.30298 8.53037C3.59588 8.82326 4.07075 8.82326 4.36364 8.53037L7.74998 5.14403V12.6667C7.74998 13.0809 8.08577 13.4167 8.49998 13.4167C8.91419 13.4167 9.24998 13.0809 9.24998 12.6667V5.14403L12.6363 8.53037C12.9292 8.82326 13.4041 8.82326 13.697 8.53037C13.9899 8.23748 13.9899 7.7626 13.697 7.46971L9.03031 2.80304Z" fill="#0058AA"/>
</svg>

          </div>
        </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Flows
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">20</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Freeze Assets</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">90</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">
                    +201/mo
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                <RecentActivity />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Transaction</CardTitle>
                  <CardDescription>
                    You made 6 flows this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
