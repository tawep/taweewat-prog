# TakeMeTour's Job Quest 2020 Edition

Thank you for your interest in working at TakeMeTour. First, we would like to take a simple test on your coding skill.

Please fork this repo and work on the test. After finishing the test, please send your repo to benz@takemetour.com (Subject: JavaScript Engineer Application). Or you can simply reply an email that we've send you job quest link.

This quest has 3 parts
- **Basic JavaScript/TypeScript + Algorithm** (Any job position **must** do this part)
- **Front-end** (Only **Front-end** or **Full-stack** position **must** do this part)
- **Back-end** (Only **Back-end** or **Full-stack** position **must** do this part)

**Note:** Some answers can be answer in Thai language.

## Basic JavaScript/TypeScript + Algorithm

We would like to test your basic knowledge on writing JavaScript or TypeScript, plus we also want to test your algorithm skill a little bit.

What you need to do is write the code that solve each question and put it in folder `basic-js-ts`. We will run your code with **Node.js 12**, so check your fancy feature before using it!

**Noted that all questions on this part need to be implemented without using any external library like `lodash`**

1. **Fibonacci Sequence**: Write a function `fib` that return the value of n-th order of fibonacci sequence.

In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

**Example**

```javascript
> fib(1)
1

> fib(3)
2

> fib(12)
144
```

2. **Array shift**: Write a function `shift` that shifts the elements of array to left or right by n elements in an infinite loop.

The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,

**Example**

```javascript
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```

3. **Second max**: Write a function `secondMax` that receive an array of number. The function will return the second maximum value of the array. If there is no second max, return max instead. If an array is empty, throw and error.

**Example**

```javascript
> secondMax([2, 3, 4, 5])
4

> secondMax([9, 2, 21, 21])
9

> secondMax([4, 4, 4, 4])
4

> secondMax([4123])
4123

> secondMax([])
Error!
```

4. **FizzBuzz...But**: You may heard `FizzBuzz` task. Here we have the same rule. You will write a function `fizzBuzz` that receive a single parameter it will return the value base on these rule.

- If the input is divisable by 3, return 'Fizz'
- If the input is divisable by 5, return 'Buzz'
- If the input is divisable by both 3 and 5, return 'FizzBuzz'

**BUT we're not allow you to use `if/else` statement.** If there is any `if` or `else` word in your code. I will consider this question with 0 score :(


**Example**

```javascript
> fizzBuzz(21)
Fizz

> fizzBuzz(25)
Buzz

> fizzBuzz(45)
FizzBuzz
```

## Front-End

