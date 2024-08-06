import { useRef, useEffect, useState } from "react";

interface ICTableHeader {
  children: React.ReactNode;
  resizeWidth: (delta: number) => void;
  lastIndex?: boolean;
}

const CTableHeader = ({ children, resizeWidth, lastIndex }: ICTableHeader) => {
  const [handlerHeight, setHandlerHeight] = useState<number>(0);
  const headerRef = useRef<HTMLTableHeaderCellElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (
      headerRef.current?.parentElement?.parentElement?.parentElement
        ?.offsetHeight
    )
      setHandlerHeight(
        headerRef.current?.parentElement?.parentElement?.parentElement
          .offsetHeight
      );
  }, []);

  useEffect(() => {
    if (headerRef.current?.nextElementSibling) {
      const onMouseUp = () => {
        setIsActive(false);
      };
      const onMouseMove = (e: MouseEvent) => {
        if (headerRef.current && isActive) {
          resizeWidth(e.movementX);
        }
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);

      return () => {
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, [isActive, resizeWidth]);

  return (
    <th className="col-head" ref={headerRef}>
      <span>{children}</span>
      {lastIndex || (
        <>
          <div
            onMouseDown={() => {
              setIsActive(true);
            }}
            className={`handle ${isActive ? "handleActive" : ""}`}
          />
          <div
            className={`handleLine ${isActive ? "handleActive" : ""}`}
            style={{ height: handlerHeight }}
          />
        </>
      )}
    </th>
  );
};

export default CTableHeader;
