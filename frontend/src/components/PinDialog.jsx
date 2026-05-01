import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContent, EDIT_PIN } from "@/context/ContentContext";
import { toast } from "sonner";
import { KeyRound } from "lucide-react";

export default function PinDialog({ open, onOpenChange }) {
  const { setIsEditing } = useContent();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setPin("");
      setError("");
    }
  }, [open]);

  const submit = (e) => {
    e?.preventDefault();
    if (pin === EDIT_PIN) {
      setIsEditing(true);
      onOpenChange(false);
      toast.success("Edit mode unlocked. Click any text or image to edit.");
    } else {
      setError("Incorrect PIN. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="paper-card border-2 !border-l-4 !border-l-forest max-w-md"
        data-testid="pin-dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-ink-dark flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-ember" />
            Speak, friend, and enter
          </DialogTitle>
          <DialogDescription className="font-body text-ink-brown">
            Enter the 6-digit PIN to unlock the editor. Your changes will be saved on this device.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <Input
            type="password"
            inputMode="numeric"
            maxLength={6}
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError("");
            }}
            placeholder="······"
            autoFocus
            className="text-center tracking-[0.6em] font-ui text-xl bg-parchment border-divider focus-visible:ring-gold"
            data-testid="pin-input"
          />
          {error && (
            <p className="text-sm text-ember font-body" data-testid="pin-error">
              {error}
            </p>
          )}
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="font-ui tracking-widest uppercase text-xs border-ink-brown text-ink-brown hover:bg-ink-brown hover:text-parchment"
              data-testid="pin-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="font-ui tracking-widest uppercase text-xs bg-forest text-parchment hover:bg-ember"
              data-testid="pin-submit"
            >
              Unlock
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
