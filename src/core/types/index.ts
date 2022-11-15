export type datatypeForGraph1 = {
  name: string;
  value1: number;
  value2: number;
}[];

export type datatypeForGraph2 = datatypeForGraph1;

export type datatypeForGraph3 = {
  name: string;
  value1: number;
  value2: number;
  value3: number;
}[];

export type datatypeForGraph4 = {
  name: string;
  value1: number;
}[];

export type projectData = {
  name: string;
  timeSpent: string;
  lastUpdated: string;
  department: string;
  messages: number;
  progress: number;
};

export type clientHours = {
  companyName: string;
  value: number;
};

export type clientInfo = {
  fullname: string;
  workingHours: number;
  amountTotal: string;
  overdue: string;
  overallWork: number;
  location: string;
  online: boolean;
};

export type graphDatatype =
  | datatypeForGraph1
  | datatypeForGraph2
  | datatypeForGraph3
  | datatypeForGraph4;

export type pageData = {
  dataForGraph1: datatypeForGraph1;
  dataForGraph3: datatypeForGraph3;
  dataForGraph4: datatypeForGraph4;
  dataForLastGraph: datatypeForGraph4;
  clientInformation: clientInfo;
  projects: projectData[];
  clientHours: clientHours[];
  totalInLastGraph: string;
};
