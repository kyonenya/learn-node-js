"use strict";
{
    const repository = (execute) => {
        // const param = { name: 'posts' };
        let param = { name: '' };
        const setParam = (arg) => param = arg;
        const sql = `SELECT * FROM ${param.name}`;
        return [() => execute(sql), setParam];
    };
    const execute = (sql) => console.log(sql);
    const [invoke, setParam] = repository(execute);
    setParam({ name: 'manuscripts' });
    invoke();
}
