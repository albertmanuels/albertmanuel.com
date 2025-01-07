---
title: "Node.js Basic"
description: "Learn Node.js basic"
date: 2025-01-07
published: true
featured: false
---

# NodeJS Basic

Object window pada browser dan object global pada Node.js merupakan Global Object

Object pada nodejs:

1. global: Global namespace. Member apapun dalam object ini dapat diakses pada cakupan global
2. process: menyediakan interaksi dengan proses node.js yang berjalan
3. console: menyediakan berbagai fungsionalitas [STDIO](https://cplusplus.com/reference/cstdio/)
4. setTimeout, clearTimeout, setInterval, clearInterval

Ada juga objek yang merupakan “pseudo-globals” atau objek global semu. Objek ini diturunkan dari cakupan module. Karena pada nodejs semua berkas JavaScript adalah module. pseudo-globals dapat diakses layaknya global objek. 

1. module: digunakan untuk sistem modularisasi pada Node.js
2. _filename: keyword untuk mendapatkan lokasi berkas javascript yang dieksekusi
3. _dirname: keyword untuk mendapatkan root direktori dari berkas javascript yang dieksekusi
4. require: digunakan untuk mengimport module javascript

## Fundamental

### Extension

Salah satu perbedaan antara file javascript biasa (.js) dan javascript module (.mjs) terletak pada cara memanggil library tambahan. Pada file javascript biasa, pemanggilan libary tambahan menggunakan keyword `require()`. Sedangkan di pada file javascript module, pemanggilan library tambahan menggunakan keyword `import … from …`

1. File Javascript biasa (.js)

```jsx
const os = require("os")

console.log(os.platform())
```

1. File Javascript module (.mjs)

Secara default code di dalam file javascript module dijalankan secara Asynchronous, maka dari itu untuk menghandle sebuah Promise dapat langsung menggunakan `await` tanpa harus membungkusnya di dalam sebuah Async function.

```jsx
import path from "path";

function simplePromise() {
	return Promise.resolve("Helo!");
}

const operating = await simplePromise();

console.info(operating);

//Output: Helo!
```

```jsx
import os from "os"

console.log(os.platform())
```

### Buffer

Buffer adalah global function yang biasa digunakan untuk melakukan encoding-decoding dengan satuan Uint8, yaitu array yang berisikan bytes.

```jsx
const buffer = Buffer.from("Albert Manuel Simbolon", "optional encoding type"); // if encoding type not assigned, the default is utf-8

const bufferBase64 = buffer.toString("base64"); //decoding to string with encoding type is base64
console.info(bufferBase64); //
//output string base64: QWxiZXJ0IE1hbnVlbCBTaW1ib2xvbg==

const convertToStringASCII = Buffer.from(bufferBase64, "base64");
console.info(convertToStringASCII.toString("hex"));
//output string hex: 416c62657274204d616e75656c2053696d626f6c6f6e

const convertToStringUTF8 = Buffer.from(bufferBase64, "base64");
console.info(convertToStringUTF8.toString()); //If no passing arg, the default is utf-8
//output string utf8: Albert Manuel Simbolon

```

### Stream

Stream adalah global function yang merupakan turunan dari **EventEmitter** yang digunakan untuk menulis dan membaca data stream yang disimpan ke suatu file. 

```jsx
const fs = require("fs");

const writer = fs.createWriteStream("target.log"); //menuliskan data ke file target.log
writer.write("Albert "); //Data yang dituliskan
writer.write("Manuel");  //Data yang dituliskan

const reader = fs.createReadStream("target.log"); //membaca data yang terdapat pada file target.log
reader.addListener("data", (data) => { //karena stream merupakan inheritance dari EventEmitter, maka dapat menggunakan method addListener
	console.info(`Hello ${data.toString()}`); //data yang dibaca berbentuk Buffer, maka perlu dilakukan decoding ke string utf-8 menggunkan toString()
});

writer.end();

//output: Hello Albert Manuel
```

### Net

Net (singkatan dari Network) adalah standard library yang merupakan turunan dari **EventEmitter** yang digunakan untuk melakukan komunikasi client-server melalui TCP (Transfer Control Protocol).

**Net Server**

Di bawah ini ada contoh server menggunakan net. `createServer(callback)` merupakan method untuk membuat server dengan callback berupa listener untuk membaca ketika ada *client* yang terkoneksi. 

*client* (socket) dapat melakukan `addListener` untuk membaca data (Buffer) yang didapatkan dari client yang terkoneksi. 

Karena data berupa Buffer, maka perlu dilakukan encoding menjadi string menggunakan `toString()` 

`write()` digunakan untuk menuliskan data yang akan dikirimkan ke client

`listen` digunakan untuk menentukan *port* dan *host* servernya

```jsx
const net = require("net");

const server = net.createServer((client) => {
	console.info("Client connection");

	client.addListener("data", (data) => {
		console.info(`Receive data ${data.toString()}`);
		client.write(`Hello from Server`);
	});
});

server.listen(4000, "localhost");
```

Output:

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled.png) -->

