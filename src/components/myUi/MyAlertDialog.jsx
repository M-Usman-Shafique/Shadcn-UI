// src/components/myUi/MyAlertDialog.jsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function MyAlertDialog({ children, triggerText }) {
  const child = Array.isArray(children) ? children[1] : children;
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary text-primary-foreground text-sm shadow hover:bg-primary/90 rounded-lg h-9 px-4 py-2">
        {triggerText}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          {child}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
