let apiAlbum = [
//12 19
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=kHJnyZLLLaskdLRynTbGZHTZCQchakcFx",

//16 20
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=LGJntkBHJcbWDWNTntDmZHtkhWxhskuQA",

//25 19
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZGJmykZFdLaGdCxtHyvHLmtZgQchsbbFl",

//18 20
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=kHxHtLdkAQpzBmxtnyvnkmTLhpJCaLRml",
  
//mt bông hoa đẹp nhất
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZmxmyLBNzdzWxusyHTFnLGTkhpJChcVJu",

//mt thêm bn lâu
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=LHJHTLbxhZizWQFTnybHZnyZCQchCaRGR",

//mt đếm ngày xa e
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZmcmyLDxWLapNWDTnTvHkmtLXWcgXaiCQ",

//mt ng âm phủ
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=LHJHyLDxQJRmiCWtHybmkHtLhpJhgJZmJ",

//mt đừng lo a đợi mà
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZHxHTkdmaRdDJagTHyvHLmykXQxhXJFLV",

//mt ai là ng thw e
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZnJHtkFcXaWsEzzTHTvHLnyLgpJChxvgb",

//mt từ em mà ra
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=LmJmtLBdkNpkBgWyHTvmkmTkCWcghxAdB",

//viral
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=kGxnTZSivksxJVSTGtDnZHtLXpcCabpHH",

//some hits
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=LGcmyZzEFmvakmsymyFnkmykCWJCNFpAR",

//mt 1 bước yêu vạn dặm đau
"https://mp3.zing.vn/xhr/media/get-source?type=album&key=LnJnykbchXRiGdByHtbHLHyLXpJChJdzn",
]
let songs = [
    {
        name: '--',
        path: '',
        artist: '--',
        cover: 'assets/images/nullsound.png'
    },
    
]

// SLIDE ẢNH HEADING

//const carausel = [...document.querySelectorAll('.carausel img')];
//let carauselImageIndex = 0
//const changeCarausel = () => {
//  carausel[carauselImageIndex].classList.toggle('active')
//  if(carauselImageIndex >= carausel.length - 1){
//    carauselImageIndex = 0
//  } else {
//      carauselImageIndex++
//  }
//  carausel[carauselImageIndex].classList.toggle('active')
//}
//setInterval(() => {
//  changeCarausel();
//}, 3000);

//KEO THANH MINI LEN//

const playerUp = document.querySelector ('.music-player-section')
const buttonUp = document.querySelector ('.imgback')
buttonUp.addEventListener ('click', () => {
  playerUp.classList.add('active')
})
//THOAT THANH MINI//
const backToHomeBtn = document.querySelector('.music-player-section .back-btn');
backToHomeBtn.addEventListener ('click', () => {
  playerUp.classList.remove('active');
})


//ACCESS PLAY LIST//
const accsessPlayList = document.querySelector ('.playlist')
const navBtn = document.querySelector('.music-player-section .listbtn')
navBtn.addEventListener('click', () => {
  accsessPlayList.classList.add('active')
})
const backBtn = document.querySelector('.playlist .backlist')
backBtn.addEventListener('click' , () => {
  accsessPlayList.classList.remove('active')
})

//done navigation //
let currentMusic = 0;

const music = document.querySelector ('#audio-source')

const seekBar1 = document.querySelector ('.music-seek-bar1')
const seekBar = document.querySelector ('.music-seek-bar')
const songName = document.querySelector ('.current-song-name')
const artistName = document.querySelector ('.artist-name')
const coverImage = document.querySelector ('.cover')
const currentMusicTime = document.querySelector ('.current-time')
const musicDuration = document.querySelector ('.duration')

const queue = [...document.querySelectorAll('.queue')]

