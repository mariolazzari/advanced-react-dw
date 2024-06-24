//import { useState } from "react";
import { Button } from "./components/Button";
import { ButtonWithModalDialog } from "./components/ButtonWithDialog";
import { ModalDialog } from "./components/ModalDialog";
import { AnotherVerySlowComponent, VerySlowComponent } from "./components/Slow";
import { useModalDialog } from "./hooks";

function App() {
  // const [open, setOpen] = useState(false);
  const { isOpen, close, open } = useModalDialog();

  return (
    <div className="container">
      <Button onClick={open}>Open Dialog</Button>

      <ModalDialog open={isOpen} onClose={close} />
      <VerySlowComponent />
      <AnotherVerySlowComponent />

      <ButtonWithModalDialog />
    </div>
  );
}

export default App;
