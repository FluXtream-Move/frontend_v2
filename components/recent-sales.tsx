import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Satyam Martin</p>
          <p className="text-sm text-muted-foreground">
          0xa7W6...eFrR
          </p>
        </div>
        <div className="ml-auto font-medium">-$24.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Nisarg Thakkar</p>
          <p className="text-sm text-muted-foreground">0xGHxu...xRwW</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jashwant</p>
          <p className="text-sm text-muted-foreground">
            0xBlxu...sUtW
          </p>
        </div>
        <div className="ml-auto font-medium">+$29.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Tanmay Patel</p>
          <p className="text-sm text-muted-foreground">0xaJlu...KngT</p>
        </div>
        <div className="ml-auto font-medium">+$9.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sam Altman</p>
          <p className="text-sm text-muted-foreground">0xMfer...MKuE</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
    </div>
  );
}
