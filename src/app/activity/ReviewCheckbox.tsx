"use client";

import { useId, useOptimistic, useTransition } from "react";

import { setActivityReviewed } from "@/actions/setActivityReviewed";

export function ReviewCheckbox({
  activityLogId,
  isReviewed: serverIsReviewed,
}: {
  activityLogId: string;
  isReviewed: boolean;
}) {
  const inputId = useId();
  const [optimisticIsReviewed, setOptimisticIsReviewed] =
    useOptimistic(serverIsReviewed);
  const [_isPending, startTransition] = useTransition();

  const handleChange = (checked: boolean) => {
    startTransition(async () => {
      setOptimisticIsReviewed(checked);
      await setActivityReviewed({ activityLogId, isReviewed: checked });
    });
  };

  return (
    <label
      htmlFor={inputId}
      className="text-muted flex items-center gap-1 text-sm"
    >
      <input
        id={inputId}
        type="checkbox"
        checked={optimisticIsReviewed}
        onChange={(e) => {
          handleChange(e.target.checked);
        }}
        className="cursor-pointer"
      />
      <span>Reviewed</span>
    </label>
  );
}
