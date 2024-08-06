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

  useEffect(() => {
    if (table.current) {
      const pxMul =
        table.current.offsetWidth /
        columnOptions.reduce((acc, { ratio }) => acc + ratio, 0);

      columns.current = columnOptions.reduce(
        (acc: number[], { ratio }) => [...acc, ratio * pxMul],
        []
      );

      table.current.style.gridTemplateColumns =
        columns.current.join("px ") + "px";
    }
    setIsLoading(true);
  }, [columnOptions]);

  const setColSize = useCallback(
    (index: number, size: number) => {
      if (!columnOptions[index].isFixed) {
        const keepColumns = [...columns.current];
        const keepColumnSize = [...columns.current].reduce(
          (acc, v) => acc + v,
          0
        );

        const delta: number = size;
        let flag = false;
        if (delta > 0) {
          columns.current = columns.current.map((v: number, i: number) => {
            if (i == index) {
              const width = v + delta;
              if (50 <= width && width <= 2000 && !columnOptions[i].isFixed)
                return width;
              else {
                flag = true;
                return v;
              }
            } else if (i > index) {
              const width = v - delta;
              if (
                50 <= width &&
                width <= 2000 &&
                !flag &&
                !columnOptions[i].isFixed
              ) {
                flag = true;
                return width;
              } else return v;
            }
            return v;
          });
        } else {
          columns.current = columns.current
            .reverse()
            .map((v: number, i: number) => {
              if (i == columns.current.length - 2 - index) {
                const width = v - delta;
                if (50 <= width && width <= 2000) return width;
                else {
                  flag = true;
                  return v;
                }
              } else if (i > columns.current.length - 2 - index) {
                const width = v + delta;
                if (50 <= width && width <= 2000 && !flag) {
                  flag = true;
                  return width;
                } else return v;
              }
              return v;
            })
            .reverse();
        }

        if (keepColumnSize < columns.current.reduce((a, v) => a + v, 0))
          columns.current = [...keepColumns];
        else if (table.current)
          table.current.style.gridTemplateColumns =
            columns.current.join("px ") + "px";
      }
    },
    [columnOptions]
  );

  return {
    table,
    isLoading,
    setColSize,
  };
};

export default useResizeTable;
