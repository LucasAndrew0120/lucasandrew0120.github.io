document.addEventListener('DOMContentLoaded', () => {
    // 初始化 tippy
    tippy('[data-tippy-content]');
    
    const mainWindowTotal = document.querySelector('.wg__act_window');

    const mainWindowCloseButton = document.querySelector('.wg__act_window--main--window-title-close-button');
    const mainWindowBackdrop = document.querySelector('.wg__act_window--backdrop');
    
    mainWindowCloseButton.addEventListener('click', () => {
        mainWindowTotal.classList.remove('isVisible');
        mainWindowBackdrop.classList.remove('isVisible');
        document.body.classList.remove('scrollBAN');
    });

    mainWindowBackdrop.addEventListener('click', () => {
        mainWindowTotal.classList.remove('isVisible');
        mainWindowBackdrop.classList.remove('isVisible');
        document.body.classList.remove('scrollBAN');
    });

    const defaultPlayController = document.querySelector('.wg__act_capsule--control-area');
    const mobilePlayerContainer = document.createElement('div');
    mobilePlayerContainer.className = 'wg__act_window--main-content--player-container';

    // 克隆播放控制器
    const mobilePlayController = defaultPlayController.cloneNode(true);
    mobilePlayController.classList.add('isMobilePlayer');

    // 组装移动端播放控制器
    mobilePlayerContainer.appendChild(mobilePlayController);
    // 移动端播放控制器不包含标题
    const titleToRemove = mobilePlayController.querySelector('.wg__act_capsule--control-area--song-title');
    if (titleToRemove) {
        titleToRemove.remove();
    }

    const mainWindow = document.querySelector('.wg__act_window--main-content');
    // 获取父容器的所有子元素
    const mainWindowChildren = mainWindow.children;
    const insertIndex = Math.floor(mainWindowChildren.length - 2);

    // 定位目标插入位置之后的子元素（分割线之前）
    const referenceNode = mainWindowChildren[insertIndex];

    // 把播放控制器插入到分割线之前
    mainWindow.insertBefore(mobilePlayerContainer, referenceNode);

    tippy(mobilePlayerContainer.querySelectorAll('[data-tippy-content]'));

    const audioPlayer = document.getElementById('wg__audio');

    // 进度条
    const progressBarTracks = document.querySelectorAll('.wg__act_capsule--progress-bar--track');
    const progressBarFills = document.querySelectorAll('.wg__act_capsule--progress-bar--track--fill-area--fill');
    const progressBarThumbs = document.querySelectorAll('.wg__act_capsule--progress-bar--track--thumb');
    const currentTimeEls = document.querySelectorAll('.wg__act_capsule--progress-bar--time-bar--current-time');
    const totalTimeEls = document.querySelectorAll('.wg__act_capsule--progress-bar--time-bar--total-time');

    // 控制按钮
    const nextButtons = document.querySelectorAll('.wg__act_capsule--control-area--bar--button--next');
    const prevButtons = document.querySelectorAll('.wg__act_capsule--control-area--bar--button--last');
    const playPauseButtons = document.querySelectorAll('.wg__act_capsule--control-area--bar--button--play');
    const repeatButtons = document.querySelectorAll('.wg__act_capsule--control-area--bar--button--repeat');

    // 获取专辑封面图片
    const albumArt = document.querySelector('.wg__act_capsule--button--image');
    const marqueeContainers = document.querySelectorAll('.wg__act_capsule--control-area--song-title, .wg__act_window-text--song, .wg__act_window-text--artist');
    const repeatModes = ['repeat', 'repeat_single', 'shuffle']; // 定义所有可用的模式

    if (albumArt) {
        albumArt.addEventListener('click', () => {
            mainWindowTotal.classList.toggle('isVisible');
            mainWindowBackdrop.classList.toggle('isVisible');
            document.body.classList.add('scrollBAN');
        });
    };

    // 查看专辑封面大图
    const viewAlbumArtButton = document.querySelector('.wg__act_window--image');
    const albumArtViewer = document.getElementById('wg__act_window--albumartviewer-drawer');

    const playerState = {
        playlist: [
            {
                title: 'Touch of the Law',
                subtitle: '《明日方舟》众生行记 OST',
                artist: '塞壬唱片 - MSR / Alec Justice / Echos',
                album: '《明日方舟》众生行记 OST',
                src: 'https://cdn.oss-storage-b2.antoolot.top/audio/%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%2CAlec+Justice%2CEchos+-+Touch+of+the+Law.mp3',
                artwork: [ 
                    {   src: 'https://i.scdn.co/image/ab67616d00001e02107fc43c76b386e62c34fd29', sizes: '300x300', type: 'image/jpeg'
                    },
                ],
                links: [
                    {
                        Spotify: 'https://open.spotify.com/track/5mvr5Zay3Snku17rpnqA6W',
                        QQMusic: 'https://y.qq.com/n/ryqq/songDetail/000QU7vF0q1gZn',
                        ncm: 'https://music.163.com/song?id=2700386309'
                    },
                ]
            },
            {
                title: 'Running In The Dark',
                subtitle: '手游《明日方舟》印象曲',
                artist: 'MONKEY MAJIK / 塞壬唱片-MSR',
                album: 'Running In The Dark (Image Song for Arknights mobile game)',
                src: 'https://cdn.oss-storage-b2.antoolot.top/audio/MONKEY+MAJIK%2C%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR+-+Running+In+The+Dark.mp3',
                artwork: [
                    { src: 'https://i.scdn.co/image/ab67616d00001e02c0f8153d730eec5ff36d6036', sizes: '300x300', type: 'image/jpeg' },
                ],
                links: [
                    {
                        Spotify: 'https://open.spotify.com/album/16X7XTvj35X5fVmE8d8jnR',
                        QQMusic: 'https://y.qq.com/n/ryqq/songDetail/0004R5Bh32VUWk',
                        ncm: 'https://music.163.com/song?id=1990154664'
                    },
                ]
            },
            {
                title: 'A Peaceful Place',
                subtitle: '游戏《沉没意志》原声带',
                artist: 'Kevin Colombin',
                album: 'Minds Beneath Us (Original Soundtrack)',
                src: 'https://cdn.oss-storage-b2.antoolot.top/audio/Kevin+Colombin+-+A+Peaceful+Place.mp3',
                artwork: [ 
                    {   src: 'https://i.scdn.co/image/ab67616d0000b2730de4e95f6acdbad117827635', sizes: '300x300', type: 'image/jpeg'
                    },
                ],
                links: [
                    {
                        QQMusic: 'https://y.qq.com/n/ryqq/songDetail/00122O721w1qRU',
                        ncm: 'https://music.163.com/song?id=2611771953',
                        ytm: 'https://music.youtube.com/watch?v=01nMe8O0nmU'
                    },
                ]
            },
            {
                title: '争流口岸',
                subtitle: '《绝区零》游戏原声专辑',
                artist: '三Z-STUDIO / HOYO-MiX',
                album: '绝区零 - 极限委托（《绝区零》游戏原声专辑）',
                src: 'https://cdn.oss-storage-b2.antoolot.top/audio/%E4%B8%89Z-STUDIO%2CHOYO-MiX+-+%E4%BA%89%E6%B5%81%E5%8F%A3%E5%B2%B8.mp3',
                artwork: [ 
                    {   src: 'https://i.scdn.co/image/ab67616d00001e0263b4eca54061bb5e114884b7', sizes: '300x300', type: 'image/jpeg'
                    },
                ],
                links: [
                    {
                        Spotify: 'https://open.spotify.com/track/4dNUoMfliL5Ak4pCZSJOQm',
                        QQMusic: 'https://y.qq.com/n/ryqq/songDetail/002BRphf1CO3pL',
                        ncm: 'https://music.163.com/song?id=2657833361'
                    },
                ]
            },
            {
                title: 'Normal No More',
                subtitle: '不再平庸',
                artist: 'TYSM',
                album: 'Normal No More',
                src: 'https://cdn.oss-storage-b2.antoolot.top/audio/TYSM+-+Normal+No+More.mp3',
                artwork: [
                    { src: 'https://i.scdn.co/image/ab67616d00001e028c40b5aab598b176ef663caa', type: 'image/jpeg' },
                ],
                links: [
                    {
                        Spotify: 'https://open.spotify.com/track/460WMeltK2dxce4qhcaCF7',
                        QQMusic: 'https://y.qq.com/n/ryqq/songDetail/002bhRnE14fkIR',
                        ncm: 'https://music.163.com/song?id=1440570723'
                    },
                ]
            },
            {
                title: '踏雪',
                subtitle: '',
                artist: '等什么君（邓寓君） / FOX 胡天渝',
                album: '予·君',
                src: 'https://cdn.oss-storage-b2.antoolot.top/audio/%E7%AD%89%E4%BB%80%E4%B9%88%E5%90%9B%2CFOX%E8%83%A1%E5%A4%A9%E6%B8%9D+-+%E8%B8%8F%E9%9B%AA.mp3',
                artwork: [
                    { src: 'https://imge.kugou.com/stdmusic/20241203/20241203115527166222.jpg', type: 'image/jpeg' },
                ],
                links: [
                    {
                        Spotify: 'https://open.spotify.com/track/6LKkNIDsEi9H4foJ5S3Lgc',
                        QQMusic: 'https://y.qq.com/n/ryqq/songDetail/003ylF5g4RhTSJ',
                        ytm: 'https://music.youtube.com/watch?v=pZwQsK2wdU8'
                    },
                ]
            },
            {
                title: '浮光',
                subtitle: 'The History',
                artist: 'Jannik',
                album: '浮光 (The History)',
                src: 'https://cdn.oss-storage-b2.antoolot.top/audio/Jannik+-+%E6%B5%AE%E5%85%89+(The+History).mp3',
                artwork: [
                    { src: 'https://i.scdn.co/image/ab67616d0000b273808b241087436b9b39db7e99', type: 'image/jpeg' },
                ],
                links: [
                    {
                        Spotify: 'https://open.spotify.com/track/5iBUUOgNWenmpWACZOFko2',
                        QQMusic: 'https://y.qq.com/n/ryqq/songDetail/003CFIIX0IpBx2',
                        ncm: 'https://music.163.com/song?id=1394601255'
                    },
                ]
            }
        ],
        currentTrackIndex: 0, // 声明书签
        justFinishedDrag: false,
        currentBlobUrl: null,
        currentLoadController: null, // 加载控制器状态默认置空
        isPlaying: false, // 显式管理播放状态
        isReady: false,
        isDragging: false,
        activeDragTarget: null, // 区分拖动目标
        draggedTime: null,
        repeatMode: 'repeat' // 默认 列表循环
    };

    // 统一的 UI 状态机
    function syncPlayerStateUI() {
        const isPaused = audioPlayer.paused;
        const isPlaying = !isPaused;

        playPauseButtons.forEach(button => {
            if (button) {
                button.classList.toggle('isPlaying', isPlaying);
                if (button._tippy) { // 检查 tippy 实例是否存在
                    if (isPlaying) {
                        button._tippy.setContent('暂停'),
                        button.setAttribute('aria-label', '暂停播放');
                    } else {
                        button._tippy.setContent('播放'),
                        button.setAttribute('aria-label', '播放');
                    }
                }
            }
        });

        if (albumArt) {
            if (isPlaying) {
                albumArt.style.animationPlayState = 'running';
            } else {
                albumArt.style.animationPlayState = 'paused';
            }
        }

        updatePlaylistUI();

        repeatButtons.forEach(button => {
            button.dataset.repeatMode = playerState.repeatMode;
            let tippyContent = '';
            if (playerState.repeatMode === 'repeat') tippyContent = '列表循环', button.setAttribute('aria-label', '切换到单曲循环');
            else if (playerState.repeatMode === 'repeat_single') tippyContent = '单曲循环', button.setAttribute('aria-label', '切换到随机播放');
            else if (playerState.repeatMode === 'shuffle') tippyContent = '随机播放', button.setAttribute('aria-label', '切换到列表循环');
            if (button._tippy) button._tippy.setContent(tippyContent);
        });

        // Media Session API 接入
        if ('mediaSession' in navigator) {
            let playbackState;
            if (isPlaying) {
                playbackState = 'playing';
            } else {
                playbackState = 'paused';
            }
            navigator.mediaSession.playbackState = playbackState;
        }
    }

    // 更新歌曲信息
    function updateSongInfo(song) {
        playerState.isReady = true;
        const capsuleTitleMarquee = document.querySelector('.wg__act_capsule--control-area--song-title--marquee');
        const windowTitleMarquee = document.querySelector('.wg__act_window-text--song--marquee');
        const windowArtistMarquee = document.querySelector('.wg__act_window-text--artist--marquee');
        
        let titleText;
        if (song.subtitle) {
            titleText = `${song.title}（${song.subtitle}）`;
        } else {
            titleText = song.title;
        }
        
        if (capsuleTitleMarquee) capsuleTitleMarquee.textContent = titleText;
        if (windowTitleMarquee) windowTitleMarquee.textContent = titleText;
        if (windowArtistMarquee) windowArtistMarquee.textContent = song.artist;
        
        if (albumArt) {
            resetSpinAnimation(albumArt);
        }

        const drawerImage = document.querySelector('.wg__act_window--albumartviewer--main--content--viewarea--image');
        if (drawerImage) {
            drawerImage.src = song.artwork[0].src;
        }
        
        // 更新专辑封面
        const albumArts = document.querySelectorAll('.wg__act_image');
        albumArts.forEach(img => img.src = song.artwork[0].src);

        // 移除跑马灯的 isLoading 状态
        marqueeContainers.forEach(container => {
            const marqueeTextElement = container.querySelector('.wg__act_marquee-text');
            if (marqueeTextElement) {
                marqueeTextElement.classList.remove('isLoading');
            }
        });

        // 检查跑马灯
        marqueeContainers.forEach(applyMarquee);

        // 更新外链
        updateSongLinks(song);

        updateMediaSessionMetadata();
    }

    function resetPlayerUI() {
        playerState.isReady = false;
        // 进度条和时间归零
        progressBarFills.forEach(fill => fill.style.width = '0%');
        progressBarThumbs.forEach(thumb => thumb.style.left = '0%');
        currentTimeEls.forEach(el => el.textContent = formatTime(0));

        marqueeContainers.forEach(container => {
            const marqueeTextElement = container.querySelector('.wg__act_marquee-text');
            if (marqueeTextElement) {
                // 跑马灯不用跑
                container.classList.remove('isOverflowing');
                marqueeTextElement.classList.add('isLoading');
                marqueeTextElement.style.animation = 'none';
                marqueeTextElement.style.transform = 'translateX(0)';
                marqueeTextElement.textContent = "正在加载...";
            }
        });
        
        // 确保按钮处于暂停状态
        syncPlayerStateUI();
    }

    const playlistListEl = document.querySelector('.wg__act_window--main-content--cards--card-playlist--list');

    function renderPlaylist() {
        // 清空当前列表，防止重复添加
        playlistListEl.innerHTML = '';

        playerState.playlist.forEach((song, index) => {

            const listItem = document.createElement('li');
            listItem.className = 'wg__act_window--main-content--cards--card-playlist--list-song';

            // 拼接歌曲标题和副标题
            let displayText;
            if (song.subtitle) {
                displayText = `${song.title}（${song.subtitle}）`;
            } else {
                displayText = song.title;
            };
            
            // 设置 li 元素的内部 HTML
            listItem.innerHTML = `
                <div class="wg__act_window--main-content--cards--card-playlist--list-song--soundwave">
                    <span class="wg__act_window--main-content--cards--card-playlist--list-song--soundwave--single"></span>
                    <span class="wg__act_window--main-content--cards--card-playlist--list-song--soundwave--single"></span>
                    <span class="wg__act_window--main-content--cards--card-playlist--list-song--soundwave--single"></span>
                </div>
                <span class="wg__act_window--main-content--cards--card-playlist--list-song--text">${displayText}</span>
            `;

            // 添加点击事件
            listItem.addEventListener('click', () => {
                // 如果点击的不是当前正在播放的歌曲，则加载并播放
                if (playerState.currentTrackIndex !== index) {
                    loadAndPlaySong(index);
                }
            });

            // 添加到 ul 容器
            playlistListEl.appendChild(listItem);
        });

        // 渲染完成后更新一次高亮状态
        updatePlaylistUI();
    }

    function updatePlaylistUI() {
        const playlistItems = playlistListEl.querySelectorAll('.wg__act_window--main-content--cards--card-playlist--list-song');
        // 获取歌曲状态
        const isPaused = audioPlayer.paused;

        playlistItems.forEach((item, index) => {
            const isCurrentTrack = (index === playerState.currentTrackIndex);

            if (isCurrentTrack) {
                item.classList.add('isPlaying');
                if (isPaused) {
                    item.classList.add('isPausedAnimation');
                } else {
                    item.classList.remove('isPausedAnimation');
                }
            } else {
                item.classList.remove('isPlaying', 'isPausedAnimation');
            }
        });
    }

    const spotifyLinkButton = document.getElementById('spotify-button');
    const qqmLinkButton = document.getElementById('qqmusic-button');
    const ncmLinkButton = document.getElementById('ncm-button');

    function updateSongLinks(song) {
        // 先支持一下有的
        if (song.links[0].Spotify) {
            spotifyLinkButton.href = song.links[0].Spotify;
        } else {spotifyLinkButton.href = '#songlinks'};
        if (song.links[0].QQMusic) {
            qqmLinkButton.href = song.links[0].QQMusic;
        } else {qqmLinkButton.href = '#songlinks'};
        if (song.links[0].ncm){
            ncmLinkButton.href = song.links[0].ncm;
        } else {ncmLinkButton.href = '#songlinks'};
    };

    // 负责加载歌曲的两个异步执行函数 --------------------------------------------------

    async function loadAndPlaySong(index) {
        // 若当前有加载任务正在进行，立即中止
        if (playerState.currentLoadController) {
            playerState.currentLoadController.abort();
        }

        const controller = new AbortController();
        playerState.currentLoadController = controller; // 保存加载控制器状态

        const previousTrackIndex = playerState.currentTrackIndex; // 保存旧索引
        playerState.currentTrackIndex = index;

        pauseMusic();
        resetPlayerUI();
        syncPlayerStateUI();

        const songToLoad = playerState.playlist[index];
        const newBlobUrl = await loadAudio(songToLoad, controller.signal);

        // 若加载中止信号发出
        if (controller.signal.aborted) {
            return; // 直接退出，不执行任何操作
        }

        if (newBlobUrl) {
            if (playerState.currentBlobUrl) {
                // 调用后销毁
                URL.revokeObjectURL(playerState.currentBlobUrl);
            }
            playerState.currentBlobUrl = newBlobUrl;
            audioPlayer.src = newBlobUrl;
            updateSongInfo(songToLoad);
            playMusic();
        } else {
            alert(`歌曲 "${songToLoad.title}" 加载失败，请重试。`);
            // 加载失败，回滚到旧索引
            playerState.currentTrackIndex = previousTrackIndex;
            updateSongInfo(playerState.playlist[previousTrackIndex]);
            syncPlayerStateUI();
        }
        playerState.currentLoadController = null; // 将加载控制器置空
    }

    async function loadAudio(song, signal) {
        if (!song || !song.src) {
            console.error("加载失败：歌曲对象或 src 无法获取。");
            return null;
        }
        try {
            // 使用 fetch 下载音频，并将 signal 传递给 fetch
            const response = await fetch(song.src, {signal});

            if (!response.ok) {
                throw new Error(`网络代理错误: ${response.status}`);
            }
            
            // 将响应体转换为 Blob 对象
            const audioBlob = await response.blob();

            // Blob 大小检查
            if (audioBlob.size === 0) {
                throw new Error("代理返回了空的音频数据");
            }
            return URL.createObjectURL(audioBlob);
        } catch (error) {
            // 监测 fetch 被中止时抛出的 AbortError 错误
            if (error.name === 'AbortError') {
                console.log(`已暂停 "${song.title}" 的加载请求。`);
            } else {
                console.error(`加载歌曲 "${song.title}" 时出错:`, error);
            }
            return null;
        }
    }

    // 歌曲循环模式 -----------------------------------------------------------
    // 循环模式变更
    function cycleRepeatMode() {
        // 找到当前模式的索引
        const currentIndex = repeatModes.indexOf(playerState.repeatMode);
        // 计算下一个模式的索引，使用 % 实现循环
        const nextIndex = (currentIndex + 1) % repeatModes.length;

        playerState.repeatMode = repeatModes[nextIndex];
        
        // 更新 UI
        syncPlayerStateUI();
    }

    // 为循环按钮绑定点击事件
    repeatButtons.forEach(button => {
        button.addEventListener('click', cycleRepeatMode);
    });

    // （下一首）播放次序决定函数
    function getNextTrackIndex() {
        const playlistSize = playerState.playlist.length;
        if (playlistSize <= 1) return 0; // 如果只有一首歌，总是返回第一首

        switch (playerState.repeatMode) {
            case 'shuffle':
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * playlistSize);
                } while (newIndex === playerState.currentTrackIndex); // 确保不会随机到当前正在播放的歌曲
                return newIndex;

            case 'repeat':
            case 'repeat_single': // 单曲循环和列表循环的下一首行为一致
            default:
                return (playerState.currentTrackIndex + 1) % playlistSize;
        }
    }

    audioPlayer.addEventListener('play', () => {
        playerState.isPlaying = true;
        syncPlayerStateUI();
    });

    audioPlayer.addEventListener('pause', () =>{
        playerState.isPlaying = false;
        syncPlayerStateUI();
    })

    audioPlayer.addEventListener('canplay', () => {
        playerState.isReady = true;
        totalTimeEls.forEach(el => el.textContent = formatTime(audioPlayer.duration));
        playMusic();
        updatePositionState();
    });

    function playMusic() {
        // 冷加载
        if (!playerState.isReady) {
            return;
        }
        audioPlayer.play().then(() => {
        playerState.isPlaying = true;
        syncPlayerStateUI();
        }).catch(e => console.error("播放失败:", e));
    }

    function pauseMusic() {
        audioPlayer.pause();
        playerState.isPlaying = false;
        syncPlayerStateUI();
    }

    function playPreviousSong() {
        pauseMusic();
        // 当前索引 - 1 + 列表长度，然后对列表长度取余，亦可处理负数
        const newIndex = (playerState.currentTrackIndex - 1 + playerState.playlist.length) % playerState.playlist.length;
        loadAndPlaySong(newIndex);
        updateProgress();
    }

    function playNextSong() {
        pauseMusic();
        const newIndex = getNextTrackIndex();
        loadAndPlaySong(newIndex);
        updateProgress();
    }

    // 播放结束时自动切换下一首
    function handleTrackEnd() {
        if (playerState.repeatMode === 'repeat_single') {
            // 单曲循环将播放时间归零并重新播放
            audioPlayer.currentTime = 0;
            playMusic();
        } else {
            playNextSong();
        }
    }
    
    audioPlayer.addEventListener('ended', handleTrackEnd);

    // 为操作按钮们绑定点击事件
    playPauseButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (audioPlayer.paused) {
                if (!audioPlayer.src || !audioPlayer.src.startsWith('blob:')) {
                    loadAndPlaySong(playerState.currentTrackIndex);
                } else {
                    playMusic();
                }
            } else {
                pauseMusic();
            }
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', playNextSong);
    }); 
    prevButtons.forEach(button => {
        button.addEventListener('click', playPreviousSong);
    });

    // 更新媒体控件信息
    function updateMediaSessionMetadata() {
        if (!('mediaSession' in navigator)) return;
        const song = playerState.playlist[playerState.currentTrackIndex];
        if (!song) return;
        // 创建 MediaMetadata 实例
        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.title,
            artist: song.artist,
            album: song.album,
            artwork: song.artwork
        });
    }

    // 格式化时间 （秒 -> 0:00）
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    // 更新进度条和时间的函数
    function updateProgress() {
        if (playerState.isDragging && playerState.activeDragTarget === 'progress') return;
        if (isNaN(audioPlayer.duration)) return;

        // 计算进度百分比
        const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        
        // 更新进度
        progressBarFills.forEach(fill => fill.style.width = `${progressPercentage}%`);
        progressBarThumbs.forEach(thumb => thumb.style.left = `${progressPercentage}%`);
        currentTimeEls.forEach(el => el.textContent = formatTime(audioPlayer.currentTime));
    }

    // 在使用所有可拖动组件时禁用页面滚动，规避性能问题
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }
    
    function enableScroll() {
        document.body.style.overflow = 'auto';
    }

    // 音频的元数据加载完毕时，更新总时长
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTimeEls.forEach(el => el.textContent = formatTime(audioPlayer.duration));
    });

    audioPlayer.addEventListener('timeupdate', () => {
        updateProgress();
        updatePositionState();
    });
    audioPlayer.addEventListener('ended', handleTrackEnd);

    // 实现点击进度条跳转播放
    progressBarTracks.forEach(track => {
        track.addEventListener('click', (event) => {
            // 获取轨道宽度
            const trackWidth = track.offsetWidth;

            // 获取点击位置相对于轨道左侧的距离
            const clickX = event.offsetX;
            
            // 计算点击位置对应的时长
            const newTime = (clickX / trackWidth) * audioPlayer.duration;
            
            // 设置音频的当前播放时间
            audioPlayer.currentTime = newTime;
            
            // 立即更新
            updateProgress();
            updatePositionState();
        });
    });

    // 全局的 endDrag 函数
    const globalEndDrag = () => {
        if (playerState.isDragging && playerState.activeDragTarget === 'progress') {
            if (playerState.draggedTime !== null && isFinite(playerState.draggedTime)) {
                audioPlayer.currentTime = playerState.draggedTime;
                updatePositionState();
            }
            playerState.draggedTime = null;
        }

        if (playerState.activeDragTarget === 'volume' && playerState.activeTrack) {
        const thumb = playerState.activeTrack.querySelector('.wg__act_window--volume--content--sliderbar--thumb');
        if (thumb && thumb._tippy) {
            thumb._tippy.destroy();
        }
    }

        if (playerState.isDragging) {
            playerState.isDragging = false;
            playerState.activeDragTarget = null;
            playerState.activeTrack = null;
            enableScroll();

            playerState.justFinishedDrag = true;
            setTimeout(() => {
                playerState.justFinishedDrag = false;
            }, 0);
        }
    };

    // 为所有可拖拽的滑块绑定事件
    progressBarThumbs.forEach(thumb => {
        // 找到轨道
        const track = thumb.closest('.wg__act_capsule--progress-bar--track');

        const startDrag = () => {
            disableScroll();
            playerState.isDragging = true;
            playerState.activeTrack = track; // 记录当前被激活的轨道
            playerState.activeDragTarget = 'progress';
        };

        thumb.addEventListener('mousedown', startDrag);
        thumb.addEventListener('touchstart', startDrag, { passive: false });
    });

    // 在整个页面上监听 move 事件
    document.addEventListener('mouseup', globalEndDrag);
    document.addEventListener('touchend', globalEndDrag);
    document.addEventListener('mousemove', handleDrag, { passive: false });
    document.addEventListener('touchmove', handleDrag, { passive: false });

    // 更新音乐播放进度
    function updatePositionState() {
        if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
            if (!isNaN(audioPlayer.duration)) {
                navigator.mediaSession.setPositionState({
                    duration: audioPlayer.duration,
                    playbackRate: audioPlayer.playbackRate,
                    position: audioPlayer.currentTime
                });
            }
        }
    }

    // MediaSession API 适配
    navigator.mediaSession.setActionHandler('play', () => {
        playMusic();
    });

    navigator.mediaSession.setActionHandler('pause', () => {
        pauseMusic();
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => {
        playNextSong();
    });

    navigator.mediaSession.setActionHandler('previoustrack', () => {
        playPreviousSong();
    });
    
    // 定义跑马灯效果函数
    function applyMarquee(container) {
        const textElement = container.querySelector('.wg__act_capsule--control-area--song-title--marquee, .wg__act_window-text--song--marquee, .wg__act_window-text--artist--marquee');

        if (!textElement) return;

        // 清理旧状态和动画
        container.classList.remove('isOverflowing');
        textElement.style.animation = '';
        textElement.style.transform = 'translateX(0)'; // 确保重置位置

        // 强制回流以确保 transform 更改生效，以便获取正确的 scrollWidth
        void textElement.offsetWidth; 
        
        // 比较宽度
        const isOverflowing = textElement.scrollWidth > container.clientWidth;

        if (isOverflowing) {
            container.classList.add('isOverflowing');
            const scrollSpeed = 50;

            // 总移动距离：文本宽度 + 容器可见宽度
            const totalMovementDistance = textElement.scrollWidth + container.clientWidth; 
            
            const movementDuration = totalMovementDistance / scrollSpeed;

            // 设置初始位置为容器宽度（即从右侧开始）
            const initialX = container.clientWidth;

            // 结束位置：文本的右边缘与容器的左边缘对齐
            const endX = -textElement.scrollWidth;

            // 写入变量
            textElement.style.setProperty('--marquee-initial-x', `${initialX}px`); 
            textElement.style.setProperty('--marquee-translate-x', `${endX}px`); 
            textElement.style.setProperty('--marquee-duration', `${movementDuration}s`);

            // 组合 animation 属性
            textElement.style.animation = `marquee-scroll ${movementDuration}s linear infinite`;
            textElement.style.animationDelay = '3s';
        }
    }

    // 遍历 NodeList
    marqueeContainers.forEach(container => {
        // 初始化
        applyMarquee(container);
        
        // 为每个容器创建独立的 ResizeObserver 实例来观察变化
        new ResizeObserver(() => {
            // 容器尺寸变化时触发检查
            applyMarquee(container);
        }).observe(container);
    });

    // 播放列表歌曲几何
    function getPlaylistNum () {
        const playlistNum = playerState.playlist.length;
        const playlistEl = document.querySelector('.wg__act_window--main-content--cards--card-playlist--title-text--num');

        if (playlistEl) {
            playlistEl.textContent = playlistNum;
        }
    }

    getPlaylistNum();

    const volumeButtons = document.querySelectorAll('.wg__act_capsule--control-area--bar--button--volume');
    const volumeAdjustWindow = document.createElement('div');
    volumeAdjustWindow.className = 'wg__act_window--volume';

    // 为桌面端和移动端分别创建音量调节窗口
    function createVolumeWindow() {
        const window = document.createElement('div');
        window.className = 'wg__act_window--volume';

        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'wg__act_window--volume--content';

        const shutup = document.createElement('button');
        shutup.className = 'wg__act_window--volume--content--shutup';
        shutup.setAttribute('aria-label', '单击静音');
        shutup.setAttribute('data-tippy-content', '静音');
        tippy(shutup);

        const slider = document.createElement('div');
        slider.className = 'wg__act_window--volume--content--sliderbar';

        const sliderFillContainer = document.createElement('div');
        sliderFillContainer.className = 'wg__act_window--volume--content--sliderbar--fill-area';
        const sliderFill = document.createElement('div');
        sliderFill.className = 'wg__act_window--volume--content--sliderbar--fill-area--fill';
        const sliderThumb = document.createElement('div');
        sliderFillContainer.appendChild(sliderFill);

        sliderThumb.className = 'wg__act_window--volume--content--sliderbar--thumb';
        sliderThumb.setAttribute('aria-label', '当前音量');
        slider.appendChild(sliderFillContainer);
        slider.appendChild(sliderThumb);

        const max = document.createElement('button');
        max.className = 'wg__act_window--volume--content--volume-max';
        max.setAttribute('aria-label', '最大音量');
        max.setAttribute('data-tippy-content', '最大音量');
        tippy(max);

        // 放进容器
        sliderContainer.appendChild(shutup);
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(max);

        window.appendChild(sliderContainer); // 再把容器放进窗口
        
        return window;
    }

    // 分别创建
    const desktopVolumeWindow = createVolumeWindow();
    const mobileVolumeWindow = createVolumeWindow();

    // 分别放入父容器
    if (defaultPlayController) {
        defaultPlayController.appendChild(desktopVolumeWindow);
    }

    if (mobilePlayController) {
        mobilePlayController.appendChild(mobileVolumeWindow);
    }

    // 静音
    const handleMuteClick = (e) => {
        // 阻止冒泡
        e.stopPropagation(); 
        audioPlayer.muted = !audioPlayer.muted;
    };

    // 最大音量
    const handleMaxVolumeClick = (e) => {
        e.stopPropagation();
        // 如果之前是静音状态，先取消静音
        audioPlayer.muted = false;
        // 将音量设置为 1.0（最大值）
        audioPlayer.volume = 1.0;
    };

    const allShutupButtons = document.querySelectorAll('.wg__act_window--volume--content--shutup');
    allShutupButtons.forEach(button => {
        button.addEventListener('click', handleMuteClick);
    });

    const allMaxVolumeButtons = document.querySelectorAll('.wg__act_window--volume--content--volume-max');
    allMaxVolumeButtons.forEach(button => {
        button.addEventListener('click', handleMaxVolumeClick);
    });

    volumeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();

            // 找到按钮所在的控制器
            const parentController = button.closest('.wg__act_capsule--control-area');
            if (parentController) {
                // 找到控制器内部的音量窗口
                const targetWindow = parentController.querySelector('.wg__act_window--volume');
                if (targetWindow) {
                    targetWindow.classList.toggle('isVisible');
                }
            }
        });
    });

    // 音量按钮样式随音量变化
    function updateVolumeButtonsIcon() {
        // 获取最新的音量和静音状态
        const currentVolume = audioPlayer.volume;
        const isMuted = audioPlayer.muted;
        let iconUrl = '';

        if (isMuted || currentVolume === 0) {
            iconUrl = "url('/assets/shutup.svg')";
            volumeButtons.forEach(button => {
                button.style.backgroundSize = '60% 60%';
            });
        }
        // 不允许链式比较
        else if (currentVolume > 0 && currentVolume <= 0.33) {
            iconUrl = "url('/assets/volume_1.svg')";
            volumeButtons.forEach(button => {
                button.style.backgroundSize = '75% 75%';
            });
        } else if (currentVolume > 0.33 && currentVolume <= 0.67) {
            iconUrl = "url('/assets/volume_2.svg')";
        } else if (currentVolume > 0.67 && currentVolume <= 1) {
            iconUrl = "url('/assets/volume_3.svg')";
        }

        // 遍历按钮列表，为每个按钮单独设置样式
        volumeButtons.forEach(button => {
            button.style.backgroundImage = iconUrl;
        });
    };

    function handleDrag(event) {
        if (!playerState.isDragging) return;

        // 阻止页面滚动
        event.preventDefault();

        // 获取被激活的轨道
        const targetTrack = playerState.activeTrack || progressBarTracks[0];
        if (!targetTrack) return;

        // 获取轨道的位置和尺寸信息
        const trackRect = targetTrack.getBoundingClientRect();
        const trackWidth = trackRect.width;
        
        // 计算鼠标相对于轨道左侧的位置，范围限制在 0 和 trackWidth 之间
        let clientX;
        if (event.touches) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }
        const clickX = Math.max(0, Math.min(clientX - trackRect.left, trackWidth));
        const percentage = (clickX / trackWidth);
    
        // 根据拖动目标执行不同逻辑
        if (playerState.activeDragTarget === 'progress') {
            if (!audioPlayer.duration || !isFinite(audioPlayer.duration)) return;
            
            // 暂存计算出的时间
            const newTime = percentage * audioPlayer.duration;
            playerState.draggedTime = newTime;
            
            // 只更新 UI，不改变 audioPlayer.currentTime
            const progressPercentage = percentage * 100;
            progressBarFills.forEach(fill => fill.style.width = `${progressPercentage}%`);
            progressBarThumbs.forEach(thumb => thumb.style.left = `${progressPercentage}%`);
            currentTimeEls.forEach(el => el.textContent = formatTime(newTime));
    
        } else if (playerState.activeDragTarget === 'volume') {
            if (audioPlayer.muted) {
                audioPlayer.muted = false;
            }
            const newVolume = percentage;
            audioPlayer.volume = newVolume;

            // 实时更新 Tippy 音量显示
            const thumb = playerState.activeTrack.querySelector('.wg__act_window--volume--content--sliderbar--thumb');
            if (thumb && thumb._tippy) {
                thumb._tippy.setContent(`${Math.round(newVolume * 100)}%`);
            }
        }
    }

    const startVolumeDrag = (e) => {
        // 阻止事件冒泡
        e.stopPropagation();
        disableScroll();
        playerState.isDragging = true;
        playerState.activeDragTarget = 'volume'; // 操作音量

        // 使用 e.currentTarget 来获取触发事件的滑块
        playerState.activeTrack = e.currentTarget;

        const thumb = playerState.activeTrack.querySelector('.wg__act_window--volume--content--sliderbar--thumb');
        if (thumb && !thumb._tippy) {
            tippy(thumb, {
                content: `${Math.round(audioPlayer.volume * 100)}%`, // 初始内容
                placement: 'top',
                trigger: 'manual',
                hideOnClick: false,
            });
            thumb._tippy.show();
        }
        
        handleDrag(e);
    };

    const allVolumeSliders = document.querySelectorAll('.wg__act_window--volume--content--sliderbar');
    allVolumeSliders.forEach(slider => {
        slider.addEventListener('mousedown', startVolumeDrag);
        slider.addEventListener('touchstart', startVolumeDrag, { passive: false });
    });

    function updateVolumeUI(volume) {
        const volumePercentage = volume * 100;
        const volumeSliders = document.querySelectorAll('.wg__act_window--volume--content--sliderbar');
        volumeSliders.forEach(slider => {
            const fill = slider.querySelector('.wg__act_window--volume--content--sliderbar--fill-area--fill');
            const thumb = slider.querySelector('.wg__act_window--volume--content--sliderbar--thumb');
            if (fill) fill.style.width = `${volumePercentage}%`;
            if (thumb) thumb.style.left = `${volumePercentage}%`;
        });
    }

    // 音频音量变化时，同步更新所有UI
    audioPlayer.addEventListener('volumechange', () => {
        if (audioPlayer.muted) {
            updateVolumeUI(0);
        } else {
            updateVolumeUI(audioPlayer.volume);
        }
        updateVolumeButtonsIcon();
    });

    // 专辑封面查看器
    if (viewAlbumArtButton && albumArtViewer) {
        const closeDrawerButton = albumArtViewer.querySelector('.wg__act_window--albumartviewer--window-title-close-button');
        const drawerBackdrop = albumArtViewer.querySelector('.wg__act_window--albumartviewer--backdrop');
        const drawerImage = albumArtViewer.querySelector('.wg__act_window--albumartviewer--main--content--viewarea--image');

        const openDrawer = () => {
            const currentSong = playerState.playlist[playerState.currentTrackIndex];
            if (currentSong && currentSong.artwork[0]) {
                drawerImage.src = currentSong.artwork[0].src;
            }

            albumArtViewer.classList.add('isActive');
            document.body.classList.add('scrollBAN');
        };

        const closeDrawer = () => {
            albumArtViewer.classList.remove('isActive');
        };

        // 绑定事件
        viewAlbumArtButton.addEventListener('click', openDrawer);
        closeDrawerButton.addEventListener('click', closeDrawer);
        drawerBackdrop.addEventListener('click', closeDrawer);

        // 允许通过 Esc 键关闭
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && albumArtViewer.classList.contains('isActive')) {
                closeDrawer();
            }
        });
    }

    // 点击窗口外关闭
    window.addEventListener('click', () => {
        if (playerState.justFinishedDrag) {
            return;
        }
        desktopVolumeWindow.classList.remove('isVisible');
        mobileVolumeWindow.classList.remove('isVisible');
    });

    // 防止窗口内的点击导致窗口关闭
    desktopVolumeWindow.addEventListener('click', (event) => event.stopPropagation());
    mobileVolumeWindow.addEventListener('click', (event) => event.stopPropagation());

    // if (playerState.currentTrackIndex === 2) {
    // }

    function resetSpinAnimation() {
        // 暂时移除动画
        albumArt.style.animation = 'none';

        // 读取 offsetWidth，强制浏览器重排 (Reflow)
        void albumArt.offsetWidth; 

        // 重新应用动画
        albumArt.style.animation = null; // 移除内联样式，恢复 CSS 控制
        albumArt.style.animationDelay = 0.25;
    }

    // 初始化
    updateSongInfo(playerState.playlist[playerState.currentTrackIndex]);
    loadAudio(playerState.playlist[playerState.currentTrackIndex]);
    syncPlayerStateUI();
    renderPlaylist();
});