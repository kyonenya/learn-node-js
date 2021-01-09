{
const repository = (execute: Function) => {
  // const param = { name: 'posts' };
  let param = { name: '' };
  const setParam = (arg: any): void => param = arg;
  setParam({ name: 'posts'});
  const sql = `SELECT * FROM ${param.name}`;
  return () => execute(sql);
};

const execute = (sql: string) => console.log(sql);
const invoke = repository(execute);
invoke();
}
