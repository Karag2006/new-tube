import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const avatarVariants = cva("",{
  variants: {
    size: {
      xxl: "h-[160px] w-[160px]",
      xl: "h-[112px] w-[112px]",
      lg: "h-10 w-10",
      default: "h-9 w-9",
      sm: "h-6 w-6",
      xs: "h-4 w-4",

    }
  },
  defaultVariants: {
    size: "default",
  },
})

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

export const UserAvatar = ({
  imageUrl,
  name,
  size,
  className,
  onClick
}: UserAvatarProps) => {
  return (
    <Avatar className={cn(avatarVariants({size, className}))} onClick={onClick}>
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  )
}
