"use strict";
{
    const repository = (execute) => {
        // const param = { name: 'posts' };
        let param = { name: '' };
        const setParam = (arg) => param = arg;
        setParam({ name: 'posts' });
        const sql = `SELECT * FROM ${param.name}`;
        return () => execute(sql);
    };
    const execute = (sql) => console.log(sql);
    const invoke = repository(execute);
    invoke();
}