//SELECT ALL BUTTON
const forwardBtn = document.querySelector ('.forwardbtn')
const backwardBtn = document.querySelector ('.backwardbtn')
const playBtn = document.querySelector ('.playbtnicon')
const pauseBtn = document.querySelector ('.pausebtnicon')
const repeatBtn = document.querySelector ('.repeatbtn')
const repeaton = document.querySelector ('.repeaton')
const shuffleBtn = document.querySelector ('.shufflebtn')
const shuffleOn = document.querySelector ('.shuffleon')

//mini playlist
const mnpListctn = document.querySelector('.mnplistctn')

//LYRIC
const lyricrender = document.querySelector('.lyric')

//BIGCOVER PLAYER & PICS /INFO PLAYLIST
const bigCover = document.querySelector('.bigcover')
const coverPlaylist = document.querySelector('.picminibxh')
const avtPlaylist = document.querySelector('.pictrong')
const titleAlbumInPlaylist = document.querySelector('.titlealbum')
const amountTracks = document.querySelector('.infpl')
const timeBxh = document.querySelector('.timeBxh')


//PLAY / PAUSE CLICK EVENT
playBtn.addEventListener ('click', () => {
  music.play()
  playBtn.classList.add('active');
  pauseBtn.classList.remove('active');
})
pauseBtn.addEventListener ('click', () => {
  music.pause()
  pauseBtn.classList.add('active');
  playBtn.classList.remove('active');
})

//mini cover


//function for MUSIC

const setMusic = (i) => {
  seekBar1.value = 0;
  seekBar.value = 0;
  let song = songs [i];
  currentMusic = i;
  
  music.src = song.path;
  
  
  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  coverImage.src = song.cover;
  buttonUp.src = song.cover;
  
  setTimeout(() => {
    seekBar1.max = music.duration
    seekBar.max = music.duration
    musicDuration.innerHTML = formatTime(music.duration)
  
  }, 300)
  
  
}

setMusic (0);
// thử xóa setTimeout


//LEARN "FOREACH" ●●●

//time mini
const formatTime = (time) => {
  let min = Math.floor(time / 60)
  if (min < 10) {
    min = `0` + min
  }
  let sec = Math.floor(time % 60)
  if (sec < 10) {
    sec = `0` + sec
  }
  return `${min} : ${sec}`
}


  
  seekBar1.addEventListener ('change', () => {
  music.currentTime = seekBar1.value
  })
  seekBar.addEventListener ('change', () => {
    
  //MÀU ĐI SAU DẤU CHẤM
  
  music.currentTime = seekBar.value;
  
  //seekBar.value = music.currentTime//
})
  

// NEXT/BACK SONGS

//TẠI SAO SONGS.LENGTH - 1?
//nói về TH backward, forward thì cũng tương tự
//Vì songs.length = 8, mà số object{} trong array[] được bắt đầu từ số "0", nghĩa là bài 1 sẽ được gọi bằng setMusic(currentMusic = 0) và bài 8 cũng tương tự (đổi số 0 thành số 7), nếu không trừ 1, nó sẽ nhảy sang bài thứ 9 => bị lỗi

//REPEAT BTN
repeatBtn.addEventListener ('click', () => {
  repeatBtn.classList.add('active')
  repeaton.classList.remove('active')
  shuffleOn.classList.add('active')
  shuffleBtn.classList.remove('active')
})
repeaton.addEventListener ('click', () => {
  repeaton.classList.add('active')
  repeatBtn.classList.remove('active')
})

//shuffle
shuffleBtn.addEventListener('click', () => {
  shuffleBtn.classList.add('active')
  shuffleOn.classList.remove('active')
  repeaton.classList.add('active')
  repeatBtn.classList.remove('active')
})
shuffleOn.addEventListener('click', () => {
  shuffleOn.classList.add('active')
  shuffleBtn.classList.remove('active')
})

//WORK PLAY LIS



const checkjs = document.querySelector('.checkjs')
const tblyricCtn = document.querySelector('.tablelyric-ctn')

