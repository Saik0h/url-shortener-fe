import { useState } from "react";
import type { iButtonProps } from "../../interfaces";
import type { btnClass } from "../../enums/button-class.enum";

export default function Button(props: iButtonProps) {
  const { onClick, variant, size, text } = props;
  const [loading, setLoading] = useState(false);

  const getButtonClass = (variant: btnClass): string => {
    const type = variant.toLowerCase() || "default";
    const sz = size ? size.toLowerCase() : "md";
    return `btn ${type} ${sz}`;
  };

  async function handleClick() {
    setLoading(true);
    try {
      await onClick();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className={getButtonClass(variant)}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Loading" : text}
    </button>
  );
}
