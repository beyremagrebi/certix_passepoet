import {
  type CSSProperties,
  type ReactNode,
  useId,
  useMemo,
} from "react";
import { Label } from "../typography/Label";
import { Button } from "./Button";
import { Body } from "../typography/Body";




export type TableDensity = "compact" | "comfortable" | "spacious";
export type TableAlign = "left" | "center" | "right";

export interface TableColumn<T> {
  key: string;
  title: ReactNode;
  dataIndex?: keyof T;
  render?: (value: unknown, row: T, index: number) => ReactNode;
  align?: TableAlign;
  width?: string;
  minWidth?: string;
  sortable?: boolean;
  className?: string;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: keyof T | ((row: T, index: number) => string | number);
  caption?: string;
  density?: TableDensity;
  loading?: boolean;
  emptyMessage?: ReactNode;
  hoverable?: boolean;
  zebra?: boolean;
  bordered?: boolean;
  compactOnMobile?: boolean;
  sortKey?: string;
  sortDirection?: "asc" | "desc";
  onSort?: (key: string, direction: "asc" | "desc") => void;
  className?: string;
  getRowClassName?: (row: T, index: number) => string | undefined;
}

export function Table<T>({
  columns,
  data,
  rowKey,
  caption,
  density = "comfortable",
  loading = false,
  emptyMessage = "No data available.",
  hoverable = true,
  zebra = false,
  bordered = false,
  compactOnMobile = true,
  sortKey,
  sortDirection = "asc",
  onSort,
  className = "",
  getRowClassName,
}: TableProps<T>) {
  const generatedId = useId();
  const captionId = `${generatedId}-caption`;

  const tableStyle = {
    "--table-column-count": columns.length,
  } as CSSProperties;

  const rows = useMemo(
    () =>
      data.map((row, index) => {
        const key =
          typeof rowKey === "function"
            ? rowKey(row, index)
            : (row[rowKey] as string | number);

        return { row, index, key: String(key) };
      }),
    [data, rowKey],
  );

  const handleSort = (key: string) => {
    if (!onSort) return;

    const nextDirection =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";

    onSort(key, nextDirection);
  };

  return (
    <div
      className={[
        "table",
        `table--${density}`,
        hoverable && "table--hoverable",
        zebra && "table--zebra",
        bordered && "table--bordered",
        compactOnMobile && "table--responsive",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={tableStyle}
    >
      <div
        className="table__scroll"
        role="region"
        aria-label={caption ?? "Data table"}
        tabIndex={0}
      >
        <table
          className="table__element"
          aria-describedby={caption ? captionId : undefined}
          aria-busy={loading}
        >
          {caption && (
            <caption id={captionId} className="table__caption">
              {caption}
            </caption>
          )}

          <thead className="table__head">
            <tr>
              {columns.map((column) => {
                const active = sortKey === column.key;
                const canSort = Boolean(column.sortable && onSort);

                return (
                  <th
                    key={column.key}
                    scope="col"
                    className={[
                      "table__header-cell",
                      column.className,
                      `table__cell--${column.align ?? "left"}`,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{
                      width: column.width,
                      minWidth: column.minWidth,
                    }}
                    aria-sort={
                      active
                        ? sortDirection === "asc"
                          ? "ascending"
                          : "descending"
                        : canSort
                          ? "none"
                          : undefined
                    }
                  >
                    {canSort ? (
                      <Button
                        type="button"
                        variant="outline"
                        size="small"
                        className="table__sort-button"
                        onClick={() => handleSort(column.key)}
                        aria-label={`Sort by ${
                          typeof column.title === "string"
                            ? column.title
                            : column.key
                        }`}
                      >
                        <Label size="small">{column.title}</Label>

                        <span
                          className="table__sort-icon"
                          aria-hidden="true"
                        >
                          {active
                            ? sortDirection === "asc"
                              ? "↑"
                              : "↓"
                            : "↕"}
                        </span>
                      </Button>
                    ) : (
                      <Label size="small">{column.title}</Label>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="table__body">
            {loading ? (
              <tr>
                <td colSpan={Math.max(columns.length, 1)}>
                  <div className="table__status" role="status">
                    <span
                      className="table__spinner"
                      aria-hidden="true"
                    />
                    <Body size="medium">Loading data…</Body>
                  </div>
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={Math.max(columns.length, 1)}>
                  <div className="table__status" role="status">
                    <Body size="medium">{emptyMessage}</Body>
                  </div>
                </td>
              </tr>
            ) : (
              rows.map(({ row, index, key }) => (
                <tr
                  key={key}
                  className={getRowClassName?.(row, index)}
                >
                  {columns.map((column) => {
                    const value = column.dataIndex
                      ? row[column.dataIndex]
                      : undefined;

                    return (
                      <td
                        key={column.key}
                        className={[
                          "table__cell",
                          column.className,
                          `table__cell--${column.align ?? "left"}`,
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        data-label={
                          typeof column.title === "string"
                            ? column.title
                            : undefined
                        }
                      >
                        {column.render ? (
                          column.render(value, row, index)
                        ) : value == null ? (
                          <Body size="medium">—</Body>
                        ) : (
                          <Body size="medium">{String(value)}</Body>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}