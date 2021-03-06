---
layout: post
title: Anki 和 Kindle
date: 2019-03-16 15:45:30 +0000
categories: anki kindle

---
之前好几次被推荐过一个叫 Anki 的帮助记单词的软件，出于好奇下载试用过，觉得还行但是似乎没什么神奇的，不过是个结合了记忆曲线来辅助记单词的东西，界面也丑丑的，于是就没有下文了。

![image-20190316231655398](/assets/images/image-20190316231655398.png)

18 年年末在读 Ray Dalio 的书：原则，因为还打着想加强下英语的小算盘，所以选的是在 Kindle 上读英文版：Principles，很快我就发现，单词是一个问题。

如果是看文学类的书，对有些不懂的词，借着上下文，猜测大意即可，但 Principles 是一本操作性极强的书，如果只是当作小说马虎读过，收获会大打折扣，Kindle 内置的词典勉强可用，但随着阅读的进行，我发现新的词越来越多，而且重复出现但又仅仅只混了个眼熟的单词开始接二连三。

当我发现自己一再的在 Kindle 那并不灵敏的屏幕上笨拙的对着那些熟悉的陌生单词戳来戳去时，我知道需要花点儿时间来背下那些单词了。

Kindle 倒是有个聊胜于无的生词本功能，不说功能简陋，就单是需要在 kindle 上用它那迟钝的屏幕频繁操作这一点，相信都能逼疯不少人。

其他的方案呢，这时那个已经被我遗忘在遗忘曲线尽头的 Anki 重新露出了头。如果能把 Kindle 的生词导到 Anki 上，岂不妙哉？那个界面丑丑的软件，至少被用来背单词会是一把好手。

Kindle 的单词本身是记在一个 sqlite 文件里的，而 Anki 又是一个完全开源的软件，导出生词到 Anki，当然是可能的。

本着“你遇到的问题，大多早就已经被解决过了”的原则，我搜索了下有没有现成的解决方案，果然！而且超出我的想象：不仅有单词，而且将单词对应的字典解释及书中相关句子，都一并导出了！

项目在：https://github.com/NdYAG/Kindle2Anki

效果如图：

![*](https://github.com/NdYAG/Kindle2Anki/raw/master/kindle_anki.png)

使用的方法也很简单，按照项目的 README 执行即可，基本是三步：

1. 把 Kindle 的词典转换成 rawml 格式
2. 对 Kindle 的生词文件 vocab.db 执行命令，生成带单词、解释和句子的 Anki 格式的文件
3. 用 Anki 的桌面程序将以上文件导入

这时我才真正意识到 Anki 这个软件的好处，它确实还是没有什么神奇的地方，可是它做好了一切能帮你做好的事情。想象一下没有它，我需要怎么来背单词，笨一点我得把所有的单词抄在一个本子上，然后每天及其低效的去一遍遍不分熟悉与否的去花几乎同样的时间过每一个单词，聪明一点的，我知道了那个神奇的记忆曲线，碰巧我又会写程序，于是我需要自己写一个程序，来按照那个曲线安排好每天需要背诵、需要复习的单词，这个有一些工作量，但是想想似乎也没那么难，这个程序当然最好先有网页版，这样我在手机上也能随时使用，不过桌面版最好也能有，哦，如果加上统计功能，就最好了，然后。。。虽然我的初衷只是要好好读完那本 Principles 啊，而幸运的是，这些，都已经有了，Anki 帮我做好了这一切，留给我的只剩一件事情，最困难但其实也是最简单的那一件：真的去背那些单词。

使用一段时间之后，甚至我之前一直鄙夷的那一点：丑，也成了一个有个性的优点：既然我这么有用，为什么还要花功夫去长得好看来取悦你呢？

最后，附一张我现在的使用截屏：

![image-20190316231233661](/assets/images/image-20190316231233661.png)

(是的，那个 77，是最近偷懒了...)

***

_看完笑来的新书之后，特别感慨是他对写作的好处的描述：教是最好的学习方式。_

_对于大部分人，当然没有随时可以站在讲台上教的机会，那么写作就成了最实际最方便的教学方式，即使台下没有观众，只要开始写，就会有长进。_