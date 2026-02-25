import type { TaskFilterProps } from "../../types";

export const TaskFilter = ({ filter, onFilterChange }: TaskFilterProps) => {
  return (
    <div
      style={{
        border: "1px solid #fffffff",
        borderRadius: "12px",
        padding: "6px",
        backgroundColor: "darkBlue",
        color: "white",
      }}
    >
      <div>
        <label>SEARCH</label>
        <input
          type="text"
          value={filter.search}
          onChange={(e) => onFilterChange({ search: e.target.value })}
        />
      </div>

      <label>Status </label>
      <select
        name="status-filter"
        onChange={(e) => onFilterChange({ status: e.target.value as any })}
      >
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <label> Priority </label>
      <select
        name="priority-filter"
        onChange={(e) => onFilterChange({ priority: e.target.value as any })}
      >
        <option value="all">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};
