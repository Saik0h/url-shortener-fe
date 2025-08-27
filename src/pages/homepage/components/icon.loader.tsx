import { Check, Clipboard } from "./svg";

const icons = [
  { name: "clipboard", component: <Clipboard /> },
  { name: "check", component: <Check /> },
];

export function Icon(props: { iconName: string }) {
  const { iconName } = props;
  const found = icons.find((i) => i.name === iconName);
  return found ? found.component : null;
}
