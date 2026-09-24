"use client";

import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@indurex/ui/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@indurex/ui/components/input-group";
import { Kbd } from "@indurex/ui/components/kbd";
import { cn } from "@indurex/ui/lib/utils";

type SearchInputProps = Omit<
  React.ComponentProps<"input">,
  "type" | "value" | "defaultValue"
> & {
  /** Always required. In the toolbar layout it is announced but not shown. */
  label: string;
  /**
   * `field`: visible label above, for forms and filter panels.
   * `toolbar`: label for screen readers only, compact, for page headers.
   */
  layout?: "field" | "toolbar";
  /** Single key that focuses the field from anywhere on the page. Toolbar default: "/". */
  shortcut?: string | null;
  description?: React.ReactNode;
  /** Replaces the description and marks the input `aria-invalid`. */
  error?: React.ReactNode;
  /** Trailing count, e.g. "12 results". */
  resultCount?: React.ReactNode;
  /** Controlled query. Pair with `onValueChange`, which also fires on clear. */
  value?: string;
  defaultValue?: string;
  /** New query on every keystroke and `""` on clear, in both controlled and uncontrolled use. */
  onValueChange?: (value: string) => void;
  onClear?: () => void;
};

const isEditable = (el: EventTarget | null) =>
  el instanceof HTMLElement &&
  (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

/**
 * Labelled search field composed from Field + InputGroup: magnifier icon,
 * optional result count, a clear button once there is a query, and (toolbar)
 * a keyboard shortcut hint.
 */
function SearchInput({
  label,
  layout = "field",
  shortcut = layout === "toolbar" ? "/" : null,
  description,
  error,
  resultCount,
  value,
  defaultValue = "",
  onChange,
  onValueChange,
  onClear,
  id,
  className,
  disabled,
  ...props
}: SearchInputProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [innerValue, setInnerValue] = React.useState(defaultValue);
  const query = value ?? innerValue;

  React.useEffect(() => {
    if (!shortcut || disabled) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== shortcut ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey
      )
        return;
      if (isEditable(event.target)) return;
      event.preventDefault();
      inputRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [shortcut, disabled]);

  const clear = () => {
    setInnerValue("");
    onValueChange?.("");
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <Field
      data-layout={layout}
      data-invalid={error ? true : undefined}
      className={className}
    >
      <FieldLabel
        htmlFor={inputId}
        className={cn(layout === "toolbar" && "sr-only")}
      >
        {label}
      </FieldLabel>
      <InputGroup data-disabled={disabled || undefined}>
        <InputGroupAddon>
          <SearchIcon aria-hidden />
        </InputGroupAddon>
        <InputGroupInput
          ref={inputRef}
          id={inputId}
          type="search"
          value={query}
          disabled={disabled}
          onChange={(event) => {
            setInnerValue(event.target.value);
            onValueChange?.(event.target.value);
            onChange?.(event);
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? errorId : description ? descriptionId : undefined
          }
          aria-keyshortcuts={shortcut ?? undefined}
          className="[&::-webkit-search-cancel-button]:appearance-none"
          {...props}
        />
        {resultCount !== undefined && (
          <InputGroupAddon align="inline-end">
            <InputGroupText className="tabular-nums">
              {resultCount}
            </InputGroupText>
          </InputGroupAddon>
        )}
        {query && !disabled ? (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label="Clear search"
              onClick={clear}
            >
              <XIcon />
            </InputGroupButton>
          </InputGroupAddon>
        ) : (
          shortcut && (
            <InputGroupAddon align="inline-end">
              <Kbd aria-hidden className="border border-border bg-transparent">
                {shortcut}
              </Kbd>
            </InputGroupAddon>
          )
        )}
      </InputGroup>
      {error ? (
        <FieldError id={errorId}>{error}</FieldError>
      ) : (
        description && (
          <FieldDescription id={descriptionId}>{description}</FieldDescription>
        )
      )}
    </Field>
  );
}

export { SearchInput, type SearchInputProps };