**Net Client**

Berikut adalah contoh client menggunakan net yang akan menerima data dari server.

`createConnection()` digunakan untuk membuat koneksi client ke server melalui *port* dan *host* yang sudah ditentukan di server

Karena *net* merupakan inheritance dari EventEmitter maka dapat juga menggunakan `addListener` atau `on`. Pada kasus di bawah digunakan untuk membaca data (Buffer) yang didapatkan dari server.

`write()` digunakan untuk menuliskan data yang akan dikirim dari client ke server. Pada kasus di bawah, data dikirimkan secara interval setiap 2 detik.

```jsx
const net = require("net");

const client = net.createConnection({
	port: 4000,
	host: "localhost",
});

client.on("data", (data) => {
	console.info(`Receive data from server: ${data.toString()}`);
});

setInterval(() => {
	client.write("Hello From Client!\r\n");
}, 2000);
```

Output:

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%201.png) -->

### URL

URL digunakan untuk mendapatkan informasi spesifik dari suatu url.

```jsx
const { URL } = require("url");

const myweb = new URL("https://albertmanuel.com/blog");

console.log(myweb.href);
console.log(myweb.protocol);
console.log(myweb.host);
console.log(myweb.searchParams);
console.log(myweb.pathname);
```

Output: 

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%202.png) -->

Selain untuk mendapatkan informasi spesifik dari url, `URL` juga dapat digunakan untuk mengubah informasi yang terdapat string urlnya. Sebagai contoh dibawah ini, informasi *host* diubah menjadi [**www.albert.com](http://www.albert.com)**  dan ditambahkan searchParams dengan *key* **tag** dan *value* **react**.

```jsx
const { URL } = require("url");

const myweb = new URL("https://albertmanuel.com/blog");

myweb.host = "www.albert.com";
myweb.searchParams.append("tag", "react");

console.log(myweb.href);
console.log(myweb.protocol);
console.log(myweb.host);
console.log(myweb.searchParams);
console.log(myweb.pathname);
```

Output:

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%203.png) -->

### Util

Util (Utilities) digunakan untuk membantu proses pengembangan di nodejs karena menyediakan banyak internal API. Di bawah ini adalah contoh penggunaan `util`

`util.format()` adalah salah satu util yang umum digunakan untuk formatting.

%j merupakan specifier untuk melakukan format json menjadi string, sama halnya seperti menggunakan `JSON.stringify()`

```jsx
const util = require("util");

const person = {
	firstName: "Albert",
	lastName: "Manuel",
};

console.info(util.format(`Person: %j`, person));
```
<!-- 
![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%204.png) -->

### Zlib

Zlib digunakan untuk melakukan proses compress dan decompress data di dalam suatu file.

Hasil dari kompresi berupa Buffer

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%205.png) -->

<aside>
💡 Compress tidak sama dengan Encryption

</aside>

<aside>
💡 Biasanya compress bertujuan untuk mengecilkan ukuran dari file.

</aside>

