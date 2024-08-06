import { useRef, useEffect, useCallback, useState } from "react";

interface IColumnOption {
  isFixed?: boolean;
  ratio: number;
  useFilter?: boolean;
  minWidth?: number;
  maxWidth?: number;
}

interface IUseResizeTableProperties {
  columnOptions: IColumnOption[];
}

const useResizeTable = (columnOptions: IColumnOption[]) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const columns = useRef<number[]>([]);
  const table = useRef<HTMLTableElement>(null);
  const tbody = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    if (table.current) {
      const pxMul =
        table.current.offsetWidth /
        columnOptions.reduce((acc, { ratio }) => acc + ratio, 0);

      columns.current = columnOptions.reduce(
        (acc: number[], { ratio }) => [...acc, Math.floor(ratio * pxMul)],
        []
      );

      table.current.style.gridTemplateColumns =
        columns.current.join("px ") + "px";
    }
    if (tbody.current) {
      tbody.current.style.gridTemplateColumns =
        columns.current.join("px ") + "px";
    }
    setIsLoading(true);
  }, [columnOptions]);

  const setColSize = useCallback(
    (index: number, size: number) => {
      const keepColumns = [...columns.current];
      const keepColumnSize = [...columns.current].reduce(
        (acc, v) => acc + v,
        0
      );

      const delta: number = size;
      if (
        columnOptions[index].isFixed ||
        (columns.current[index] >= 2000 && delta > 0) ||
        (columns.current[index] <= 50 && delta < 0)
      ) {
        let [prev, next] = [-1, -1];
        columns.current.forEach((_, i) => {
          if (i < index && !columnOptions[i].isFixed) {
            if (delta > 0 && columns.current[i] < 2000) prev = i;
            else if (delta < 0 && columns.current[i] > 50) prev = i;
          } else if (i > index && !columnOptions[i].isFixed && next == -1) {
            if (delta > 0 && columns.current[i] > 50) next = i;
            else if (delta < 0 && columns.current[i] < 2000) next = i;
          }
        });
        if (prev != -1 && next != -1) {
          columns.current[prev] += delta;
          if (columns.current[prev] < 50) {
            const gap = 50 - columns.current[prev];
            columns.current[prev] = 50;
            columns.current[next] -= gap;
          } else if (columns.current[prev] > 2000) {
            const gap = 2000 - columns.current[prev];
            columns.current[prev] = 2000;
            columns.current[next] += gap;
          }
          columns.current[next] -= delta;
        }
      } else {
        let next = -1;
        columns.current.forEach((_, i) => {
          if (i > index && !columnOptions[i].isFixed && next == -1) {
            if (delta > 0 && columns.current[i] > 50) next = i;
            else if (delta < 0 && columns.current[i] < 2000) next = i;
          }
        });
        if (next != -1) {
          columns.current[index] += delta;
          columns.current[next] -= delta;
        }
      }

      if (
        keepColumnSize < columns.current.reduce((a, v) => a + v, 0) ||
        columns.current.reduce((acc, v) => {
          if (v < 50 || v > 2000) acc = true;
          else acc = false;
          return acc;
        }, false)
      )
        columns.current = [...keepColumns];
      else if (table.current) {
        table.current.style.gridTemplateColumns =
          columns.current.join("px ") + "px";
        if (tbody.current) {
          tbody.current.style.gridTemplateColumns =
            columns.current.join("px ") + "px";
        }
      }
    },
    [columnOptions]
  );

  return {
    table,
    isLoading,
    setColSize,
    tbody,
  };
};

export default useResizeTable;
