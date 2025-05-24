import { PopUpContainer } from "./styles";

interface PopUpProps {
  text: string;
  backgroundColor: string;
}

export function PopUp({ text, backgroundColor }: PopUpProps) {
  return (
    <PopUpContainer backgroundColor={backgroundColor}>
      <h1>{text}</h1>
    </PopUpContainer>
  );
}
