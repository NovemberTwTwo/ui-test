import "./App.css";
import CTableHeader from "./components/table/CTableHeader";
import useResizeTable from "./hooks/useResizeTable";

function App() {
  const { isLoading, table, tbody, setColSize } = useResizeTable([
    { ratio: 1 },
    { ratio: 2, isFixed: true },
    { ratio: 1 },
    { ratio: 1 },
    { ratio: 1 },
  ]);

  return (
    <div className="test-container">
      <table ref={table}>
        {isLoading && (
          <thead>
            <tr>
              {["A", "B", "C", "D", "E"].map((label, index) => (
                <CTableHeader
                  key={label}
                  resizeWidth={(delta: number) => setColSize(index, delta)}
                  lastIndex={index == 4}
                >
                  {label}
                </CTableHeader>
              ))}
            </tr>
          </thead>
        )}
      </table>
      <table className="tbody-container">
        {isLoading && (
          <tbody ref={tbody}>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>

            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
