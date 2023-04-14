import React, { ReactNode, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import "../styles/modal.css";

interface ModalProps {
  children: ReactNode;
  label: string;
  hide: () => void;
  isClosable?: boolean;
  isShowing?: boolean;
}

export function Modal({
  children,
  label,
  isShowing,
  hide,
  isClosable = true,
}: ModalProps) {
  const KEY_NAME_ESC = "Escape";
  const KEY_EVENT_TYPE = "keyup";

  const hideModalIfPossible = useCallback(() => {
    if (isClosable) {
      hide();
    }
  }, [isClosable, hide]);

  const handleEscKey = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        hideModalIfPossible();
      }
    },
    [hideModalIfPossible]
  );

  useEffect(() => {
    if (isClosable) {
      document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

      return () => {
        document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
      };
    }
  }, [handleEscKey, isClosable]);

  return isShowing
    ? createPortal(
        <>
          <div
            className="backdrop"
            aria-label="Fond"
            onClick={hideModalIfPossible}
            aria-hidden={true}
          ></div>
          <div
            className="modal"
            role="dialog"
            aria-roledescription="use escape to close modal"
            aria-label={label}
            aria-modal
          >
            {children}
          </div>
        </>,
        document.body
      )
    : null;
}
