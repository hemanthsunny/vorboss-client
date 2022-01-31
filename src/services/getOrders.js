import { table } from 'config/base';
import { ViewType } from 'constants';

const defaultSort = [{ field: 'order_placed', direction: 'desc' }];

export default async () => {
  /*
    Ref1: https://chinarajames.com/how-to-paginate-records-in-airtable-when-using-the-api/
    Ref2: https://chinarajames.com/getting-started-with-the-airtable-api/
  */
  let tmpRecords = [];
  await table.select({ view: ViewType, sort: defaultSort }).eachPage((records, fetchNextPage) => {
    records.forEach((record) => {
      tmpRecords.push(Object.assign({ ...record, ...record.fields }));
    });
    fetchNextPage();
  });
  return tmpRecords;
};
