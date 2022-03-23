<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/Ziqx/zscript/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/Ziqx/zscript.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/Ziqx/zscript/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/Ziqx/zscript.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/Ziqx/zscript/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/Ziqx/zscript/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://zscript.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-zscript.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/zscript"><img alt="Build" src="https://img.shields.io/badge/npm-zscript-orange"/></a>
  
</p>
<p align="center">
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g zscript
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file</h4><br/>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://zscript.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
zinga
  bol bhai "Hello bhai";
bazinga

```

<h4 align="left">Run</h4>

```
zscript test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```



<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>zinga</code> is the entrypoint for the program and all program must end with <code>bazinga</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

zinga
// Write code here
bazinga

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>bhai ye hai</code>.</p>

```

zinga
  bhai ye hai a = 10;
  bhai ye hai b = "two";
  bhai ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bazinga
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla. sahi and galat</code> are the boolean values.</p>

```

zinga
  bhai ye hai a = 10;
  bhai ye hai b = 10 + (15*20);
  bhai ye hai c = "two";
  bhai ye hai d = 'ok';
  bhai ye hai e = nalla;
  bhai ye hai f = sahi;
  bhai ye hai g = galat;
bazinga
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol bhai</code> to print anything to console.</p>

```

zinga
  bol bhai "Hello World";
  bhai ye hai a = 10;
  {
    bhai ye hai b = 20;
    bol bhai a + b;
  }
  bol bhai 5, 'ok', nalla , sahi , galat;
bazinga
```

<h3 align="center">Conditionals</h3>
<p align="center">zscript supports simple if else construct , <code>agar bhai</code> block will execute if condition is <code>sahi</code> and <code>warna bhai</code> block will execute if condition is <code>galat</code>.</p>

```

zinga
  bhai ye hai a = 10;
  agar bhai (a < 25) {
   bol bhai "a is less than 25";
  } warna bhai {
   bol bhai "a is greater than or equal to 25";
  }
bazinga
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak bhai</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.</p>


```

zinga
  bhai ye hai a = 0;
  jab tak bhai (a < 10) {
   a += 1;
   agar bhai (a == 5) {
    bol bhai "andar se bol bhai ", a;
    agla dekh bhai;
   }
   agar bhai (a == 6) {
    bas kar bhai;
   }
   bol bhai a;
  }
  bol bhai "done";
bazinga
```



