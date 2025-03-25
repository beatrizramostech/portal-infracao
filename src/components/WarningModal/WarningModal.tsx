import React from "react";
import "./WarningModal.css";

interface WarningModalProps {
  title: string;
  error: string;
  isOpen: boolean;
  onClose: () => void;
}

const WarningModal = ({ title, error, isOpen, onClose }: WarningModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{error}</p>
        <div className="button-wrapper">
          <button onClick={onClose} className="secundario">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
