// Public entry point of @indurex/ui. The app imports only from here
// (enforced by ESLint); inside ui/, import modules directly.

export { Badge, badgeVariants } from "@indurex/ui/components/badge";
export { Button, buttonVariants } from "@indurex/ui/components/button";
export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@indurex/ui/components/card";
export { Checkbox } from "@indurex/ui/components/checkbox";
export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@indurex/ui/components/field";
export { Input } from "@indurex/ui/components/input";
export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@indurex/ui/components/input-group";
export { Kbd, KbdGroup } from "@indurex/ui/components/kbd";
export { Label } from "@indurex/ui/components/label";
export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@indurex/ui/components/popover";
export {
  SearchInput,
  type SearchInputProps,
} from "@indurex/ui/components/search-input";
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@indurex/ui/components/select";
export { Separator } from "@indurex/ui/components/separator";
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@indurex/ui/components/sidebar";
export { Skeleton } from "@indurex/ui/components/skeleton";
export { Spinner } from "@indurex/ui/components/spinner";
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@indurex/ui/components/table";
export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@indurex/ui/components/tabs";
export { Textarea } from "@indurex/ui/components/textarea";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@indurex/ui/components/tooltip";

export { applyTheme, DEFAULT_THEME, type Theme } from "@indurex/ui/theme/theme";
export { ThemeScript } from "@indurex/ui/theme/theme-script";
export { ThemeToggle, useTheme } from "@indurex/ui/theme/theme-toggle";

export { cn } from "@indurex/ui/lib/utils";
