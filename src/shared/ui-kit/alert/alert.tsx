import type { HTMLAttributes, ReactNode } from "react";
import { Button, type ButtonVariant } from "../button/button";
import { ButtonGroup } from "../button-group/button-group";
import styles from "./alert.module.css";

export type AlertActionsLayout = "stack" | "inline";

export interface AlertProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  primaryActionVariant?: ButtonVariant;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  secondaryActionVariant?: ButtonVariant;
  actionsLayout?: AlertActionsLayout;
}

export const Alert = ({
  title,
  description,
  media,
  primaryActionLabel,
  onPrimaryAction,
  primaryActionVariant = "primary",
  secondaryActionLabel,
  onSecondaryAction,
  secondaryActionVariant = "outlined",
  actionsLayout = "stack",
  ...props
}: AlertProps) => {
  const hasMedia = Boolean(media);
  const hasDescription = Boolean(description);
  const hasActions = Boolean(primaryActionLabel || secondaryActionLabel);

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
      {media ? <div className={styles.media}>{media}</div> : null}

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>

      {hasActions ? (
        <ButtonGroup
          direction={actionsLayout === "inline" ? "horizontal" : "vertical"}
          className={[
            styles.actions,
            styles[`actions${capitalize(actionsLayout)}`],
          ].join(" ")}
        >
          {secondaryActionLabel ? (
            <div className={styles.actionSlot}>
              <Button
                variant={secondaryActionVariant}
                size="m"
                label={secondaryActionLabel}
                onClick={onSecondaryAction}
              />
            </div>
          ) : null}

          {primaryActionLabel ? (
            <div className={styles.actionSlot}>
              <Button
                variant={primaryActionVariant}
                size="m"
                label={primaryActionLabel}
                onClick={onPrimaryAction}
              />
            </div>
          ) : null}
        </ButtonGroup>
      ) : null}
    </section>
  );
};

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);
