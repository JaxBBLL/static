# @liusc/utils

安装使用

```bash
npm install @liusc/utils -S
```

## autoRefresh

`autoRefresh([options=])`

> web worker 中轮询检测前端静态页面是否更新，如果是则弹出确认提示框，选择是则刷新页面。

| 参数    | 说明                                                                       | 类型   | 默认值                                                                 |
| ------- | -------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------- |
| options | 参数对象 <br/>path 请求页面路径，content 提示文本，duration 检测间隔毫秒数 | object | { path: "./", content: "页面有更新，点击确定刷新页面",duration: 4000 } |

## base64

> base64 编码，解码

- base64.encode

> base64.decode 解码

`encode(string)`

示例:

```js
import { base64 } from "@liusc/utils";

base64.encode("abcde"); // -> YWJjZGU=
```

- base64.decode

> base64.decode 解码

`decode(string)`

示例:

```js
import { base64 } from "@liusc/utils";

base64.decode("YWJjZGU="); // -> abcde
```

## camelize

`camelize(string)`

> 横线转驼峰命名

示例:

```js
import { camelize } from "@liusc/utils";

const name = camelize("ab-cd-ef");
console.log(name); //ab-cd-ef ==> abCdEf
```

## cloneDeep

`cloneDeep(value)`

> 数据深拷贝

示例:

```js
import { cloneDeep } from "@liusc/utils";

const data = cloneDeep([1, 2, 3, 4, 5]);
console.log(data); // -> [1, 2, 3, 4, 5]
```

## compressImg

`compressImg(img,type,mx,mh,quality)`

> 压缩图片

| 参数    | 说明                       | 类型              | 默认值      |
| ------- | -------------------------- | ----------------- | ----------- |
| img     | 被压缩的 img 对象          | HTMLImageElement  | -           |
| type    | 压缩后转换的文件类型       | string            | 'image/png' |
| mx      | 触发压缩的图片最大宽度限制 | number            | -           |
| mh      | 触发压缩的图片最大高度限制 | number            | -           |
| quality | 图片质量 0~1               | number            | 1           |

示例:

```js
import { compressImg } from "@liusc/utils";

const newImg = compressImg(img, "image/png", 500, 300, 0.8).then((blob) =>
  console.log(blob)
);
```

## copyText

`copyText(string)`

> 复制文本

示例:

```js
import { copyText } from "@liusc/utils";

copyText("文本");
```

## debounce

`debounce(func, [wait=0], [options=])`

> 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。

**如果 leading 和 trailing 选项为 true, 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用防抖方法。如果 wait 为 0 并且 leading 为 false, func 调用将被推迟到下一个点，类似 setTimeout 为 0 的超时。**

| 参数             | 说明                         | 类型      | 默认值 |
| ---------------- | ---------------------------- | --------- | ------ |
| func             | 要防抖动的函数               | Function  | -      |
| wait             | 需要延迟的毫秒数             | number    | 0      |
| options          | 选项对象                     | object    | -      |
| options.leading  | 指定在延迟开始前调用         | boolean   | false  |
| options.maxWait  | 设置 func 允许被延迟的最大值 | number    | -      |
| options.trailing | 指定在延迟结束后调用         | boolean   | true   |

```js
import { debounce } from "@liusc/utils";

function sayLove(name) {
  return name;
}

debounce(sayLove, 200, { maxWait: 1000 });
```

## delay

`delay(func, wait, [args])`

> 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给 func。

| 参数 | 说明                         | 类型      | 默认值 |
| ---- | ---------------------------- | --------- | ------ |
| func | 要延迟的函数                 | Function  | -      |
| wait | 需要延迟的毫秒数             | number    | -      |
| args | 会在调用时传入到 func 的参数 | `...*`    | -      |

```js
import { delay } from "@liusc/utils";
delay(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
);
// => 一秒后输出 'later'。
```

## formatDate

`formatDate(time, [format])`

> 开箱即用的时间格式化工具

| 参数   | 说明                                    | 类型               | 默认值              |
| ------ | --------------------------------------- | ------------------ | ------------------- |
| time   | 传入的日期或合法的日期 string 或 number | Date/string/number | -                   |
| format | 日期格式的格式                          | string             | 'YY-MM-DD hh:mm:ss' |

示例:

```js
import { formatDate } from "@liusc/utils";

formatDate(new Date().getTime()); //2021-11-12 10:05:30
formatDate(new Date().getTime(), "YYYY年MM月DD日"); //2021年11月12日
formatDate(new Date().getTime(), "今天是YYYY/MM/DD HH:mm:ss"); //今天是2021/11/12
```

## isIdCard

`isIdCard(idCard)`

> 判断身份证格式函数

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| idCard | 身份证号 | string | -      |

示例:

```js
import { isIdCard } from "@liusc/utils";

// 判断是否为正确的身份证格式 => 18位
console.log(isIdCard("142431199009093611")); // -> true
// 判断是否为正确的身份证格式 => 15位
console.log(isIdCard("130503670401001")); // -> true
```

## merge

`merge(object, [sources])`

> 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为 undefined 的 sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。

**这方法会改变对象 object.**

| 参数    | 说明     | 类型      | 默认值 |
| ------- | -------- | --------- | ------ |
| object  | 目标对象 | object    | -      |
| sources | 来源对象 | ...object | -      |

```js
var object = {
  a: [{ b: 2 }, { d: 4 }],
};

var other = {
  a: [{ c: 3 }, { e: 5 }],
};

merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

## random

`random(lower, upper)`

> 返回指定范围的随机数

| 参数  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| lower | 下限 | number | -      |
| upper | 上限 | number | -      |

示例:

```js
import { random } from "@liusc/utils";