// CHART RANKINGS

//API BXH ZING (LẤY TRÊN GITHUB DÁN LÊN GG R COPY LINK TỪ GG VÌ LINK GITHUB NOT WORK
const mnplistctn = document.querySelector('.mnplistctn')
async function bxh() {
  
  const getBxhApi = await fetch ('https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZmJGyLziFBQDQZWymybHkHykgWxNlvBxC')
  const { data } = await getBxhApi.json()
  
  let songsbxh = data.items
  
  mnplistctn.innerHTML = ''
  
  
  
  async function setMusicbxh(i){
   
    currentMusicbxh = i
    
    let songbxh = songsbxh[i]
    
    let getLyric = songbxh.lyric
    
    const fLyric = await fetch (getLyric)
    const cvLyrica = await fLyric.text()
    const cvLyricb = cvLyrica.split(/\r\n|\n/)
    const filterLyric = cvLyricb.map(s => s.slice(1, 6))
    
    const lyricTable = cvLyricb.map(d => d.toString().slice(d.indexOf(']') + 1, d.length))
    const cvlyricTable = lyricTable.toString().replaceAll("," , "<br>")

//   Sử dụng cách này thay vì eventlistener('timeupdate') vì cách đó bị lỗi, nó dồn 2 value "i" vào rồi lặp xen kẽ, còn cách dưới đây chỉ lấy 1 value, value cũ sẽ mất khi có value mới
    music.ontimeupdate = function() {
      
  let minu = Math.floor(music.currentTime / 60)
let seco = Math.floor(music.currentTime % 60)
let min = minu
let sec = seco
if (minu < 10){
  min = `0` + `${minu}`
}
if (seco < 10){
  sec = `0` + `${seco}`
}
let minsec = `${min}:${sec}`

  if (filterLyric.indexOf(minsec) > -1){
    lyricrender.innerHTML = cvLyricb[filterLyric.indexOf(minsec)].slice(10)
  }
  if (Math.floor(music.currentTime) == Math.floor(music.duration)) {
    if (repeatBtn.className.includes('active')) {
      setMusicbxh(currentMusicbxh)
      playBtn.click()
    } else {
      if (shuffleBtn.className.includes('active')) {
        setMusicbxh(Math.floor(Math.random() * 50))
      } else {
        if (i >= 50) {
          setMusicbxh(0)
        } else {
        setMusicbxh(i += 1)
        }
      }
    }
    
  }
}
    
    let nameSongbxh = songbxh.name
    let artistNamebxh = songbxh.artists_names
    const linkSrcMusic = songbxh.source[128]
    
    let musicBxhDuration = songbxh.duration
    let imgbxh = songbxh.thumbnail
    const bigImg = imgbxh.replace('w94_r1x1_', 'w1600_r1x1_')
    const miniImg = imgbxh.replace('w94_r1x1_', 'w180_r1x1_')
    
    
    
    const bxhTableLyric = document.createElement('div')
    bxhTableLyric.classList.add('tablelyric')
    bxhTableLyric.innerHTML = `
    <h3>${nameSongbxh}</h3>
    <h4>${artistNamebxh}</h4>
    <a>${cvlyricTable}</a>
    `
    tblyricCtn.appendChild(bxhTableLyric)
    
    
    
    
  music.src = linkSrcMusic
      songName.innerHTML = nameSongbxh;
  artistName.innerHTML = artistNamebxh;
      coverImage.src = bigImg;
      buttonUp.src = miniImg;
      bigCover.src = miniImg;
      
      setTimeout(() => {
        seekBar1.max = musicBxhDuration
       seekBar.max = musicBxhDuration
       musicDuration.innerHTML = formatTime(musicBxhDuration)
      }, 300)
      
      playBtn.click()
}
  const checkjs = document.querySelector('.checkjs')
  if (checkjs.className.includes('bigbxh') == false) {
    checkjs.classList.add('bigbxh')
  
  for (let i = 0; i < songsbxh.length; i++){
    let songbxh = songsbxh[i]
   
    let nameSongbxh = songbxh.name
    let artistNamebxh = songbxh.artists_names
    let imgbxh = songbxh.thumbnail
    const bigImg = imgbxh.replace('w94_r1x1_', 'w1600_r1x1_')
    const miniImg = imgbxh.replace('w94_r1x1_', 'w180_r1x1_')
    let congi = i + 1
    let classDiv = `a` + congi
    const listBxh = document.querySelector('.listbxh')
    
    
    const createDivlistbxh = document.createElement('div')
    createDivlistbxh.classList.add(classDiv)
    createDivlistbxh.innerHTML = `
      <h2 class="nrank">${i + 1}</h2>
    <div class="zoneclick${i}">
      <img src="${miniImg}" width="48" height="48">
      <h2 class="musicname">${nameSongbxh}<br><a>${artistNamebxh}</a></h2>
    </div>
    `

    listBxh.appendChild(createDivlistbxh)
    

    const zoneClick = document.querySelector('.zoneclick' + i)
    zoneClick.style.width = "100%"
    
    
    
    
// lỗi ở đây

    zoneClick.addEventListener ('click', () => {
      bxh()
      
      setMusicbxh(i)
      
      coverPlaylist.src = './assets/images/top50.jpg'
      avtPlaylist.src = './assets/images/top50.jpg'
      titleAlbumInPlaylist.innerHTML = ""
     amountTracks.innerHTML = ""
    })
    
    
    
} //for big bxh
} //if

    //mini playlist
for (let i = 0; i < songsbxh.length; i++){
    let songbxh = songsbxh[i]
    
    let nameSongbxh = songbxh.name
    let artistNamebxh = songbxh.artists_names
    let imgbxh = songbxh.thumbnail
    const bigImg = imgbxh.replace('w94_r1x1_', 'w1600_r1x1_')
    const miniImg = imgbxh.replace('w94_r1x1_', 'w180_r1x1_')
    let congi = i + 1
    let classDiv = `a` + congi
    const listBxh = document.querySelector('.listbxh')
const createChild = document.createElement('div')
createChild.classList.add('ctnzone')
createChild.classList.add('b' + i)
createChild.innerHTML = `
  <h4 class="stt">${i + 1}</h4>
      <div class="zonelickmn b${i}">
        <img src="${imgbxh}" width="46" height="46">
        <h2 class="namesongbxh"> ${nameSongbxh}<br><a class="nameartist">${artistNamebxh}</a></h2>
        
      </div>
`
mnpListctn.appendChild(createChild)

const zonclickb = document.querySelector('.b' + i)

zonclickb.addEventListener('click', () => {
   
   setMusicbxh (i)
})
    
    
    
  } //fot minibxh
  
  
//LYRIC

  
  
//BTN REPEAT FORWARD
  


// SEEK BAR EVENT

function bfbxh() {
  const forwardbtn = document.querySelector('.forwardbtn')
//create Forward Backward

const creatfBtn = document.createElement('img')
creatfBtn.classList.add('forbtnbxh')
creatfBtn.src = "./assets/images/forward.png"
creatfBtn.style.width = "18"
creatfBtn.style.height = "18"

forwardbtn.appendChild(creatfBtn)

const forbtnbxh = document.querySelector('.forbtnbxh')

forbtnbxh.addEventListener ('click', () => {
  if(currentMusicbxh >= 49) {
    currentMusicbxh = 0
} else {
  currentMusicbxh++
  }
  setMusicbxh(currentMusicbxh)
  playBtn.click()
})

//back
const backwardbtn = document.querySelector('.backwardbtn')
const creatbBtn = document.createElement('img')
creatbBtn.classList.add('backbtnbxh')
creatbBtn.src = "./assets/images/backward.png"
creatbBtn.style.width = "18"
creatbBtn.style.height = "18"

backwardbtn.appendChild(creatbBtn)

const backbtnbxh = document.querySelector('.backbtnbxh')

backbtnbxh.addEventListener ('click', () => {
  if(currentMusicbxh == 0) {
    currentMusicbxh = 49
} else {
  currentMusicbxh--
  }
  setMusicbxh(currentMusicbxh)
  playBtn.click()
})
} //bfbxh

if (checkjs.className.includes('bfbxh') == false) {
  checkjs.classList.add('bfbxh')
  bfbxh()
  }
if (checkjs.className.includes('checkchobxh') == true) {
  const forbtnbxh = document.querySelector('.forbtnbxh')
  const backbtnbxh = document.querySelector('.backbtnbxh')

  for (uu = 0; uu < apiAlbum.length; uu++){
    if (document.querySelector('.forbtn' + uu) != null) {
      document.querySelector('.forbtn' + uu).style.display = "none"
    }
    if (document.querySelector('.backbtn' + uu) != null) {
      document.querySelector('.backbtn' + uu).style.display = "none"
    }
  }
forbtnbxh.style.display = 'inline'
backbtnbxh.style.display = 'inline'
}
  
  setInterval(() => {
  seekBar1.value = music.currentTime
  seekBar.value = music.currentTime
  currentMusicTime.innerHTML = formatTime(music.currentTime)
  
  
//REPEAT & FORWARD
  
}, 300) //5//

}
bxh()