**Compress**

Berikut adalah contoh penggunaan Zlib untuk compression

```jsx
const zlib = require("zlib");
const fs = require("fs");

const source = fs.readFileSync("zlib-compress.js");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.txt", result);
```

Pertama, file yang ingin dicompress akan dibaca menggunakan `readFileSync`, kemudian di-compress menjadi zip (Buffer) menggunakan `zlib.gzipSync()`.

Hasil kompresi kemudian dituliskan menggunakan `writeFileSync` ke dalam suatu file dengan nama *zlib-compress.txt.* Di bawah ini adalah hasilnya:

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%206.png)

![zlib-compress.txt](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%207.png) -->

zlib-compress.txt

**Decompress**

Seperti yang sudah dijelaskan di atas, zlib dapat juga digunakan untuk melakukan decompress. Berikut adalah contohnya:

```jsx
const zlib = require("zlib");
const fs = require("fs");

const source = fs.readFileSync("zlib-compress.txt");
const result = zlib.unzipSync(source);
const resultString = result.toString()

fs.writeFileSync("zlib-decompress.txt", resultString );
```

Pertama, file *zlib-compress.txt* hasil compress (Buffer) akan dibaca menggunakan `readFileSync`. Kemudian dilakukan decompress dengan passing *source* sebagai argumen di `unzipSync()`.

Dikarenakan hasil dari decompress juga merupakan Buffer, maka perlu dilakukan *convert to string* dahulu menggunakan `toString()` . Setelahnya, result dituliskan ke dalam file *zlib-decompress.txt* menggunakan `writeFileSync`.

Perbedaan hasil compress dan decompress:

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%208.png) -->

### Console

Console digunakan untuk menuliskan informasi secara spesifik pada suatu tempat atau file. Tidak seperti `console` pada umumnya yang merupakan global function dan digunakan untuk menampilkan informasi ke terminal, console yang dimaksud di sini adalah class Console yang didapatkan dari library “console”.

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%209.png) -->

Berikut adalah contoh penggunaan Console untuk menuliskan informasi ke dalam suatu file:

```jsx
const { Console } = require("console");
const fs = require("fs");

const file = fs.createWriteStream("application.log");

const log = new Console({
	stdout: file,
	stderr: file,
});

log.info("Hello World!");
log.error("Found Error!");
const person = {
	firstName: "Albert",
	lastName: "Manuel",
};

log.table(person);
```

Pertama, tentukan file yang diingin dituju sebagai tempat informasi dituliskan menggunakan `createWriteStream` , dalam kasus di atas file tujuannya adalah **application.log**. Kemudian, class Console dipanggil menggunakan keyword `new Console()` yang membawa argumen object berisikan key `stdout` dengan *value* yaitu file mana/apa yang ingin dituju untuk ditampilkan informasi dari consolenya, dan key `stderr` dengan *value* yaitu file mana/apa yang ingin dituju untuk ditampilkan informasi error dari consolenya. Semua method yang terdapat pada console global dapat digunakan di `Console`.

Di bawah ini adalah file yang digenerate sebagai file yang akan menampilkan hasil console.
<!-- 
![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2010.png)

![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2011.png) -->

Contoh jika memisahkan file tujuan berdasarkan informasinya:

informasi error dikirimkan ke file *applicationErrorLog.log*, sedangkan infromasi lainnya dikirimkan ke *application.log.*

```jsx
 const { Console } = require("console");
const fs = require("fs");

const file = fs.createWriteStream("application.log");
const fileError = fs.createWriteStream("applicationErrorLog.log");

const log = new Console({
	stdout: file,
	stderr: fileError,
});

log.info("Hello World!");
log.error("Found Error!");
const person = {
	firstName: "Albert",
	lastName: "Manuel",
};

log.table(person);
```

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2012.png) -->

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2013.png) -->

### Web Worker

**Concurrent** adalah kemampuan satu Thread untuk mengelola beberapa pekerjaan. Sebagai contoh:

