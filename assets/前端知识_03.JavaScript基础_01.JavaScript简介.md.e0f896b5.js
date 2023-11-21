import{_ as a,o as s,c as e,Q as t}from"./chunks/framework.1b72a0e7.js";const v=JSON.parse('{"title":"JavaScript 简介","description":"","frontmatter":{},"headers":[],"relativePath":"前端知识/03.JavaScript基础/01.JavaScript简介.md","lastUpdated":1700550453000}'),r={name:"前端知识/03.JavaScript基础/01.JavaScript简介.md"},p=t(`<h1 id="javascript-简介" tabindex="-1">JavaScript 简介 <a class="header-anchor" href="#javascript-简介" aria-label="Permalink to &quot;JavaScript 简介&quot;">​</a></h1><h2 id="一、javascript-入门易学性" tabindex="-1">一、JavaScript 入门易学性 <a class="header-anchor" href="#一、javascript-入门易学性" aria-label="Permalink to &quot;一、JavaScript 入门易学性&quot;">​</a></h2><ul><li>JavaScript 对初学者比较友好。可以使用任何文本编辑工具编写，只需要浏览器就可以执行程序。</li><li>JavaScript 的入门较简单（进阶不易）。比如，JS 是弱变量类型的语言，变量只需要用 var/let/const 来声明</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ES5 写法</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ES6 写法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="二、既是前端语言-又是后端语言" tabindex="-1">二、既是前端语言，又是后端语言 <a class="header-anchor" href="#二、既是前端语言-又是后端语言" aria-label="Permalink to &quot;二、既是前端语言，又是后端语言&quot;">​</a></h2><p>当 JavaScript 运行在用户的终端网页，我们称之为“前端语言”。前端语言是服务于页面的显示和交互，不能直接操作数据库。 Node.js 是用 JavaScript 开发的，我们也可以用 Node.js 技术进行服务器端编程。</p><h2 id="三、javascript-的组成" tabindex="-1">三、JavaScript 的组成 <a class="header-anchor" href="#三、javascript-的组成" aria-label="Permalink to &quot;三、JavaScript 的组成&quot;">​</a></h2><p>JavaScript 基础分为三个部分：</p><ul><li><code>ECMAScript</code>：JavaScript 的语法标准。 <ul><li>包括变量、表达式、运算符、函数、if 语句、for 语句等。</li></ul></li><li><code>DOM</code>：Document Object Model（文档对象模型），JS 操作页面上的元素（标签）的 API。 <ul><li>比如让盒子移动、变色、改变大小、轮播图等等。</li></ul></li><li><code>BOM</code>：Browser Object Model（浏览器对象模型），JS 操作浏览器部分功能的 API。 <ul><li>通过 BOM 可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS 提供的 API。</p></div><h2 id="四、javascript-的特点" tabindex="-1">四、JavaScript 的特点 <a class="header-anchor" href="#四、javascript-的特点" aria-label="Permalink to &quot;四、JavaScript 的特点&quot;">​</a></h2><h3 id="_4-1解释型语言" tabindex="-1">4.1解释型语言 <a class="header-anchor" href="#_4-1解释型语言" aria-label="Permalink to &quot;4.1解释型语言&quot;">​</a></h3><p>JavaScript 简称 JS，是前端开发的一门脚本语言（解释型语言）。</p><p>解释型语言的意思是：程序执行之前，不需要事先被翻译为机器码；而是在运行时，边翻译边执行（翻译一行，执行一行）。关于解释型语言的详细介绍，上一篇文章有介绍。</p><p>为什么 JS 是解释型语言呢？这和浏览器的工作原理有关。浏览器中有一个专门的“JS 解析器”可以让 JS 边解析边执行。</p><p>由于少了事先编译这一步骤，所以解释型语言开发起来尤为方便，但是解释型语言运行较慢也是它的劣势。不过解释型语言中使用了 JIT 技术，使得运行速度得以改善。</p><h3 id="_4-2单线程" tabindex="-1">4.2单线程 <a class="header-anchor" href="#_4-2单线程" aria-label="Permalink to &quot;4.2单线程&quot;">​</a></h3><h3 id="_4-3ecmascript-标准" tabindex="-1">4.3ECMAScript 标准 <a class="header-anchor" href="#_4-3ecmascript-标准" aria-label="Permalink to &quot;4.3ECMAScript 标准&quot;">​</a></h3><p>ECMAScript 是一种由 ECMA 国际（前身为欧洲计算机制造商协会,英文名称是 European Computer Manufacturers Association）制定和发布的脚本语言规范。</p><p>JavaScript 是由公司开发而成的，问题是不便于其他的公司拓展和使用。所以欧洲的这个 ECMA 的组织，牵头制定 JavaScript 的标准，取名为 ECMAScript。</p><p>简单来说，ECMAScript 不是一门语言，而是一个标准。ECMAScript 规定了 JS 的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套 JS 语法工业标准。</p><p>ECMAScript 在 2015 年 6 月，发布了 ECMAScript 6 版本（ES6），语言的能力更强，包含了很多新特性），但也要考虑它的浏览器兼容性问题。</p><p>ECMA 赋予了 JavaScript 新的能力和活力。</p>`,23),i=[p];function l(n,c,o,d,S,u){return s(),e("div",null,i)}const J=a(r,[["render",l]]);export{v as __pageData,J as default};
