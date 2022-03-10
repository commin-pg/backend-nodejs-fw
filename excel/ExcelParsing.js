const XLSX = require("xlsx");
const sf = require("sf");

const fs = require("fs");

function createData(cb) {
  var path = "./metaData_20220208.xlsx";
  console.log(path);

  let workbook = XLSX.readFile(path);
  let datas = [];

  for (let sh = 0; sh < workbook.SheetNames.length; sh++) {
    console.log(workbook.SheetNames[sh]);

    let worksheet = workbook.Sheets[workbook.SheetNames[sh]];
    var range = XLSX.utils.decode_range(worksheet["!ref"]);
    var num_rows = range.e.r - range.s.r + 1;
    if (workbook.SheetNames[sh] === "AlbumData") {
      for (let i = 2; i <= num_rows; i++) {
        var row = sf(
          'call spc_update_album_metadata("{UPC}" ,"{AlbumCode}", "{LabelCode}", "{AlbumGenre}", "{AlbumMainArtist}", "{AlbumMainArtistLocal}",  "{AlbumTitle}", "{AlbumTitleLocal}","{explict}");',
          {
            UPC: worksheet["A" + i].w.trim(),
            AlbumCode: worksheet["B" + i].w,
            LabelCode: worksheet["C" + i].w,
            AlbumGenre: worksheet["D" + i].w,
            AlbumMainArtist: worksheet["E" + i].w,
            AlbumMainArtistLocal: worksheet["F" + i]
              ? worksheet["F" + i].w
              : "",
            AlbumTitle: worksheet["G" + i].w,
            AlbumTitleLocal: worksheet["H" + i] ? worksheet["H" + i].w : "",
            explict: worksheet["I" + i].w === "Not Explicit" ? "0" : "1",
          }
        );
        console.log(row)
        datas.push(row);
      }
    } else if (workbook.SheetNames[sh] === "TrackData") {
      for (let i = 2; i <= num_rows; i++) {
        var row = sf(
          'call spc_update_track_metadata("{TrackNumber}" ,"{ISRC}", "{TrackCode}", "{TrackPYear}", "{TrackCYear}", "{TrackGenre}",  "{TrackMainArtist}", "{TrackMainArtistLocal}", "{TrackTitle}", "{TrackTitleLocal}","{explict}");',
          {
            TrackNumber: worksheet["A" + i].w.trim(),
            ISRC: worksheet["B" + i].w,
            TrackCode: worksheet["C" + i].w,
            TrackPYear: worksheet["D" + i].w,
            TrackCYear: worksheet["E" + i].w,
            TrackGenre: worksheet["F" + i].w,
            TrackMainArtist: worksheet["G" + i].w,
            TrackMainArtistLocal: worksheet["H" + i]
              ? worksheet["H" + i].w
              : "",
            TrackTitle: worksheet["I" + i] ? worksheet["I" + i].w : "",
            TrackTitleLocal: worksheet["J" + i] ? worksheet["J" + i].w : "",
            explict: worksheet["K" + i].w === "Not Explicit" ? "0" : "1",
          }
        );
        datas.push(row);
      }
    }
  }

  console.log(datas);
  cb(datas);
}

function getTimeStamp() {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일

  return year + "-" + month + "-" + date;
}

createData((datas) => {
  var fileName = `result-${getTimeStamp()}.sql`;
  fs.writeFile(fileName, datas.join("\n"), "utf8", function (err) {
    if (err) throw err;
    console.log("addFile success ", fileName);
  });
  console.log("File job complete ", datas.length);
});
