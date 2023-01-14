var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE phantom;'
var seedQuery = 'INSERT INTO phantom (title, nick, avatar, about) VALUES ("Default Phantom Assassin", "Phantom Assassin", "/images/phantom1.png", "Phantom Assassin идёт в наступление, едва завидев свою жертву. Предварительно атаковав противника кинжалом, а затем мгновенно сблизившись с ним, Мортред легко уклоняется от атак и обрушивает на врага удар за ударом, любой из которых может оказаться роковым.),  ("Manifold Paradox", "Arcana", "/images/arcana.png", "Издав хриплый смешок, старший кузнец Крейлер взмахнул мечом, ковавшимся 11 поколениями его семьи. Он был настолько острым, что окружающий мир, с треском разорвавшейся материи, разошелся. Через этот разрыв Крейлер увидел себя несколькими мгновениями ранее, державшего тот же самый вожделенный меч. Вдруг, в приступе алчности и сумасшествия, он сразил своего двойника, чтобы заполучить второй меч. Но, с запозданием Крейлер почувствовал знакомую рану, и внезапно воспоминания о ней нахлынули на него..."), ("Personality", "Alternative Personality", "/images/alt_pers.png", "Асан-изгнанник, втайне взращённый отвергнутыми Сёстрами вуали, всю жизнь стремился к единственной цели: уничтожить ложного пророка, которого его учителя винили в развращении их когда-то святой веры. Одного за другим его стражей забирали кинжалы потаённых убийц, но теперь Асан наконец готов выйти из тени — чтобы исполнить тёмные пожелания своих наставников и воплотить роковые пророчества, вселяющие в оракула ужас.");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'phantomassassin'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
