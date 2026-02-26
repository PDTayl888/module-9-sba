import type { TaskFilterProps } from "../../types";

export const TaskFilter = ({ filter, onFilterChange }: TaskFilterProps) => {
  return (
    <div
      style={{
        border: "1px solid #fffffff",
        borderRadius: "12px",
        padding: "6px",
        backgroundColor: "rgba(58, 153, 129, 0.87)",
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
        value={filter.status}
        onChange={(e) => onFilterChange({ status: e.target.value as any })}
      >
        <option value="all">all</option>
        <option value="seedling">seedling</option>
        <option value="bloom">bloom</option>
        <option value="harvested">harvested</option>
      </select>

      <label> which why </label>
      <select
        name="priority-filter"
        value={filter.priority}
        onChange={(e) => onFilterChange({ priority: e.target.value as any })}
      >
        <option value="all">all</option>
        <option value="crucial">crucial</option>
        <option value="helpful">helpful</option>
        <option value="optional">optional</option>
      </select>
      <hr />
      <h3>daily harvest</h3>
      <hr />
    </div>
  );
};
