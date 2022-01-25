
const Songs = [
  {
    id:1,
    playpause: false,
    favourite: false,
    songName: "Is Qadar",
    artist: "Darshan Raval",
    duration: "03:46",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/is-qadar-tulsi-kumar-128-kbps-sound.mp3?alt=media&token=d1963457-7278-48a0-8088-c640fc09cd98",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FIs%20Qadar.jpg?alt=media&token=e68eb64a-bab2-4ee4-8c62-94aac1a997fe",
  },
  {
    id:2,
    playpause: false,
    favourite: false,
    songName: "Aaj Sajeya",
    artist: "Goldie Sohel",
    duration: "03:49",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/Aaj%20Sajeya%20Goldie%20Sohel%20320%20Kbps.mp3?alt=media&token=18b821ae-dbe2-4b56-b565-da9842714124",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FAaj-Sajeya.jpg?alt=media&token=9fc02905-cf71-495f-ab99-937e4df7a287",
  },
  {
    id:3,
    playpause: false,
    favourite: false,
    songName: "Baarish Ki Jaaye",
    artist: "B Praak",
    duration: "04:11",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/Baarish%20Ki%20Jaaye%20B%20Praak%20320%20Kbps.mp3?alt=media&token=e7c9b452-b0c7-4e3e-8968-c0fa63b1061c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FBaarish%20ki%20Jaaye.jpg?alt=media&token=facff3a7-fe46-41d2-85c6-eb48b99b33bf",
  },
  {
    id:4,
    playpause: false,
    favourite: false,
    songName: "Lut Gaye",
    artist: "Jubin Nautiyal",
    duration: "03:48",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/Lut%20Gaye%20Jubin%20Nautiyal%20320%20Kbps.mp3?alt=media&token=f71fe776-ce05-4d78-bb82-fca92a4d992f",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FLut%20Gaye.jpg?alt=media&token=22e6f96b-b404-41e7-bb98-aab8a0ca3bf0",
  },
  {
    id:5,
    playpause: false,
    favourite: false,
    songName: "Mazaa",
    artist: "B Praak",
    duration: "04:23",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/Mazaa%20B%20Praak%20320%20Kbps.mp3?alt=media&token=87c14b90-c2a8-4768-8bff-242d3be90a72",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FMazaa.jpg?alt=media&token=d1f918a3-fcfd-4cd2-b91a-d6cc65caee33",
  },
  {
    id:6,
    playpause: false,
    favourite: false,
    songName: "Panghat",
    artist: "Asees Kaur, Divya Kumar",
    duration: "02:59",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/panghat-roohi-128-kbps-sound.mp3?alt=media&token=3b41392f-7012-462c-817e-2049a43b11ea",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FPanghat.jpg?alt=media&token=ce4f628d-439b-4959-adaa-60880a4a8b57",
  },
  {
    id:7,
    playpause: false,
    favourite: false,
    songName: "Thoda Thoda Pyar",
    artist: "Stebin Ben",
    duration: "04:04",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/thoda-thoda-pyaar-stebin-ben-128-kbps-sound.mp3?alt=media&token=ebf193ff-477a-40fa-8fc6-26d6d332605f",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FThoda%20Thoda%20Pyaar.jpg?alt=media&token=8fcee551-6c90-40d6-ac70-67ef3997fe11",
  },
  {
    id:8,
    playpause: false,
    favourite: false,
    songName: "Raataan Lambiyan",
    artist: "Jubin Nautiyal, Asees Kaur",
    duration: "03:50",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/raataan-lambiyan-shershaah-128-kbps-sound.mp3?alt=media&token=68171db6-681d-4c91-af91-ba069e9626b0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2FRaataan%20Lambiyan.jpg?alt=media&token=6635f854-cf91-4965-a5f8-dd1379f09793",
  },
  {
    id:9,
    playpause: false,
    favourite: false,
    songName: "Saiyaan Ji",
    artist: "Yo Yo Honey Singh",
    duration: "03:25",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/saiyaan-ji-yo-yo-honey-singh-2021-128-kbps.mp3?alt=media&token=955bce06-b413-479c-b629-0f980fd54d1c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-93ec3.appspot.com/o/I(mages%2Fsaiyaan%20ji.jpg?alt=media&token=079a6382-101b-4d03-90a1-ce73cec5dfd2",
  },
]
export {Songs};