// ON/OFF LYRIC

const lyricon = document.querySelector('.lyricon')
const lyricoff = document.querySelector('.lyricoff')
const lyricctn = document.querySelector('.lyricctn')

//lyricon.addEventListener ('click', () => {
//  lyricon.classList.add('active')
//  lyricoff.classList.remove('active')
//  lyricctn.classList.add('active')
//})
//lyricoff.addEventListener('click', () => {
//  lyricoff.classList.add('active')
//  lyricon.classList.remove('active')
//  lyricctn.classList.remove('active')
//})

    

// ALBUM
function fAlbum (checkf) {
  checkfAlbum = checkf
}
fAlbum ()
function bAlbum (checkb) {
  checkbAlbum = checkb
}
bAlbum ()


//const table lyric


async function album(u, i) {
    
  
  const getApiAlbum = await fetch(u)
  const {data} = await getApiAlbum.json()
  const mnplistctn = document.querySelector('.mnplistctn')
//  mnplistctn.innerHTML = ''//
  let list = data.items
  
  
  
  //WORK CLICK(QUAN TRỌNG)
  async function setMusicab(iii){
    
    currentMusicab = iii
    
    
    let oblist = list[iii]
    let lyric = oblist.lyric
    const flyric = await fetch (lyric)
    const cvlyrica = await flyric.text()
    const cvlyricb = cvlyrica.split(/\r\n|\n/)

    const filterLyric = cvlyricb.map(s => s.slice(1, 6))
    const tableLyric = cvlyricb.map(d => d.toString().slice(d.indexOf(']') + 1, d.length))
    
    const cvtableLyric = tableLyric.toString().replaceAll("," , "<br>")
    
    
    
    
    music.ontimeupdate = function() {
      
//XỬ LÍ LYRIC
    //if (filterLyric.indexOf(formatTime(music.currentTime).replace(/ /g, "")) > -1) {
      //lyricrender.innerHTML = cvlyricb[filterLyric.indexOf(formatTime(music.currentTime).replace(/ /g, ""))].slice(10)
//    }
    if (Math.floor(music.currentTime) == Math.floor(music.duration)){
      if (repeatBtn.className.includes('active')) {
        setMusicab(currentMusicab)
      } else {
        if (shuffleBtn.className.includes('active')) {
          setMusicab(Math.floor(Math.random() * list.length))
        } else {
          if (iii >= 50) {
          setMusicab(0)
        } else {
        setMusicab(iii += 1)
        }
        }
      }
    }
  }
  // "replace (/ /g, "")" remove all whitespace
    
    

    let thum = oblist.thumbnail
    let minithum = thum.replace('w94_r1', 'w180_r1')
    let bigthum = thum.replace('w94_r1', 'w1600_r1')
    let titlesong = oblist.title
    let artist = oblist.artists_names
    
    const linkmp = oblist.source[128]
    
    //TABLE LYRIC
    const createTblyric = document.createElement('div')
    createTblyric.classList.add('tablelyric')
    createTblyric.innerHTML = `
    <h3>${titlesong}</h3>
    <h4>${artist}</h4>
    <a>${cvtableLyric}</a>
    `
    tblyricCtn.appendChild(createTblyric)
    
    music.src = linkmp
    songName.innerHTML = titlesong;
    artistName.innerHTML = artist;
    coverImage.src = bigthum;
    buttonUp.src = minithum;
    bigCover.src = minithum;
    
    setTimeout (() => {
      seekBar1.max = oblist.duration
      seekBar.max = oblist.duration
      musicDuration.innerHTML = formatTime(oblist.duration)
      
    }, 300)
    playBtn.click()
    
    
    
  }
  
  const forwardbtn = document.querySelector('.forwardbtn')
  const backwardbtn = document.querySelector('.backwardbtn')
  
  const checkjs = document.querySelector('.checkjs')
  
  const forbtnbxh = document.querySelector('.forbtnbxh')
  const backbtnbxh = document.querySelector('.backbtnbxh')
  
  
  
  
//create Forward Backward

  function bfab() {
    
const creatfBtn = document.createElement('img')
creatfBtn.classList.add('forbtn' + i)
creatfBtn.src = "./assets/images/forward.png"
creatfBtn.style.width = "18"
creatfBtn.style.height = "18"

forwardbtn.appendChild(creatfBtn)

const forbtnab = document.querySelector('.forbtn' + i)

forbtnab.addEventListener ('click', () => {
  if(currentMusicab >= 49) {
    currentMusicab = 0
} else {
  currentMusicab++
  }
  setMusicab(currentMusicab)
  playBtn.click()
})

//back

const creatbBtn = document.createElement('img')
creatbBtn.classList.add('backbtn' + i)
creatbBtn.src = "./assets/images/backward.png"
creatbBtn.style.width = "18"
creatbBtn.style.height = "18"

backwardbtn.appendChild(creatbBtn)

const backbtnab = document.querySelector('.backbtn' + i)

backbtnab.addEventListener ('click', () => {
  if(currentMusicab == 0) {
    currentMusicab = 49
} else {
  currentMusicab--
  }
  setMusicab(currentMusicab)
  playBtn.click()
})
} //bfab

if (checkjs.className.includes('fbbtn' + i) == false) {
  checkjs.classList.add('fbbtn' + i)
  bfab()
}
const forbtnab = document.querySelector('.forbtn' + i)
const backbtnab = document.querySelector('.backbtn' + i)
forbtnbxh.style.display = 'none'
backbtnbxh.style.display = 'none'

if (document.querySelector(checkfAlbum) != null) {
  document.querySelector(checkfAlbum).style.display = 'none'
}
if (document.querySelector(checkbAlbum) != null) {
  document.querySelector(checkbAlbum).style.display = 'none'
}

document.querySelector('.forbtn' + i).style.display = 'inline'
fAlbum('.forbtn' + i)
document.querySelector('.backbtn' + i).style.display = 'inline'
bAlbum('.backbtn' + i)
  
  
  //currentTime

  setInterval (() => {
    seekBar1.value = music.currentTime
    seekBar.value = music.currentTime
    currentMusicTime.innerHTML = formatTime(music.currentTime)
    
    
  }, 300)
  
  
  
  
  
  
  
  
  
  for (ii = 0; ii < list.length; ii++) {
    let oblist = list[ii]
    let sttobj = ii
    let thum = oblist.thumbnail
    let titlesong = oblist.title
    let artist = oblist.artists_names
    
    const critplaylist = document.createElement('div')
    critplaylist.classList.add('ctnzone')
    critplaylist.classList.add('b' + ii)
    critplaylist.innerHTML = `
    <h4 class="stt">${ii + 1}</h4>
      <div class="zonelickmn b${ii}">
        <img src="${thum}" width="48" height="48">
        <h2 class="namesongbxh"> ${titlesong}<br><a class="nameartist">${artist}</a></h2>
        
      </div>
    `
    mnplistctn.appendChild(critplaylist)
    //click
    const clickb = document.querySelector('.b' + ii)
    clickb.addEventListener ('click', () => {
      setMusicab(sttobj)
    })
  } //for
  
} 



