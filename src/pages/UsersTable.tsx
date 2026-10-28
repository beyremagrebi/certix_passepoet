
import { useMemo, useState } from "react";

import { Table, type TableColumn } from "../components/ui/global/Table";
import { Pagination } from "../components/ui/global/Pagination";

import { Title } from "../components/ui/typography/Title";
import { Body } from "../components/ui/typography/Body";
import { Label } from "../components/ui/typography/Label";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
}

const users: User[] = [
  { id: 1, name: "Amira Ben Ali", email: "amira@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Youssef Trabelsi", email: "youssef@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Meriem Mansour", email: "meriem@example.com", role: "Viewer", status: "Pending" },
  { id: 4, name: "Ahmed Gharbi", email: "ahmed@example.com", role: "Editor", status: "Inactive" },
  { id: 5, name: "Ines Saidi", email: "ines@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Fares Jaziri", email: "fares@example.com", role: "Viewer", status: "Pending" },
  { id: 7, name: "Sarra Khalfallah", email: "sarra@example.com", role: "Editor", status: "Active" },
  { id: 8, name: "Omar Ayari", email: "omar@example.com", role: "Viewer", status: "Inactive" },
  { id: 9, name: "Nour Ben Salem", email: "nour@example.com", role: "Admin", status: "Active" },
  { id: 10, name: "Malek Haddad", email: "malek@example.com", role: "Editor", status: "Pending" },
  { id: 11, name: "Lina Chaabane", email: "lina@example.com", role: "Viewer", status: "Active" },
  { id: 12, name: "Khalil Mejri", email: "khalil@example.com", role: "Editor", status: "Inactive" },
];

const columns: TableColumn<User>[] = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
    sortable: true,
    minWidth: "10rem",
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
    sortable: true,
    minWidth: "13rem",
  },
  {
    key: "role",
    title: "Role",
    dataIndex: "role",
    sortable: true,
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    render: (value) => {
      const status = value as User["status"];

      return (
        <span
          className={`user-status user-status--${status.toLowerCase()}`}
        >
          <span className="user-status__dot" aria-hidden="true" />
          {status}
        </span>
      );
    },
  },
];

export default function UsersTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortKey, setSortKey] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => {
      const aValue = String(a[sortKey as keyof User] ?? "");
      const bValue = String(b[sortKey as keyof User] ?? "");

      const comparison = aValue.localeCompare(bValue, undefined, {
        numeric: true,
        sensitivity: "base",
      });

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [sortKey, sortDirection]);

  const visibleUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedUsers.slice(start, start + pageSize);
  }, [sortedUsers, page, pageSize]);

  const handleSort = (key: string, direction: "asc" | "desc") => {
    setSortKey(key);
    setSortDirection(direction);
    setPage(1);
  };

  const handlePageSizeChange = (nextPageSize: number) => {
    setPageSize(nextPageSize);
    setPage(1);
  };

  return (
    <section className="users-table">
      <header className="users-table__header">
        <div>
          <Title as="h2" size="large">
            Users
          </Title>

          <Body size="medium">
            Manage your team members and their access.
          </Body>
        </div>

        <Label size="medium">
          {users.length} members
        </Label>
      </header>

      <Table<User>
        columns={columns}
        data={visibleUsers}
        rowKey="id"
        caption="Team members"
        density="comfortable"
        hoverable
        zebra={false}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={handleSort}
      />

      <Pagination
        page={page}
        pageSize={pageSize}
        total={sortedUsers.length}
        onPageChange={setPage}
        onPageSizeChange={handlePageSizeChange}
        pageSizeOptions={[5, 10, 20]}
        size="medium"
        showPageSize
        showTotal
      />
    </section>
  );
}