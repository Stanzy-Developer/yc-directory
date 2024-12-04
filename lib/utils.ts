import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type createInitialsProps = string | null | undefined

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}

export const createInitials = (props: createInitialsProps) => {
  if (props) {
    return props.split(' ').map(word => word[0]).join("").toUpperCase().slice(0, 2)
  }
}
