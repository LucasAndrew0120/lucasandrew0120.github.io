---
title: 依赖于WebDav实现同步的软件分享
date: 2025-09-26 08:22:08
top: 5
cover: https://pub-f2fe12f247d04d8f8890d5b24f8e6a37.r2.dev/rsdld-cover-20251104-i3m9q.webp
tags:
    - 分享
description: 对于WebDav的原理不多赘述，我们具体来看一下WebDav的应用，在国内环境下，最好的WebDav服务提供商就是坚果云，免费，不限应用数
copyright_author: Lucas Andrew
copyright_author_href: https://github.com/LucasAndrew0120
copyright_info: 此文章版权归 Lucas Andrew 所有，如有转载，请注明来自 <a href="https://lris625.top/">Lucas的小博客</a>
---
>对于WebDav的原理不多赘述，我们具体来看一下WebDav的应用，在国内环境下，最好的WebDav服务提供商就是坚果云，免费，无线应用数。

下面分享一下我自己在用的WebDav应用：

- **[开源阅读](https://github.com/gedoor/legado)**：非常强大的电子书软件，使用WebDav后可以同步主题，页面设置，书源，订阅源，书架记录等，阅读是一款可以自定义来源阅读网络内容的工具，为广大网络文学爱好者提供一种方便、快捷舒适的试读体验。

- **[Kazumi](https://github.com/Predidit/Kazumi)**：动漫资源聚合播放软件，支持导入播放源，提供番剧更新日程，支持超分辨率，投屏，一起看，WebDav可以同步番剧记录和软件设置，Github地址：Predidit/Kazumi： 基于自定义规则的番剧采集APP，支持流媒体在线观看，支持弹幕，支持实时超分辨率。

- **[异次元](https://yiciyuan.lanzoui.com/b00ej0kba)**：与开源阅读同等地位的漫画软件，同样支持WebDav同步阅读记录，漫画源，地址：异次元 – 源仓库
  
- **[Joplin](https://joplinapp.org/)**：笔记领域的大哥，强大无需多言，官网：乔普林

- **[LN Note](http://www.lesliexin.com/)**：一位独立开发者的作品，支持可视化编辑和Markdown编辑，来自小众论坛：LESLIE NOTE 本地笔记软件（2025-05-29：更新 v5.37，易用性功能） – 发现频道 – 小众软件官方论坛

- **[Tampermonkey(油猴)](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd)**：世上最伟大的浏览器扩展，支持WebDav同步油猴设置（鉴于油猴本身的浏览器同步不能跨设备，Google Drive，Onedrive，Dorpbox的使用有一定门槛，所以WebDav同步是最好选择）.

- **[Floccus bookmarks sync](https://floccus.org/)**：浏览器收藏夹同步扩展，很多朋友不只使用一个浏览器，或者需要迁移同步数据，每次手动导出导入太麻烦，而这个扩展可以自动同步收藏夹变化，甚至可以同步历史记录.

另外还有一些🐱的客户端同样支持WebDav同步配置文件，这里不便多讲

结语：WebDav并不是配置很麻烦的技术，配置成功一次，其他的配置都大差不离，所以大胆尝试吧