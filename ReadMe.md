# TypeScript Module Resolution Issue MRE

This repository serves as a minimum reproducible example for TypeScript issue microsoft/TypeScript/issues/61877, demonstrating an issue with the TypeScript TSC compiler when targeting `ES6` and newer:

### tsconfig.json
```json
{
	"include":
	[
		"*.*ts"
	],
	"compilerOptions":
	{
		"target": "esnext",
		"strict": true,
		"noEmitOnError": true,
		"noImplicitAny": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"sourceMap": true
	}
}
```

With this configuration set, TSC throws numerous `error TS2792: Cannot find module 'undici-types'` compile time build errors.

### Compiler Output

<details>

```
TypeScript\WebpackTest> npm run build

> webpacktest@1.0.0 build
> npx tsc

node_modules/@types/node/globals.d.ts:6:76 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

6 type _Request = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").Request;
                                                                             ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:7:77 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

7 type _Response = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").Response;
                                                                              ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:8:77 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

8 type _FormData = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").FormData;
                                                                              ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:9:76 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

9 type _Headers = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").Headers;
                                                                             ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:10:81 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

10 type _MessageEvent = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").MessageEvent;
                                                                                   ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:12:14 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

12     : import("undici-types").RequestInit;
                ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:14:14 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

14     : import("undici-types").ResponseInit;
                ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:15:78 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

15 type _WebSocket = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").WebSocket;
                                                                                ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:16:80 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

16 type _EventSource = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").EventSource;
                                                                                  ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:17:79 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

17 type _CloseEvent = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").CloseEvent;
                                                                                 ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:323:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

323         : typeof import("undici-types").Request;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:332:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

332         : typeof import("undici-types").Response;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:339:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

339         : typeof import("undici-types").FormData;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:346:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

346         : typeof import("undici-types").Headers;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:353:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

353         : typeof import("undici-types").MessageEvent;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:357:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

357         : typeof import("undici-types").WebSocket;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:361:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

361         : typeof import("undici-types").EventSource;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/globals.d.ts:365:25 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

365         : typeof import("undici-types").CloseEvent;
                            ~~~~~~~~~~~~~~

node_modules/@types/node/http.d.ts:1972:29 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

1972     const WebSocket: import("undici-types").WebSocket;
                                 ~~~~~~~~~~~~~~

node_modules/@types/node/http.d.ts:1976:30 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

1976     const CloseEvent: import("undici-types").CloseEvent;
                                  ~~~~~~~~~~~~~~

node_modules/@types/node/http.d.ts:1980:32 - error TS2792: Cannot find module 'undici-types'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

1980     const MessageEvent: import("undici-types").MessageEvent;
                                    ~~~~~~~~~~~~~~


Found 21 errors in 2 files.

Errors  Files
    18  node_modules/@types/node/globals.d.ts:6
     3  node_modules/@types/node/http.d.ts:1972
PS TypeScript\WebpackTest>
```

</details>

## Expected Output

Setting the TSC compiler `target` option to `ES6` or newer should compile flawlessly without setting any other TSC configuration option.