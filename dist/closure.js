"use strict";
{
    ;
    const repository = (executor) => {
        return (post) => {
            const sql = `INSERT INTO posts (body) VALUES (${post.body})`;
            executor(sql);
        };
    };
    const executor = (sql) => console.log(sql);
    const invoker = repository(executor);
    invoker({ body: '本文' });
    const counter = () => {
        let count = 0;
        const countUp = () => {
            count++;
            console.log(count);
        };
        console.log(`count: ${count}`);
        return [countUp];
    };
    const [countUp] = counter();
    countUp();
    countUp();
    counter(); // -> count: 0 リセットされてしまう
}
