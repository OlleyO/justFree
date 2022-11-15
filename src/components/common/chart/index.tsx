import styles from "./styles.module.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  PieChart,
  Line,
  CartesianAxis,
  Dot,
} from "recharts";
import Dropdown from "../dropdown";
import { graphDatatype } from "../../../core/types";
import classNames from "classnames";
import { generateRandomColor } from "../../../core/utils";

interface Props {
  type: "area" | "line" | "pie";
  lineType?: "monotone" | "linear";
  data: graphDatatype;

  className?: string;

  contentDirection?: "horizontal" | "vertical";

  title: string;
  subtitle: string;

  someBigText?: string;

  withDropdown?: boolean;
  dropdownValue?: number;

  hideAxis?: boolean;
  hideGrid?: boolean;
  hideTooltip?: boolean;

  showDots?: boolean;
  exportPdf?: boolean;

  strokeWidth?: number;

  onDropdownChange?: (value: string) => void;
}

const Chart: React.FC<Props> = ({
  data,
  type,
  title,
  subtitle,
  className,
  withDropdown,
  dropdownValue,
  onDropdownChange,
  strokeWidth,
  showDots,
  hideAxis,
  hideGrid,
  hideTooltip,
  lineType = "monotone",
  contentDirection = "vertical",
  someBigText,
  exportPdf,
}) => {
  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <AreaChart
            data={data}
            margin={{
              top: 25,
              left: -25,
              bottom: 0,
            }}
          >
            {!hideGrid && <CartesianGrid vertical={false} />}
            {!hideAxis && (
              <>
                <XAxis
                  dataKey="name"
                  padding={{
                    left: 25,
                  }}
                />
                <YAxis />
              </>
            )}

            {!hideTooltip && <Tooltip />}

            {Object.keys(data[0]).map((key) => {
              const color = generateRandomColor();

              return (
                key !== "name" && (
                  <Area
                    key={color}
                    type={lineType}
                    dataKey={key}
                    stroke={color}
                    fill={color}
                  />
                )
              );
            })}
          </AreaChart>
        );

      case "line":
        return (
          <LineChart
            data={data}
            margin={{
              top: 25,
              left: -25,
              bottom: 0,
            }}
          >
            {!hideGrid && <CartesianGrid vertical={false} />}
            {!hideAxis && (
              <>
                <XAxis
                  dataKey="name"
                  padding={{
                    left: 25,
                  }}
                />
                <YAxis />
              </>
            )}
            {!hideTooltip && <Tooltip />}

            {Object.keys(data[0]).map((key) => {
              const color = generateRandomColor();

              return (
                key !== "name" && (
                  <Line
                    key={key}
                    type={lineType}
                    dataKey={key}
                    dot={showDots ? <Dot /> : (null as unknown as undefined)}
                    stroke={color}
                    strokeWidth={strokeWidth}
                  />
                )
              );
            })}
          </LineChart>
        );
      case "pie":
        return <PieChart></PieChart>;
    }
  };

  return (
    <div
      className={classNames(
        styles["graph-container"],
        className,
        styles[contentDirection]
      )}
    >
      <div className={styles["graph-head"]}>
        <div className={styles["text-container"]}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {withDropdown && (
          <Dropdown
            className={styles.dropdown}
            type="dropdown-graph"
            onItemClick={() => {
              return;
            }}
          />
        )}
      </div>
      {someBigText && <div className={styles["big-text"]}>{someBigText}</div>}
      <ResponsiveContainer height={"95%"}>{renderChart()}</ResponsiveContainer>
      {exportPdf && (
        <button className={styles["export-pdf"]}>Export pdf</button>
      )}
    </div>
  );
};

export default Chart;
