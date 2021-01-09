{
const repository = (execute: Function): [Function, Function] => {
  // const param = { name: 'posts' };
  let param = { name: '' };
  const setParam = (arg: any): void => param = arg;
  const sql = `SELECT * FROM ${param.name}`;
  return [() => execute(sql), setParam];
};

const execute = (sql: string) => console.log(sql);
const [invoke, setParam] = repository(execute);
setParam({ name: 'manuscripts' });
invoke();
}
