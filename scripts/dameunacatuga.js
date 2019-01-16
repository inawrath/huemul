// Description:
//   Retorna alguna frase dicha por la @catuga al azar
//   Autorizado expresamente por :catuga: 
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Command:
//   huemul dame una catuga
//
// Author:
//   @ienc

const frases = [
  'https://devschile.slack.com/archives/C0RD53A86/p1543943222226900',
  'https://devschile.slack.com/archives/C0RD53A86/p1543839306108300',
  'https://devschile.slack.com/archives/C0RD53A86/p1542985056127300',
  'https://devschile.slack.com/archives/C0RD53A86/p1540403718000100',
  'https://devschile.slack.com/archives/C0RD53A86/p1538510939000100',
  'https://devschile.slack.com/archives/C0RD53A86/p1538510737000200',
  'https://devschile.slack.com/archives/C0RD53A86/p1537913383000200',
  'https://devschile.slack.com/archives/C0RD53A86/p1535734967000100',
  'https://devschile.slack.com/archives/C0RD53A86/p1534774861000100',
  'https://devschile.slack.com/archives/C0RD53A86/p1533739998000252',
  'https://devschile.slack.com/archives/C0RD53A86/p1533674861000269',
  'https://devschile.slack.com/archives/C0RD53A86/p1533053989000199',
  'https://devschile.slack.com/archives/C0RD53A86/p1532966390000066',
  'https://devschile.slack.com/archives/C0RD53A86/p1532616373000350',
  'https://devschile.slack.com/archives/C0RD53A86/p1529366253000095',
  'https://devschile.slack.com/archives/C0RD53A86/p1525356447000626',
  'https://devschile.slack.com/archives/C0RD53A86/p1523564624000643',
  'https://devschile.slack.com/archives/C0RD53A86/p1502397758266504',
  'https://devschile.slack.com/archives/C0RD53A86/p1499815880714610',
  'https://devschile.slack.com/archives/C0RD53A86/p1499374789916888',
  'https://devschile.slack.com/archives/C0RD53A86/p1497993310155771',
  'https://devschile.slack.com/archives/C0RD53A86/p1496178534877839',
  'https://devschile.slack.com/archives/C0RD53A86/p1493217205595830',
  'https://devschile.slack.com/archives/C0RD53A86/p1490901689220604',
  'https://devschile.slack.com/archives/C0RD53A86/p1485395100004564',
  'https://devschile.slack.com/archives/C0RD53A86/p1483551727001797',
  'https://devschile.slack.com/archives/C0RD53A86/p1481055442000517',
  'https://devschile.slack.com/archives/C0RD53A86/p1480786452000003',
  'https://devschile.slack.com/archives/C0RD53A86/p1480009224000203',
  'https://devschile.slack.com/archives/C0RD53A86/p1479214896000039',
  'https://devschile.slack.com/archives/C0TFU7ZJA/p1502910270000396',
  'https://devschile.slack.com/archives/C0RGZG5EY/p1533152835000217',
  'https://devschile.slack.com/archives/C0RGZG5EY/p1480451135000176',
  'https://devschile.slack.com/archives/C0R6E10LC/p1529957280000572',
  'https://devschile.slack.com/archives/C0R6E10LC/p1493258182765539',
  'https://devschile.slack.com/archives/C0R6E10LC/p1492456146696645',
  'https://devschile.slack.com/archives/C0SN7UH97/p1530815816000342',
  'https://devschile.slack.com/archives/C0R6AM4DP/p1533761858000015',
  'https://devschile.slack.com/archives/C0R6E19QS/p1542225928436200',
  'https://devschile.slack.com/archives/C0R6E19QS/p1534463748000100',
  'https://devschile.slack.com/archives/C0R6E19QS/p1533585761000100',
  'https://devschile.slack.com/archives/C0R6E19QS/p1475673838008922'
]

module.exports = robot => {
  robot.respond(/dame una catuga/gi, msg => msg.send(msg.random(frases)))
}
