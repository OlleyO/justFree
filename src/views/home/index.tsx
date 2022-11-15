import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Text,
} from "recharts";
import Card from "../../components/card";
import Chart from "../../components/common/chart";
import Dropdown from "../../components/common/dropdown";
import Legend from "../../components/common/legend";
import ProfileImg from "../../components/common/profile-img";
import ProjectCard from "../../components/project-card";
import Table from "../../components/table";
import {
  clientHours,
  clientInfo,
  datatypeForGraph1,
  datatypeForGraph3,
  datatypeForGraph4,
  projectData,
} from "../../core/types";
import { generateRandomColor } from "../../core/utils";
import styles from "./styles.module.scss";

interface Props {
  dataForGraph1: datatypeForGraph1;
  dataForGraph3: datatypeForGraph3;
  dataForGraph4: datatypeForGraph4;
  dataForLastGraph: datatypeForGraph4;
  clientHours: clientHours[];
  projects: projectData[];
  totalInLastGraph: string;
  clientInformation: clientInfo;
  photoUrl: string;
}

const Home: React.FC<Props> = ({
  dataForGraph1,
  dataForGraph3,
  dataForGraph4,
  dataForLastGraph,
  clientHours,
  projects,
  totalInLastGraph,
  clientInformation,
  photoUrl,
}) => {
  const [pieColors, setPieColors] = useState<string[]>([]);

  useEffect(() => {
    setPieColors(clientHours.map(() => generateRandomColor()));
  }, [clientHours]);

  return (
    <div>
      <section className={styles.section}>
        <h2 className={styles["first-h"]}>Hi Fillip,</h2>
        <p className={styles["first-p"]}>
          Checkout your latest projects and their progress
        </p>
        <div className={styles.separator} />
        <Chart
          data={dataForGraph1}
          type="area"
          withDropdown
          title="Wavy Lines"
          subtitle="Working Hours"
          className={styles["first-chart"]}
        />
      </section>
      <section className={styles.section}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <h2 className="h2">Crunch some Numbers</h2>
            <p className="p">
              See how your projects are progressing via the new statistics
              engine
            </p>
          </div>

          <div className={styles.right}>
            <span className={styles.label}>Timeline:</span>
            <Dropdown
              type="dropdown-timeline"
              onItemClick={() => {
                return;
              }}
            />
          </div>
        </div>
        {/* SEPARATOR */}
        <div className={styles.separator} />
        <div className={styles.container}>
          <div className={styles["left-graphs"]}>
            <Chart
              data={dataForGraph3}
              type="area"
              lineType="linear"
              title="96"
              subtitle="Working Hours"
              hideAxis
              hideGrid
              hideTooltip
              contentDirection="horizontal"
              className={styles["chart-small"]}
            />

            <Chart
              data={dataForGraph4}
              type="line"
              title="1,204"
              subtitle="Conversations"
              hideAxis
              hideGrid
              hideTooltip
              contentDirection="horizontal"
              className={styles["chart-small"]}
            />

            <div className={classNames(styles["chart-small"], styles.people)}>
              <div className={styles["text-container"]}>
                <h2>7</h2>
                <p>People</p>
              </div>
              <div className={styles["people-container"]}>
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
                <ProfileImg />
              </div>
            </div>
          </div>

          <Chart
            type="line"
            lineType="linear"
            data={dataForGraph1}
            title="Daily progress"
            subtitle="Working Hours"
            withDropdown
            className={styles.chart}
          />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className="h2">Current Progress</h2>
        <p className="p">
          This table show you how your current projects are behaving
        </p>
        <div className={styles.separator} />
        <div className={styles["projects"]}>
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <h2 className="h2">Crunch some Numbers</h2>
            <p className="p">
              See how your projects are progressing via the new statistics
              engine
            </p>
          </div>

          <div className={styles.right}>
            <span className={styles.label}>Timeline:</span>
            <Dropdown
              type="dropdown-timeline"
              onItemClick={() => {
                return;
              }}
            />
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.cards}>
          <Card>
            <div className={styles["card-top"]}>
              <h3>Client Hours</h3>
              <p>Working hours</p>
            </div>
            <ResponsiveContainer width={181} height={181}>
              <PieChart>
                <Pie
                  data={clientHours}
                  dataKey="value"
                  innerRadius={65}
                  outerRadius={90.5}
                >
                  <Label
                    content={(props) => {
                      const fontSize = 16;

                      const {
                        /*  @ts-ignore  */
                        viewBox: { cx, cy },
                      } = props;
                      const positioningPropsValue = {
                        x: cx,
                        y: cy - fontSize,
                        textAnchor: "middle",
                        verticalAnchor: "middle",
                      };

                      const positioningPropsText = {
                        x: cx,
                        y: cy + fontSize / 2,
                        textAnchor: "middle",
                        verticalAnchor: "middle",
                      };
                      return (
                        <>
                          {/*  @ts-ignore  */}
                          <Text {...positioningPropsValue}>{`${Math.round(
                            clientHours.reduce(
                              (prev, curr) => prev + curr.value,
                              0
                            )
                          )}`}</Text>
                          {/*  @ts-ignore  */}
                          <Text {...positioningPropsText}>Working Hours</Text>
                        </>
                      );
                    }}
                  />

                  {clientHours.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className={styles.legends}>
              {clientHours.map((entry, index) => (
                <Legend
                  key={entry.companyName}
                  name={entry.companyName}
                  value={entry.value}
                  color={pieColors[index]}
                />
              ))}
            </div>
          </Card>
          <Card noSidePadding>
            <div className={styles["card-user-photo-container"]}>
              {photoUrl && (
                <Image src={photoUrl} width={121} height={121} alt=""></Image>
              )}
              <div
                className={classNames(
                  styles.indicator,
                  clientInformation.online ? styles.online : styles.offline
                )}
              />
            </div>
            <div className={styles["user-info"]}>
              <h3>{clientInformation.fullname}</h3>
              <p>{clientInformation.location}</p>
            </div>
            <Table clientInformation={clientInformation} />

            <button className={styles["send-invoice"]}>Send invoice</button>
          </Card>
          <Card>
            <Chart
              className={styles["last-graph"]}
              data={dataForLastGraph}
              type="line"
              lineType="linear"
              title="Total overdue"
              subtitle="I need dollars"
              strokeWidth={3}
              showDots
              someBigText={`${totalInLastGraph}$`}
              exportPdf
            />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
