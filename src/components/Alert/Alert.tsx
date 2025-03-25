import React from "react";

type AlertProps = {
  message: string | undefined;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
  isOpen: boolean;
};

export const Alert = ({ message, type = "info", onClose, isOpen }: AlertProps) => {
  if (!isOpen) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <span onClick={onClose} className="close-alert">
        ✖
      </span>
    </div>
  );
};
