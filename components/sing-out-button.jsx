"use client";
import { LogOut } from "lucide-react";
import SubmitButton from "./submit-button";
import { SingOut } from "@/lib/actions";

export default function SingOutButton() {
  return (
    <form action={SingOut}>
      <SubmitButton variant="ghost" size="sm">
        <LogOut className="w-6 h-6" />
      </SubmitButton>
    </form>
  );
}
