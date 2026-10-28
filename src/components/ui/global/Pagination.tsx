import { useMemo } from "react";

import { Body } from "../typography/Body";
import { Button } from "./Button";
import { Select } from "./Select";
import { Label } from "../typography/Label";

export type PaginationSize = "small" | "medium" | "large";

export interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  size?: PaginationSize;
  showPageSize?: boolean;
  showTotal?: boolean;
  siblingCount?: number;
  disabled?: boolean;
  className?: string;
}

type PageItem = number | "ellipsis-start" | "ellipsis-end";

function getPageItems(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): PageItem[] {
  if (totalPages <= 0) return [];

  const lastPage = totalPages;
  const start = Math.max(2, currentPage - siblingCount);
  const end = Math.min(lastPage - 1, currentPage + siblingCount);

  const pages: PageItem[] = [1];

  if (start > 2) {
    pages.push(start === 3 ? 2 : "ellipsis-start");
  }

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (end < lastPage - 1) {
    pages.push(end === lastPage - 2 ? lastPage - 1 : "ellipsis-end");
  }

  if (lastPage > 1) {
    pages.push(lastPage);
  }

  return pages;
}

export function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  size = "medium",
  showPageSize = true,
  showTotal = true,
  siblingCount = 1,
  disabled = false,
  className = "",
}: PaginationProps) {
  const safeTotal = Math.max(0, total);
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.ceil(safeTotal / safePageSize);
  const currentPage = Math.min(
    Math.max(1, page),
    Math.max(1, totalPages),
  );

  const startItem =
    safeTotal === 0 ? 0 : (currentPage - 1) * safePageSize + 1;

  const endItem = Math.min(currentPage * safePageSize, safeTotal);

  const pageItems = useMemo(
    () =>
      getPageItems(
        currentPage,
        totalPages,
        Math.max(0, siblingCount),
      ),
    [currentPage, totalPages, siblingCount],
  );

  const canGoPrevious = !disabled && currentPage > 1;
  const canGoNext = !disabled && currentPage < totalPages;

  const validPageSizes = Array.from(
    new Set([...pageSizeOptions, safePageSize]),
  )
    .filter((value) => Number.isFinite(value) && value > 0)
    .sort((a, b) => a - b);

  if (totalPages <= 1 && !showPageSize && !showTotal) {
    return null;
  }

  return (
    <nav
      className={[
        "pagination",
        `pagination--${size}`,
        disabled && "pagination--disabled",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Table pagination"
    >
      {showTotal && (
        <div className="pagination__summary" aria-live="polite">
          <Body size="small">
            <span className="pagination__summary-label">Showing</span>{" "}
            <strong>{startItem}–{endItem}</strong>{" "}
            <span className="pagination__summary-label">of</span>{" "}
            <strong>{safeTotal}</strong>
          </Body>
        </div>
      )}

      <div className="pagination__controls">
        <Button
          variant="outline"
          size={size}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious}
          aria-label="Go to previous page"
        >
          ‹
        </Button>

        {pageItems.map((item) =>
          typeof item === "number" ? (
            <Button
              key={item}
              variant={item === currentPage ? "primary" : "outline"}
              size={size}
              onClick={() => onPageChange(item)}
              disabled={disabled || item === currentPage}
              aria-label={`Go to page ${item}`}
              aria-current={item === currentPage ? "page" : undefined}
            >
              {item}
            </Button>
          ) : (
            <span
              key={item}
              className="pagination__ellipsis"
              aria-hidden="true"
            >
              …
            </span>
          ),
        )}

        <Button
          variant="outline"
          size={size}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          aria-label="Go to next page"
        >
          ›
        </Button>
      </div>

      {showPageSize && onPageSizeChange && (
        <div className="pagination__page-size">
          <Label size="small">Rows per page</Label>

          <Select
            value={String(safePageSize)}
            size={size}
            disabled={disabled}
            onChange={(event) => {
              const nextSize = Number(event.target.value);

              if (Number.isFinite(nextSize) && nextSize > 0) {
                onPageSizeChange(nextSize);
              }
            }}
            aria-label="Rows per page"
          >
            {validPageSizes.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </div>
      )}
    </nav>
  );
}