import { table } from 'config/base';
import { ViewType } from 'constants';

const defaultSort = [{ field: 'order_placed', direction: 'desc' }];

export default async (formulaString) => {
  let tmpRecords = [];
  await table
    .select({ view: ViewType, filterByFormula: formulaString, sort: defaultSort })
    .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        tmpRecords.push(Object.assign({ ...record, ...record.fields }));
      });
      fetchNextPage();
    });
  return tmpRecords;
};