//CREAT ALBUM

const gralbum = document.querySelector('.playlist-group')
const gralbumTwo = document.querySelector('.playlist-group1')

async function infoalbum(u, i) {
  const getApiinf = await fetch (u)
  const {data} = await getApiinf.json()
  let inf = data.info
  let title = inf.title
  let thumbnail = inf.thumbnail
  let avt = thumbnail.replace('w165_r1', 'w500_r1')
  const creating = document.createElement('div')
  creating.classList.add('playlist-card')
  creating.classList.add('album' + i)
  
  creating.innerHTML = `
  <img src="${avt}" class="playlist-card-img">
      <p class="playlist-card-name">${title}</p>
  `
  if (i < 4) {
  gralbum.appendChild(creating)
  } else {
  gralbumTwo.appendChild(creating)
  }
  const mnplistctn = document.querySelector('.mnplistctn')
  const ctnimgtt = document.querySelector('.album' + i)
  
  
//FIX SAU
  ctnimgtt.addEventListener('click', () => {
    checkjs.classList.add('checkchobxh')
     mnplistctn.innerHTML = ''
     coverPlaylist.src = avt
     avtPlaylist.src = avt
     titleAlbumInPlaylist.innerHTML = title
     amountTracks.innerHTML = data.items.length + ` Tracks`
    album(u, i)
    
    navBtn.click()
    
  })
  

}
for (i = 0; i < apiAlbum.length; i++) {
infoalbum(apiAlbum[i], i)
}




