You are going to make a web application written with **React** which allow users to get some joke from **Chuck Norris**. His joke look like this.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- How to display the result is up to you.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Using React to build the apps. (Create React Apps / Pure Webpack setup / Next.js is fine to me)
- We allows you to use any CSS framework. (Or you don't want to use that, also OK to me)

### Bonus
- You can surprise me with any extra features from my requirement. Use your imagination!

### Front-end Questions

1. Explain the what's similar & difference between `cookie` / `localStorage` / `sessionStorage`.

2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.

3. Breifly describe how *Virtual DOM* works.

4. Consider this React's components tree

```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

If we have a state at `Apps` component, and `ComponentE` component want to access that state value. How do you implements this?

5. What different between using `relative` / `absolute` / `fixed` to position the element.

6. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.

## Back-End

You are going to made a simple **Thai's joke API**. And this API is follow to REST API pattern.

Thai's joke API can allow user to explore, add, delete, like or dislike Thai's joke.

### Endpoints
- `GET /` Get all jokes.
- `POST /` Add new joke.
- `GET /:id` Get joke by id.
- `DELETE /:id` Delete joke. (In case you hate it)
- `POST /:id/like` Like a joke. (Because we don't have authentication system yet. Like spaming is fine here.)
- `POST /:id/dislike` Dislike a joke. (Same as above. Dislike spaming is fine here.)

### Technical description
- All data must store to the database. Any database is fine. But we prefer **MongoDB**.
- Back-end code must written in Node.js. Any library or helper tools is up to you (Express / Koa / Nest.js you name it).

### Bonus
- If you implemented simple authentication with username and password, and also allow logged-in user to create or delete the joke. You will get a bonus for this task.

### Back-end Questions

1. Explain First-party cookie & Third-party cookie
- Answer: First-party cookie คือ คุกกี้สำหรับบุคคลที่หนึ่ง เป็นคุกกี้ที่ทำหน้าที่เสมือนเป็นหน่วยความจำ ที่ทำการบันทึกเว็บไซต์ที่เรากำลังเข้า ช่วยทำให้เว็บไซต์จำข้อมูลเราได้เมื่อเข้าชมเว็บไซต์อีกครั้งการตั้งค่าจะเหมือนที่เคยตั้งไว้ คุกกี้ชนิดนี้จะสามารถถูกอ่านได้โดยเว็บไซต์ที่เราเข้าเท่านั้น คุกกี้ชนิดนี้มีอายุการใช้งาน 1-2 ปี หากไม่มีการเข้าใช้เว็บไซต์ภายในเวลา เว็บเบราว์เซอร์จะทำการลบคุกกี้อัตโนมัติ
Third-party cookie คือ คุกกี้ของบุคคลที่สาม มีหน้าที่คล้ายกับ First-party cookie แต่คุกกี้ชนิดนี้จะบันทึกข้อมูลเว็บไซต์ของเราโดยเว็บไซต์ใดๆก็ได้และสามารถแบ่งปันไฟล์คุกกี้ที่บันทึกข้อมูลของเราให้เว็บไซต์ไปใช้กันได้อย่างอิสระ
2. Explain CAP Theorem.
- Answer: CAP Theorem เป็นทฤษฏีนึงที่ช่วยในการเลือก Database ที่ต้องใช้ให้เหมาะสมกับงานซึ่งจะเน้นไปให้ด้านการให้บริการข้อมูล
CAP ย่อมาจาก Consistency, Availability และ Partition Tolerance
Consistency — ข้อมูลจะต้องอัพเดตอยู่เสมอทุกครั้งที่อ่านข้อมูลจาก database จะได้ผลลัพธ์ล่าสุด
Availability — ข้อมูลจะต้องพร้อมใช้งานอยู่ตลอดเวลาถ้าดึงข้อมูลจาก database จะได้ผลลัพธ์กลับมาเสมอ
Partition Tolerance — ระบบสามารถทำงานต่อไปได้ หากมี node ใด node นึงใน distributed database ขาดการติดต่อหรือล่มอยู่
การจะทำให้ System มีคุณสมบัติพร้อมกันทั้ง 
3. Considering two queries

```javascript
const searchIds = ['1', '2', '3', ...];

const query1 = await Product.find({ id: { $in: searchIds } });

const query2 = await Promise.all(searchIds.map(searchId => Product.find({ id: searchId })));
```

Which one is faster.
- Answer: query1 เร็วกว่าเพราะไม่ต้อง Search หลายรอบแล้วค่อยนำมาแมชกันเหมือน query2
4. Explain XSS / SQL Injection / Man in the Middle Attack, and how to prevent each attack type.
- Answer: XSS ย่อมาจาก Cross site scripting คือวิธีการโจมตีช่องโหว่ของเว็บแอพพลิเคชั่นโดยการส่งหรือฝัง script ที่เขียนด้วยภาษา JavaScript เข้าไปในหน้าเว็บ เมื่อผู้ใช้ทำการโหลดหน้าเว็บ script ก็จะทำงาน
XSS แบ่งเป็น 3 ประเภท ได้แก่ Stored XSS เป็นรูปแบบถาวรโดย attacker ทำการฝัง script เข้าไปใน server 
Reflected XSS เป็นรูปแบบชั่วคราว เป็นการส่ง javascript ผ่านช่องทางรับข้อมูลหรือ url เมื่อมีการโหลดหน้าเว็บ script จะทำงานทันทีโดยอาจจะส่งเป็น link ให้ผู้ใช้ทำงานกดแล้วขโมยข้อมูลมาจากผู้ใช้ 
DOM Based XSS เป็นช่องโหว่ที่ตรวจพบได้ยาก เพราะ Document Object Model (DOM) ไม่ต้องพึ่งพา back-end ในการแสดงผล JavaScript ให้กับผู้ใช้งาน DOM จะถูกสร้างขึ้นเมื่อเบราว์เซอร์ทำการโหลด HTML หน้าเว็บเสร็จจะสร้าง Object ขึ้นมาโดยจะเป็น Object ของหน้าเอกสารนั้นๆ ซึ่งตัว Javascript สามารถที่จะเข้าไปแก้ไข Object ต่างๆได้ทำให้สามารถที่จะเกิดช่องโหว่
วิธีป้องกัน XSS อาศัยการกรองอินพุตจากผู้ใช้เป็นหลักโดยอินพุตต่างๆ ไม่ควรถูกนำมาใช้งานในทันที ต้องเริ่มต้นที่การตรวจสอบและคัดกรองข้อมูลที่ได้รับมาจากผู้ใช้งานให้ดีทุกครั้งและต้องมั่นใจได้ว่าผู้ใช้ไม่สามารถวางสคริปต์ใดๆ ลงในเว็บได้
SQL Injection คือ เป็นเทคนิคหรือรูปแบบการโจมตีของ hacker โดยอาศัยช่องโหว่ของโปรแกรม ทำให้สามารถแอบป้อนคำสั่ง SQL เข้าไปทาง Input ทั้งหลายบน UI เพื่อที่จะสามารถแก้ไขหรือเอาข้อมูลออกมาได้
วิธีป้องกัน ควรจะระมัดระวัง input string ที่มาจากทางฝั่ง Client (Web Browser) และไม่ควรใช้วิธีติดต่อกับระบบภายนอกโดยไม่จำเป็น ควรมีการกรองข้อมูลขาเข้าที่มาจาก Client อย่างละเอียดและทำการกรองข้อมูลที่มีลักษณะที่เป็น SQL injection statement ออกก่อนที่จะส่งให้กับระบบฐานข้อมูล SQL ต่อไป
Man-in-the-Middle (MitM) คือการที่มีผู้ไม่หวังดีเข้ามาแทรกกลางในการสนทนาระหว่างคน 2 คน แล้วทำหน้าที่เป็นตัวกลางในการรับส่งข้อมูลของคู่สนทนา โดยที่คู่สนทนาไม่สามารถทราบได้ว่ามีผู้อื่นเป็นผู้รับและส่งสารต่อกับคู่สนทนาของตนอยู่ ทำให้ผู้ไม่หวังดีสามารถใช้รูปแบบการโจมตีในลักษณะนี้ในการดักรับหรือเปลี่ยนแปลงข้อมูลที่ทั้ง 2 ฝั่งสื่อสารกันอยู่ได้
วิธีป้องกัน (เค้าหาวิธีป้องกันไม่ได้อะ หลักที่อ่านมาคือต้องสังเกตเว็บที่เราใช้ประจำว่ามีอะไรแปลกไปไหม อีกวิธีคือ เราสามารถตรวจสอบด้วยวิธีอย่างง่ายๆด้วยคำสั่ง arp -a ทั้งบนวินโดวส์และลินุกซ์ เพื่อดูว่ามีเลข MAC Address ของ IP คู่ใดบ้างที่ซ้ำกัน มักจะเป็นคู่ระหว่าง IP ของ Gateway กับ IP ของเครื่องแฮกเกอร์ถ้าเจอทางแก้ไขทางเดียวคือปิดเครื่องและแจ้งผู้ดูแลระบบประจำหน่วยงานของเรา)
5. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.
- Answer: callback จะทำคำสั่ง Asynchronous ให้เสร็จก่อนแล้วค่อยทำคำสั่งถัดไป เราจะใช้ callback โดย callback จะถูกเรียกเมื่อคำสั่ง Asynchronous ทำงานเสร็จแล้ว โดยธรรมเนียมแล้วเราจะให้ตัวแปรแรกของ callback เป็น error object ถ้าเป็น null แปลว่าไม่มี error
การใช้ Callback ก่อให้เกิดปัญหาที่เรียกว่า Callback hell คือ callback ซ้อน callback เต็มไปหมด เลยเกิดวิธีแก้ปัญหาโดยการใช้ Promise
ตัวแปร Promise เป็นเหมือนกับคำสัญญาว่าจะทำคำสั่งนี้ให้เรานะ โดยมันจะมีอยู่ 3 สถานะก็คือ pending, resolved, rejected เมื่อเริ่มต้นทำคำสั่ง promise จะมีสถานะเป็น pending ถ้าทำเสร็จแล้วจะมีสถานะเป็น resolved โดยจะทำคำสั่งถัดไปที่อยู่ใน .then() และถ้าทำคำสั่งไม่สำเร็จ จะมีสถานะเป็น rejected และจะไม่ทำคำสั่งถัดไป แต่จะทำคำสั่งที่อยู่ใน .catch() แทน
ข้อดีคือไม่มี callback hell แล้ว และเวลาเราจะ handle error เราก็ไม่ต้องทำที่ละจุดใน callback แล้ว
แต่ Promise ก็ยังมีข้อเสียอยู่ตรงที่จะต้องเขียน .then() ทุกครั้งที่ต้องการทำคำสั่งถัดไป ดังนั้น async/await จึงเป็นภาคต่อของ Promise โดยการเขียน async ไว้หน้า function จะเป็นการระบุว่า function นั้นทำงานแบบ asynchronous
6. Explain how HTTP protocol works.
- Answer: 1. เริ่มต้นสร้างการเชื่อมต่อระหว่างเว็บบราวเซอร์ กับ เว็บเซอร์เวอร์
	2. หลังจากเชื่อมต่อได้แล้ว เว็บบราวเซอร์จะ ร้องขอข้อมูลไปยังเว็บเซอร์เวอร์
	3. เว็บเซอร์เวอร์จะส่งข้อมูลตามที่ร้องขอ มายังเว็บบราวเซอร์ (แสดงผลหน้าเว็บที่เราเรียกใช้งาน)
	4. ยุติการเชื่อมต่อระหว่างเว็บบราวเซอร์ กับ เว็บเซอร์เวอร์การทำงาานจะเป็นอย่างนี้ตลอด ไม่ว่าจะเปิดเข้า Google เพื่อค้นหาข้อมูล หลังได้รับการแสดงผลของการค้นหาแล้ว ทั้งสองส่วนคือ เว็บบราวเซอร์ กับ เว็บเซอร์เวอร์ ก็จะยุติการเชื่อมต่อ เพราะถ้าจะเชื่อมต่อตลอดเวลาย่อมทำให้เกิดปัญหาเรื่อง bandwidth และอาจทำให้เซอร์เวอร์มีปัญหาได้