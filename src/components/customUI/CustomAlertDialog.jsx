// src/components/customUI/CustomAlertDialog.jsx
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
import { Button } from "../ui/button";
import CustomTooltip from "./CustomTooltip";

export default function MyAlertDialog({ children, triggerText }) {
  const child = Array.isArray(children) ? children[1] : children;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <CustomTooltip
          trigger={
            <Button variant="default" size="lg">
              {triggerText}
            </Button>
          }
          content="Alert"
        ></CustomTooltip>
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
