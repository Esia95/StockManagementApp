import { helper } from '@ember/component/helper';

function shouldDisplayColumn([company, columnName]) {
  return company.tableFields.includes(columnName);
}

export default helper(shouldDisplayColumn);
