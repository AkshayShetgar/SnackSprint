import {sum} from "../sum";

test("sum function should calcualte the sum of two numbers", () => {

    const res = sum(1,2);

    expect(res).toBe(3);
});

