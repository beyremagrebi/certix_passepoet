
import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";


export type TabSize = "small" | "medium" | "large";

export interface TabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  size?: TabSize;
  selectedValue?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
  fullWidth?: boolean;
  className?: string;
}

export function Tabs({
  tabs,
  size = "medium",
  selectedValue,
  defaultValue,
  onChange,
  ariaLabel = "Tabs",
  fullWidth = false,
  className = "",
}: TabsProps) {
  const generatedId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const enabledTabs = tabs.filter((tab) => !tab.disabled);

  const initialValue =
    enabledTabs.find((tab) => tab.value === defaultValue)?.value ??
    enabledTabs[0]?.value ??
    "";

  const [internalValue, setInternalValue] = useState(initialValue);

  const isControlled = selectedValue !== undefined;
  const activeValue = isControlled ? selectedValue : internalValue;

  const activeTab = enabledTabs.find(
    (tab) => tab.value === activeValue,
  );

  const selectTab = (value: string) => {
    const tab = enabledTabs.find((item) => item.value === value);

    if (!tab) return;

    if (!isControlled) {
      setInternalValue(value);
    }

    onChange?.(value);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (enabledTabs.length === 0) return;

    const currentTab = tabs[currentIndex];
    if (!currentTab) return;

    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % tabs.length;

        while (tabs[nextIndex]?.disabled && nextIndex !== currentIndex) {
          nextIndex = (nextIndex + 1) % tabs.length;
        }
        break;

      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;

        while (tabs[nextIndex]?.disabled && nextIndex !== currentIndex) {
          nextIndex = (nextIndex - 1 + tabs.length) % tabs.length;
        }
        break;

      case "Home":
        nextIndex = tabs.findIndex((tab) => !tab.disabled);
        break;

      case "End":
        nextIndex = tabs.findLastIndex
          ? tabs.findLastIndex((tab) => !tab.disabled)
          : tabs.map((tab) => !tab.disabled).lastIndexOf(true);
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextTab = tabs[nextIndex];

    if (!nextTab || nextTab.disabled) return;

    selectTab(nextTab.value);
    tabRefs.current[nextIndex]?.focus();
  };

  if (tabs.length === 0) return null;

  return (
    <div
      className={[
        "tabs",
        `tabs--${size}`,
        fullWidth ? "tabs--full-width" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="tabs__list"
        role="tablist"
        aria-label={ariaLabel}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.value === activeTab?.value;
          const tabId = `${generatedId}-tab-${index}`;
          const panelId = `${generatedId}-panel-${index}`;

          return (
            <button
              key={tab.value}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={tabId}
              className={[
                "tabs__tab",
                isActive ? "tabs__tab--active" : "",
                tab.disabled ? "tabs__tab--disabled" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => selectTab(tab.value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => {
        const isActive = tab.value === activeTab?.value;

        return (
          <div
            key={tab.value}
            id={`${generatedId}-panel-${index}`}
            className="tabs__panel"
            role="tabpanel"
            aria-labelledby={`${generatedId}-tab-${index}`}
            hidden={!isActive}
            tabIndex={0}
          >
            {isActive ? tab.content : null}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
