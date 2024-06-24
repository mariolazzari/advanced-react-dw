import { Button } from "./Button";

type BasicModalDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const ModalDialog = ({ open, onClose }: BasicModalDialogProps) => {
  return (
    <dialog open={open}>
      <p>modal content</p>

      <Button onClick={onClose}>Close Dialog</Button>
    </dialog>
  );
};
