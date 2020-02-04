// Description:
//   Utility commands surrounding Hubot uptime.
//
// Commands:
//   ping - Reply with pong
//   echo <text> - Reply back with <text>
//   time - Reply with current time
'use strict';

// var readline = require('readline')
// var google = require('@googleapis')
// var moment = require('moment')
var fs = require('fs');
//ファイルの書き込み関数
function writeFile(path, data) {
  fs.writeFile(path, data, function (err) {
    if (err) {
        throw err;
    }
  });
}
//使用例

  module.exports = (robot) => {
    var attend = 0
    var notattend = 0


    console.log("start\n")

    robot.respond(/出席$/i, (res) => {
      res.send({
	       question: '授業に出席しましたか？'
       });
    });

    robot.respond('yesno', (res) => {
	     if (res.json.response === true) {
		       res.send(`お疲れ様です。`);
           attend+=1
	     } else {
		       res.send(`次は頑張りましょう。`);
           notattend+=1
	     }
       res.send("出席回数："+attend+"\n欠席回数："+notattend)
       //writeFile("test.txt", "出席回数："+attend+"\n欠席回数："+notattend);
       console.log("出席回数："+attend+"\n欠席回数："+notattend)
    });

    // robot.respond('map', (res) => {
    //   res.send(`Your location is ${res.json.place} at ${res.json.lat}, ${res.json.lng}`);
    // });
    //
    // robot.respond(/ADAPTER$/i, (res) => {
    //   res.send(robot.adapterName);
    // });
    //
    // robot.respond(/ECHO (.*)$/i, (res) => {
    //   res.send(res.match[1]);
    // });
    //
    // robot.respond(/TIME$/i, (res) => {
    //   res.send(`Server time is: ${new Date()}`);
    // });
  };
