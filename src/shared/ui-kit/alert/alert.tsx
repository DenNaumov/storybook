import type { HTMLAttributes, ReactNode } from "react";
import { Button, type ButtonVariant } from "../button/button";
import { ButtonGroup } from "../button-group/button-group";
import { Illustration } from "../illustration/illustration";
import { type IllustrationName } from "../illustration/illustration.constants";
import styles from "./alert.module.css";

export type AlertActionsLayout = "stack" | "inline";

export interface AlertProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title: ReactNode;
  description?: ReactNode;
  illustration?: IllustrationName;
  actionsLayout?: AlertActionsLayout;
  primaryActionLabel?: string;
  primaryActionVariant?: ButtonVariant;
  secondaryActionLabel?: string;
  secondaryActionVariant?: ButtonVariant;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export const Alert = ({
  title,
  description,
  illustration,
  primaryActionLabel,
  onPrimaryAction,
  primaryActionVariant = "primary",
  secondaryActionLabel,
  onSecondaryAction,
  secondaryActionVariant = "outlined",
  actionsLayout = "stack",
  ...props
}: AlertProps) => {
  const hasMedia = Boolean(illustration);
  const hasDescription = Boolean(description);
  const isPrimaryAction = Boolean(primaryActionLabel || onPrimaryAction);
  const isSecondaryAction = Boolean(secondaryActionLabel || onSecondaryAction);
  const hasActions = Boolean(isPrimaryAction || isSecondaryAction);

  const alertClassName = [
    styles.alert,
    hasMedia ? styles.withMedia : "",
    hasDescription ? styles.withDescription : "",
    hasActions ? styles.withActions : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={alertClassName} {...props}>
      {illustration && (
        <div className={styles.media}>
          <Illustration illustration={illustration} size={184} />
        </div>
      )}

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {hasActions && (
        <ButtonGroup
          direction={actionsLayout === "inline" ? "horizontal" : "vertical"}
          className={[
            styles.actions,
            styles[`actions${capitalize(actionsLayout)}`],
          ].join(" ")}
        >
          {isSecondaryAction && (
            <div className={styles.actionSlot}>
              <Button
                variant={secondaryActionVariant}
                size="m"
                label={secondaryActionLabel}
                onClick={onSecondaryAction}
              />
            </div>
          )}

          {isPrimaryAction && (
            <div className={styles.actionSlot}>
              <Button
                variant={primaryActionVariant}
                size="m"
                label={primaryActionLabel}
                onClick={onPrimaryAction}
              />
            </div>
          )}
        </ButtonGroup>
      )}
    </section>
  );
};

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);
