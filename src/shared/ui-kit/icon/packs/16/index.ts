import Cancel from "./cancel_16.svg";
import Check from "./check_16.svg";
import ChevronRight from "./chevron_right_16.svg";
import Code from "./code_16.svg";
import { createThemedIcons } from "../../create-themed-icon";

export const Icon16Icons = createThemedIcons({
  Cancel,
  Check,
  ChevronRight,
  Code,
});

export type Icon16IconKeys = keyof typeof Icon16Icons & string;