Ada task X yang sedang dikelola/dikerjakan, kemudian tiba-tiba ada task Y yang harus segera dikerjakan, maka thread akan switch untuk mengelola task Y terlebih dahulu sampai selesai, kemudian setelah task Y selesai maka thread kembali lagi mengelola task X. 

**Pararel** adalah kemampuan menjalankan beberapa thread untuk mengerjakan satu atau lebih task. 

Sebagai contoh:

Ada sebuah piring berisi nasi, kemudian nasi di piring tersebut dimakan oleh beberapa orang secara bersamaan. Orang diartikan sebagai Thread dan Piring nasi diartikan sebagai Task.

**Web Worker** biasanya digunakan untuk menghandle proses yang berat, untuk mencegah terganggunya proses di Main Thread (Main Thread biasanya digunakan untuk UI). Pengertian dari Web Worker sendiri adalah javascript yang berjalan di belakang layar dengan kemampuan untuk menjalakan proses Thread yang berbeda dari Main Thread. Sehingga jika terdapat proses yang berat dan membutuhkan waktu proses yang lama di belakang layar, user akan tetap bisa melakukan klik, scroll, dsb karena UI tidak akan ngefreeze untuk menunggu proses berat tersebut selesai.

Contoh penerapan Web Worker:

```jsx
const { threadId, Worker } = require("worker_threads");

const worker1 = new Worker("./worker.js");
const worker2 = new Worker("./worker.js");

worker1.addListener("message", (message) => {
	console.info(`Thread-${threadId} Receive from worker 1: ${message}`);
});

worker2.addListener("message", (message) => {
	console.info(`Thread-${threadId} Receive from worker 2: ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
```

Pertama, panggil class Worker menggunakan `new Worker()` dan passing as argument file yang menjalankan proses berat. 

`threadId` digunakan untuk membedakan `id` dari masing-masing thread atau worker.

Karena Worker juga merupakan inheritance dari *EventEmitter* maka dapat menggunakan listener untuk listen eventnya (messge) dan menangkap data yang dikirimkan dari workers melalui parameter (message) di callbacknya. 

Jika ingin mengirimkan data dari web-worker ke masing-masing worker dengan thread yang berbeda, maka dapat menggunakan `postMessage(data)` dengan **data** sebagai argumennya.

**Worker**

Contoh penerapan file worker (thread):

```jsx
const { threadId, parentPort } = require("worker_threads");

parentPort.addListener("message", (message) => {
	for (let i = 0; i < message; i++) {
		console.info(`Thread-${threadId} Send message ${message}`);
		parentPort.postMessage(i);
	}

	parentPort.close();
});
```

`threadId` digunakan untuk membedakan `id` dari masing-masing thread yang berbeda. 

`parentPort` adalah parent workernya (web worker). `parentPort` juga merupakan inheritance dari *EventEmitter* sehingga dapat melakukan listener dengan *event* dan menerima data (message) yang dikirimkan dari web worker/ parent workernya. 

Sama seperti di Web Worker, digunakan `postMessage(data)` untuk mengirimkan data ke parent workernya. 

Jika ingin menghentikan proses komunikasi web-worker dan worker maka digunakan `parentPort.close()`.

Output:

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2014.png) -->

### HTTP/HTTPS Client

HTTP/HTTPS Client digunakan untuk simulasi request dari client di NodeJs.

Berikut contoh penggunaan HTTP/HTTPS client:

```jsx
const https = require("https");

const endpoint = "https://eog8lgi78o1ircq.m.pipedream.net";

const request = https.request(
	endpoint,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	},
	(response) => {
		response.addListener("data", (data) => {
			console.info(`Receive: ${data.toString()}`);
		});
	}
);

const body = JSON.stringify({
	fistName: "Albert",
	lastName: "Manuel",
});