// TABLE LYRIC
const lyricBtn = document.querySelector('.lyricbtn')
const tableLyric = document.querySelector('.tablelyric-ctn')
const tblyricBack = document.querySelector('.tblyricbackbtn')

lyricBtn.addEventListener('click', () => {
  tableLyric.classList.add('active')
})
tblyricBack.addEventListener('click', () => {
  tableLyric.classList.remove('active')
})


//      TIME BXH

let getTimebxh = new Date()

let minutes = getTimebxh.getMinutes()
if (minutes < 10) {
  minutes = `0`+ minutes
}

timeBxh.innerHTML = getTimebxh.getDate() + `/` + Math.floor(getTimebxh.getMonth() + 1) + `/` + getTimebxh.getFullYear() + ` ` + getTimebxh.getHours() + `:` + minutes

setInterval(() => {
  let getTimebxh = new Date()
  let minutess = getTimebxh.getMinutes()
if (minutess < 10) {
  minutess = `0`+ minutess
}
  timeBxh.innerHTML = getTimebxh.getDate() + `/` + Math.floor(getTimebxh.getMonth() + 1) + `/` + getTimebxh.getFullYear() + ` ` + getTimebxh.getHours() + `:` + getTimebxh.getMinutes()
}, 25000)

if ($(window).width() > 500) {
  alert('Hiện chỉ có phiên bản cho điện thoại, sử dụng máy tính, ipad,... có thể bị lỗi giao diện.')
}