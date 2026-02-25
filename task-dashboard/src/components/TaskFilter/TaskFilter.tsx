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
        <label>find</label>
        <input
          type="text"
          value={filter.search}
          onChange={(e) => onFilterChange({ search: e.target.value })}
        />
      </div>

      <label>lifecycle </label>
      <select
        name="status-filter"
        onChange={(e) => onFilterChange({ status: e.target.value as any })}
      >
        <option value="all">all</option>
        <option value="pending">seed</option>
        <option value="in-progress">bloom</option>
        <option value="completed">harvested</option>
      </select>

      <label> which why </label>
      <select
        name="priority-filter"
        onChange={(e) => onFilterChange({ priority: e.target.value as any })}
      >
        <option value="all">all</option>
        <option value="high">crucial</option>
        <option value="medium">helpful</option>
        <option value="low">optional</option>
      </select>
    </div>
  );
};