request.write(body);
request.end();
```

`endpoint` merupakan url endpoint yang ingin dituju

penggunaan http atau https mengikuti protocol dari endpoint yang dituju. Pada kasus di atas menggunakan `https` karena protocol pada endpointnya juga `https` 

Response:

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2015.png) -->

Sesuai dengan Response Body yang terdapat di website mock endpoint (dalam kasus ini website pipedream)

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2016.png) -->

### HTTP/HTTPS Server

HTTP/HTTPS Server digunakan untuk membuat server yang dapat menerima request dan juga mengembalikan response.

Berikut adalah contoh penerapannya:

Pertama, import library http atau https menggunakan `import .. from …` atau `require()`.

Kemudian bikin server menggunakan `createServer()` yang menerima request dan response. Pada kasus di bawah, dilakukan pengecekan apakah request.method === “POST”, jika `true` maka request dapat di-listen dengan event listener `data`, yang mengembalikan data pada param callback. Data tersebut merupakan body yang dikirimkan dari client saat melakukan POST request. 

Terdapat juga param response yang digunakan untuk mengirimkan response ke client dengan `response.write()` lalu setelah response terkirim maka response dapat diakhiri dengan `response.end()`.

```jsx
const http = require("http");

const server = http.createServer((request, response) => {
	if (request.method === "POST") {
		request.addListener("data", (data) => {
			response.setHeader("Content-Type", "application/json");
			response.write(`${data}`);
			response.end();
		});
	} else {
		response.write("Hello World YEE!");
		response.end();
	}
});

server.listen(3000);
```

Untuk mencoba server yang sudah dibuat, dapat menjalankan perintah berikut di terminal:

```jsx
node http-server.js
```

Kemudian buka postman dan sesuaikan endpoint yang ingin dituju dengan port yang sama seperti pada `server.listen()`

<!-- ![Untitled](NodeJS%20Basic%20bc9908d8cffc4da3b887da16097e4c5b/Untitled%2017.png) -->

### Cluster

Cluster digunakan untuk menjalankan worker di beberapa process, sehingga tidak membebani hanya 1 process saja. 

```jsx
const os = require("os");
const http = require("http");
const cluster = require("cluster");

if (cluster.isPrimary) {
	//jalankan worker
	for (let i = 0; i < os.cpus().length; i++) {
		cluster.fork();
	}

	cluster.addListener("exit", (worker) => {
		console.info(`Worker-${worker.id} is exit`);
		cluster.fork();
	});
}

if (cluster.isWorker) {
	const server = http.createServer((request, response) => {
		response.write(`Response from proccess ${process.pid}`);
		response.end();
		process.exit();
	});

	server.listen(3000);
}
```

Cluster terbagi atas 2 yaitu Primary dan Worker. Primary hanya bertugas untuk memanajemen kerja dari Worker. Sedangkan Worker bertugas untuk menjalankan rangkaian proses. 

Pada contoh penerapan Cluster di atas, dilakukan pengecekan terlebih dahulu untuk membedakan Cluster Primary dan Worker. 

Pada **Cluster Primary**, dilakukan looping sebanyak jumlah cpus yang terdapat pada komputer yang digunakan, yaitu sebanyak `os.cpus().length` dan tiap looping akan dijalankan pula Worker dengan menggunakan `cluster.fork()`. Karena Cluster juga merupakan inheritance dari EventEmitter, maka dapat dilakukan listener dengan event “exit” yang callbacknya akan dijalankan setiap kali ada Worker yang *exit* atau berhenti. Namun pada contoh di atas, tiap kali ada Worker yg exist maka dijalankan Worker yang baru dengan `cluster.fork()`.

Lanjut ke pengecekan **isWorker**, jika dicek cluster adalah Worker `cluster.isWorker` maka jalankan suatu process. Pada contoh kasus di atas, Worker bertugas untuk menjalankan process `createServer()` menggunakan `http`. Server menerima request dan response, kemudian server mengirimkan response dengan `response.write()` yang berisi `id` dari tiap process yang dijalankan.

Setelah response dikirim, maka response diakhiri dengan `response.end()` dan process juga diakhiri dengan `process.exit()`.

Dengan menggunakan cluster, kita dapat memaksimalkan kinerja CPU untuk melakukan beberapa process berbeda.