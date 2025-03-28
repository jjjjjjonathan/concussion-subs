export type ConcussionSubData = {
  reportName: string;
  columnTypes: Array<string>;
  columnNames: Array<string>;
  columnKeys: Array<string>;
  results: Array<{
    date: number;
    uid: number;
    name: string;
    club: string;
    displayMinute: string;
    '#result_id#': string;
    secondPersonId: number;
    lastupdateddatetime: number;
    secondPersonName: string;
    matchId: number;
  }>;
  totalSize: number;
  page: number;
  pageSize: number;
  lastPage: number;
  sortField: string;
  sortDirection: string;
  locale: string;
  pivot: boolean;
  curl: any;
  apiKeyRequestURL: string;
  reportTemplateID: number;
  distributionGroup: boolean;
  dataSnapshot: boolean;
  dynamicList: boolean;
};
