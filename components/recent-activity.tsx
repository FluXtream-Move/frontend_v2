import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Send</p>
          <p className="text-sm text-muted-foreground">
          0xa7W6...eFrR
          </p>
        </div>
        <div className="ml-auto font-medium">In-Progress</div>
      </div>
      <div className="flex items-center">   
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Receive</p>
          <p className="text-sm text-muted-foreground">0xGHxu...xRwW</p>
        </div>
        <div className="ml-auto font-medium">Complete</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Send</p>
          <p className="text-sm text-muted-foreground">
            0xBlxu...sUtW
          </p>
        </div>
        <div className="ml-auto font-medium">Cancelled</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Receive</p>
          <p className="text-sm text-muted-foreground">0xaJlu...KngT</p>
        </div>
        <div className="ml-auto font-medium">In-Progress</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Send</p>
          <p className="text-sm text-muted-foreground">0xMfer...MKuE</p>
        </div>
        <div className="ml-auto font-medium">Completed</div>
      </div>
    </div>
  );
}