console.log(random(1, 2)); // -> 1.6718418553475423
```

## removeEmptyStringProps

`removeEmptyStringProps(object)`

> 移除对象中的空字符串属性，返回个新对象

示例:

```js
import { removeEmptyStringProps } from "@liusc/utils";

const p = removeEmptyStringProps({
  a: "",
  b: 1,
});
console.log(p); // -> { b: 1}
```

## storage

> 支持过期时间的 localStorage 库

示例:

```js
import { storage } from "@liusc/utils";

// set(key, value, [失效时间，默认一个月])
storage.set("a", "string");
storage.get("a").value; // -> string
storage.remove("a");
```

## throttle

`throttle(func, [wait=0], [options=])`

> 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。

**如果 leading 和 trailing 都设定为 true 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用。**
**如果 wait 为 0 并且 leading 为 false, func 调用将被推迟到下一个点，类似 setTimeout 为 0 的超时。**

| 参数             | 说明                 | 类型      | 默认值 |
| ---------------- | -------------------- | --------- | ------ |
| func             | 要节流的函数         | Function  | -      |
| wait             | 需要节流的毫秒       | number    | 0      |
| options          | 选项对象             | object    | -      |
| options.leading  | 指定调用在节流开始前 | boolean   | true   |
| options.trailing | 指定调用在节流结束后 | boolean   | true   |

```js
import { throttle } from "@liusc/utils";

// 避免在滚动时过分的更新定位
window.addEventListener("scroll", throttle(updatePosition, 100));

// 点击后就调用 `renewToken`，但5分钟内超过1次。
var throttled = throttle(renewToken, 300000, { trailing: false });
element.on("click", throttled);
```

## transformArray

`transformArray(tree, [childField="children"])`

> 将树结构转换成扁平数组

| 参数       | 说明                                          | 类型   | 可选值 | 默认值   |
| ---------- | --------------------------------------------- | ------ | ------ | -------- |
| tree       | 树结构数组                                    | array  | -      | -        |
| childField | 每个节点中子树的字段名，默认值为 'children'。 | string | -      | children |

示例:

```js
import { transformArray } from '@liusc/utils';

const tree = [
  {
    id: '0',
    name: '哈哈',
    pid: '',
    children: [
      {
        id: '0-1',
        name: 'js',
        pid: '0',
        children: [],
      },
      {
        id: '0-2',
        name: 'css',
        pid: '0',
        children: [
          {
            id: '0-2-1',
            name: 'css3',
            pid: '0-2',
            children: [],
          },
        ],
      },
    ],
  },
];
console.log(transformArray(tree));
/*
[
  {
    id: '0',
    name: '哈哈',
    pid: '',
  },
  {
    id: '0-1',
    name: 'js',
    pid: '0',
  },
  {
    id: '0-2',
    name: 'css',
    pid: '0',
  },
  {
    id: '0-2-1',
    name: 'css3',
    pid: '0-2',
  },
];
/*
```

## transformTree

`transformTree(list, [options=])`

> 将扁平数组转换成树结构

| 参数    | 说明     | 类型   | 可选值 | 默认值                                                          |
| ------- | -------- | ------ | ------ | --------------------------------------------------------------- |
| list    | 扁平数组 | array  | -      | -                                                               |
| options | 选项     | object | -      | { keyField: 'id', childField: 'children', parentField: 'pid', } |

示例:

```js
import { transformTree } from "@liusc/utils";

const data = [
  {
    id: "0",
    name: "哈哈",
    pid: "",
  },
  {
    id: "0-1",
    name: "js",
    pid: "0",
  },
  {
    id: "0-2",
    name: "css",
    pid: "0",
  },
  {
    id: "0-2-1",
    name: "css3",
    pid: "0-2",
  },
];

console.log(transformTree(data));
/**
 [
   {
     id: '0',
     name: '哈哈',
     pid: '',
     children: [
       {
        id: '0-1',
        name: 'js',
        pid: '0',
        children: []
      },
      {
        id: '0-2',
        name: 'css',
        pid: '0',
        children: [
          {
            id: '0-2-1',
            name: 'css3',
            pid: '0-2',
            children: []
          },
        ]
      },
     ]
   }
 ]
   */
```

## traverseTree

traverseTree(node, [callback], [childField="children"])

> 遍历树形数据

| 参数       | 说明                                          | 类型               | 可选值 | 默认值   |
| ---------- | --------------------------------------------- | ------------------ | ------ | -------- |
| node       | 树节点或树节点数组                            | INode 或 INode[]   |        | -        |
| callback   | 遍历改树的时候回调                            | (v: INode) => void | -      | -        |
| childField | 每个节点中子树的字段名，默认值为 'children'。 | string             | -      | children |

**返回值：`node`**

```js
import { traverseTree } from "@liusc/utils";

const node = {
  id: 1,
  list: [
    {
      id: 2,
    },
  ],
};
const ret = traverseTree(
  node,
  (currentNode) => {
    console.log(currentNode.id);
  },
  "list"
);

console.log(ret);
```

## uuid

`uuid([size=21])`

> 生成唯一 id, 支持设置长度

| 参数 | 说明         | 类型   | 可选值 | 默认值 |
| ---- | ------------ | ------ | ------ | ------ |
| size | 生成 id 长度 | number | -      | 21     |

```js
import { uuid } from "@liusc/utils";

console.log(uuid()); // -> LS7Z21YHnSrZrvoiVVbg7
console.log(uuid(8)); // -> RvuUN6RS
```

## worker

> web workers 封装函数

```js
import { createWorker } from "@liusc/utils";

const worker = createWorker(
  (e) => {
    postMessage(e.data);
  },
  (e) => {
    console.log(e.data); // string
  }
).start("string");

worker.end();
```
