import type { btnClass } from "../../enums/button-class.enum";
import type { btnSize } from "../../enums/button-size.enum";

export default interface iButtonProps {
  onClick: () => Promise<void>;
  text: string;
  variant: btnClass;
  size?: btnSize;
}
