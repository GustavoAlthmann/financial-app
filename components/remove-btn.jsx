'use client'
import { deleteTransaction } from "@/lib/actions";
import Button from "./button";
import { X } from "lucide-react";
import { useState } from "react";
import { Loader } from "lucide-react";

export default function TransactionItemRemoveBtn({ id, onRemoved }) {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState();
  const handleClick = async () => {
    if (!confirmed) {
      setConfirmed(true);
      return;
    }
    try {
      setLoading(true);
      await deleteTransaction(id);
      onRemoved()
    } finally {
        setLoading(false);
    }
  };
  return (
    <Button
      size="xs"
      variant={!confirmed ? "ghost" : "danger"}
      onClick={handleClick}
      aria-disabled={loading}
    >
     {!loading && <X className="h-4 w-4" />}
     {loading && <Loader className="animate-spin w-4 h-4" />}
    </Button>
  );
}
