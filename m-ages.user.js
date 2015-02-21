// ==Userscript==
// @name m-ages-bot
// @description бот для Мистических Веков v7 (последняя на данный момент) + ignore+rune
// @author soloromail@gmail.com (Deimon, Слесарь, Старовер)
// @include http://m-ages.com.ua/*
// ==/Userscript==
(function(){
var i=0;
var tx='';
speed=1213; //Скорость
var typel = ""; //link OR button OR url
var namel = ""; //передаваемый текст
text = "Не кликайте так быстро по ссылкам"; //Изменить, если что.
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsCountLink(tx) {l=0; la=0; for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {la+=1;}} return la;}
function legendsFindRoun() {mmap='o';it=0;for(i=0;i<document.getElementsByTagName('img').length;i++){if(document.getElementsByTagName('img')[i].src.match('images/th/runes')) {it=it+1;if(document.getElementsByTagName('img')[i].src.match('images/th/runes/17.png')) {mmap=mmap+it;}}}return mmap;}
function legendsDeleteRoun(tx) {l=0;nn=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match('Продать')) {nn=nn+1; if(tx==nn) {l=document.links[i].href; break;}}} if(l!=0) {return l;} else {return false;}}

function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legendsSelect(n,a) {objSel = document.getElementsByName(n)[0];objSel.options[a].selected=true;}
if(document.body.innerHTML.match(text)) location.href=location;
document.body.style.background = "#F0E68C"; //F0E68C

//Кнопки
document.onkeydown=function(e) {
e=e||event;
if(e.keyCode===48&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '0');
localStorage.setItem('kk', '0');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="ВЫКЛ";
}
if(e.keyCode===49&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '1');
localStorage.setItem('kk', 'бой');
document.getElementById('enable').innerHTML="ДЬЯВОЛЫ";
}
if(e.keyCode===50&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '2');
localStorage.setItem('pov', 'п');
document.getElementById('enable').innerHTML="ЛЕСБОЙ";
}
if(e.keyCode===51&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '3');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="ДРАКОН";
}
if(e.keyCode===52&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('kk', 'бой');
localStorage.setItem('en', '4');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="КОПАЛЬНЯ";
}
if(e.keyCode===53&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '5');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="ЧУДОВИЩЕ";
}
if(e.keyCode===54&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '6');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="ВОЙНА";
}
if(e.keyCode===55&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '7');
localStorage.setItem('ud', 'п');
localStorage.setItem('pov', 'п');
document.getElementById('enable').innerHTML="ЛЕСКАЧ";
}
if(e.keyCode===57&&e.ctrlKey) {
e.preventDefault();
localStorage.setItem('en', '9');
localStorage.setItem('ud', 'п');
document.getElementById('enable').innerHTML="ДРАКРАСНЫ";
}
}
//Вверх
//Вниз

//Добавим информер:
d = document.body.innerHTML;
l = '<div id="tty" style="display: block; width: 120px; height: 25px; background: #ffffff; position: fixed; left: 0; top:0;"><center><b id="enable">ВЫКЛ</b></center></div>';
document.body.innerHTML = l+d;



fk=localStorage.getItem('en');
kk=localStorage.getItem('kk');
if(fk == "9") {
document.getElementById('enable').innerHTML="ДРАКРАСНЫ";
if(legendsFindLink('Войти в пещеру')) {
typel='link';
namel='Войти в пещеру';
}
if(legendsFindLink('напасть на дракона')) {
typel='link';
namel='напасть на дракона';
}
if(legendsFindLink('В бой!')) {
typel='link';
namel='В бой!';
}
ud=localStorage.getItem('ud');
if(ud=='п'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'л');
typel='link';
namel='Ударить правой рукой';
} 
if(ud=='л'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'п');
typel='link';
namel='Ударить левой рукой';
}
if((legendsFindText('Нету противников')||legendsFindText('Все противники повержены'))&&legendsFindLink('Покинуть бой')) {
typel='link';
namel='Покинуть бой';
}
if(legendsFindText('Вы уверены, что хотите покинуть бой')) {
typel='url';
namel='http://m-ages.com.ua/leave_b.php?yes';
}
}
//Клетка
if(fk == "2") {
document.getElementById('enable').innerHTML="ЛЕСБОЙ";
//if(legendsFindText('Защитник')) {
pov=localStorage.getItem('pov');
if(pov=='п'&&legendsFindLink('Карта')) {
if(!legendsFindLink('Сорвать')&&!legendsFindLink('Искать в лесу')) localStorage.setItem('pov', 'л');
typel='url';
namel='http://m-ages.com.ua/wood.php?a=move&where=left';
} 
if(pov=='л'&&legendsFindLink('Карта')) {
if(!legendsFindLink('Сорвать')&&!legendsFindLink('Искать в лесу')) localStorage.setItem('pov', 'п');
typel='url';
namel='http://m-ages.com.ua/wood.php?a=move&where=right';
}
//} else {
if(legendsFindLink('Напасть')) {
typel='link';
namel='Напасть';
/*} else {
pov=localStorage.getItem('pov');
if(pov=='п'&&legendsFindLink('Карта')) {
if(!legendsFindLink('Сорвать')&&!legendsFindLink('Искать в лесу')) localStorage.setItem('pov', 'л');
typel='url';
namel='http://m-ages.com.ua/wood.php?a=move&where=left';
} 
if(pov=='л'&&legendsFindLink('Карта')) {
if(!legendsFindLink('Сорвать')&&!legendsFindLink('Искать в лесу')) localStorage.setItem('pov', 'п');
typel='url';
namel='http://m-ages.com.ua/wood.php?a=move&where=right';
}
}*/
}
if(legendsFindLink('Сорвать')) {
typel='link';
namel='Сорвать';
}
if(legendsFindLink('Искать в лесу')) {
typel='link';
namel='Искать в лесу';
}
if(legendsFindLink('В лес')) {
typel='link';
namel='В лес';
}
if(legendsFindLink('Назад на природу')) {
typel='link';
namel='Назад на природу';
}
 

if(legendsFindLink('Обновить')&&legendsFindText('Вы перемещаетесь')) {
legendsLink(legendsFindLink("Обновить"), 3000);
}
if((legendsFindText('Нету противников')||legendsFindText('Все противники повержены'))&&legendsFindLink('Покинуть бой')) {
typel='link';
namel='Покинуть бой';
}
if(legendsFindText('Вы уверены, что хотите покинуть бой')) {
typel='url';
namel='http://m-ages.com.ua/leave_b.php?yes';
}

ud=localStorage.getItem('ud');
if(ud=='п'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'л');
typel='link';
namel='Ударить правой рукой';
} 
if(ud=='л'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'п');
typel='link';
namel='Ударить левой рукой';
}
if(legendsFindText('Вы будете ещё оглушены')) {
typel='link';
namel='Обновить';
}
if(legendsFindText('Книга света')&&!legendsFindText('До использования')) {
typel='url';
namel='http://m-ages.com.ua/use_book.php?light,5';	
}
}

//Клетка
if(fk == "7") {
document.getElementById('enable').innerHTML="ЛЕСКАЧ";
pov=localStorage.getItem('pov');
if(pov=='п'&&legendsFindLink('Карта')) {
localStorage.setItem('pov', 'л');
typel='url';
namel='http://m-ages.com.ua/wood.php?a=move&where=left';
} 
if(pov=='л'&&legendsFindLink('Карта')) {
localStorage.setItem('pov', 'п');
typel='url';
namel='http://m-ages.com.ua/wood.php?a=move&where=right';
}
if(legendsFindLink('Сорвать')) {
typel='link';
namel='Сорвать';
}
if(legendsFindLink('Искать в лесу')) {
typel='link';
namel='Искать в лесу';
}
if(legendsFindLink('В лес')) {
typel='link';
namel='В лес';
}
if(legendsFindLink('Назад на природу')) {
typel='link';
namel='Назад на природу';
}


if(legendsFindLink('Обновить')&&legendsFindText('Вы перемещаетесь')) {
legendsLink(legendsFindLink("Обновить"), 3000);
}
}

//захва
if(fk == "6") {
document.getElementById('enable').innerHTML="ВОЙНА";
if(legendsFindText('Тренировки')&&legendsFindText('Дворец')&&legendsFindText('Вторжение')) {
typel='link';
namel='Воевать';
}

if(legendsFindText('Война')&&legendsFindText('нужно уничтожить')) {
legendsSelect('amount', 3);
legendsClick('Битва!', 1000/speed);
}
ud=localStorage.getItem('ud');
if(ud=='п'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'л');
typel='link';
namel='Ударить правой рукой';
} 
if(ud=='л'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'п');
typel='link';
namel='Ударить левой рукой';
}
if(legendsFindText('Вы будете ещё оглушены')) {
typel='link';
namel='Обновить';
}
if(legendsFindText('Вы напали')) {
typel='link';
namel='В бой!';
}
if(legendsFindLink('Покинуть бой')) {
typel='link';
namel='Покинуть бой';
}
if(legendsFindText('Вы уверены, что хотите покинуть бой')) {
localStorage.setItem('kk', 'питомец');
typel='url';
namel='http://m-ages.com.ua/leave_b.php?yes';
}
if(legendsFindText('начало боя через')||legendsFindLink('Ждать')) {
typel='link';
namel='Ждать';
}
//Книга
if(legendsFindText('Книга света')&&!legendsFindText('До использования')) {
typel='url';
namel='http://m-ages.com.ua/use_book.php?light,5';	
}
}
//захва


//чудя
if(fk == "5") {
document.getElementById('enable').innerHTML="ЧУДОВИЩЕ";
if(legendsFindText('Тренировки')&&legendsFindText('Дворец')) {
typel='link';
namel='Тренировки';
}
if(legendsFindText('Тренировки')&&legendsFindText('Чудище')) {
typel='link';
namel='Чудище';
}

if(legendsFindText('Бои с чудищами')&&legendsFindText('Создать битву')) {
legendsSelect('difficult', 2);
legendsClick('Создать вызов', 1000/speed);
}
ud=localStorage.getItem('ud');
if(ud=='п'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'л');
typel='link';
namel='Ударить правой рукой';
} 
if(ud=='л'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'п');
typel='link';
namel='Ударить левой рукой';
}
if(legendsFindLink('Покинуть бой')) {
typel='link';
namel='Покинуть бой';
}
if(legendsFindText('Вы уверены, что хотите покинуть бой')) {
typel='url';
namel='http://m-ages.com.ua/leave_b.php?yes';
}
if(legendsFindText('начало боя через')||legendsFindLink('Ждать')) {
typel='link';
namel='Ждать';
}
//Книга
if(legendsFindText('Книга света')&&!legendsFindText('До использования')) {
typel='url';
namel='http://m-ages.com.ua/use_book.php?light,5';	
}
}
//чудя

//др
if(fk == "3") {
document.getElementById('enable').innerHTML="ДРАКОН";
if(legendsFindText('Тренировки')&&legendsFindText('Дворец')) {
typel='link';
namel='Тренировки';
}
if(legendsFindText('Тренировки')&&legendsFindText('Дракон')) {
typel='link';
namel='Дракон';
}

if(legendsFindText('Вызов дракона')&&legendsFindText('Без ожидания боя')) {
document.getElementsByName('notime')[0].checked = true;
legendsClick('Создать вызов', 1000/speed);
}
ud=localStorage.getItem('ud');
if(ud=='п'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'л');
typel='link';
namel='Ударить правой рукой';
} 
if(ud=='л'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'п');
typel='link';
namel='Ударить левой рукой';
}

if(legendsFindLink('Покинуть бой')) {
typel='link';
namel='Покинуть бой';
}
if(legendsFindText('Вы уверены, что хотите покинуть бой')) {
typel='url';
namel='http://m-ages.com.ua/leave_b.php?yes';
}
//Книга
if(legendsFindText('Книга света')&&!legendsFindText('До использования')) {
typel='url';
namel='http://m-ages.com.ua/use_book.php?light,5';	
}
}
//др

//рун
if(fk == "4") {
document.getElementById('enable').innerHTML="КОПАЛЬНЯ";
if(kk=="руны") {
if(legendsFindLink('Персонаж')) {
typel='link';
namel='Персонаж';
}
if(legendsFindText('Всего параметров')) {
typel='link';
namel='Мешок';
}
if(legendsFindText('Мешок')) {
if(legendsFindLink('Древняя руна')) {
if(legendsFindText('images/th/runes/17.png')){
if(legendsCountLink('Продать')==legendsCountLink('Древняя руна')) {
mrune=legendsFindRoun();
mrune_l=mrune.length;
if(mrune!='o') {
mrune_l-=1
del=0;
dd=new Array();
for(r=1;r<=mrune_l;r++) {
dd[parseInt(mrune[r])]='x';
}
ds=0;
for(r=1;r<=legendsCountLink('Древняя руна');r++) {
if(!dd[r]) {
ds=1;
typel='url';
namel=legendsDeleteRoun(r);
break;
}
}
if(ds==0||legendsFindText('Мешок пуст!')) {
localStorage.setItem('kk', 'бой');
typel='link';
namel='Город';
}
}
}
}
if(!legendsFindText('images/th/runes/17.png')) {
//Нет
if(legendsCountLink('Продать')==legendsCountLink('Древняя руна')) {
typel='link';
namel='Продать';
}
}
}
}
if(legendsFindText('Разборка предмета')) {
if(legendsFindLink('Да')) {
typel='link';
namel='Да';
}
}
if(legendsFindText('Вы разобрали')) {
if(legendsFindLink('Назад')) {
typel='link';
namel='Назад';
}
}
}

if(kk=="бой") {
if(legendsFindText('Тренировки')&&legendsFindText('Дворец')) {
typel='link';
namel='Тренировки';
}
if(legendsFindText('Тренировки')&&legendsFindText('Копальни')) {
typel='link';
namel='Копальни';
}

if(legendsFindText('Копальни гномов')&&legendsFindText('Без ожидания боя')) {
document.getElementsByName('notime')[0].checked = true;
legendsClick('Отправитса в низ', 1000/speed);
}
ud=localStorage.getItem('ud');
if(ud=='п'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'л');
typel='link';
namel='Ударить правой рукой';
} 
if(ud=='л'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'п');
typel='link';
namel='Ударить левой рукой';
}

if(legendsFindLink('Покинуть бой')) {
typel='link';
namel='Покинуть бой';
}
if(legendsFindText('Вы уверены, что хотите покинуть бой')) {
localStorage.setItem('kk', 'руны');
typel='url';
namel='http://m-ages.com.ua/leave_b.php?yes';
}
//Книга
if(legendsFindText('Книга света')&&!legendsFindText('До использования')) {
typel='url';
namel='http://m-ages.com.ua/use_book.php?light,5';	
}
}
}
//рун



//Работает

if(fk == "1") {
document.getElementById('enable').innerHTML="ДЬЯВОЛЫ";


if(kk=="питомец") {
if(legendsFindText('Питомцы')&&legendsFindText('Дворец')) {
typel='link';
namel='Питомцы';
}
if(legendsFindText('Укротитель')) {
typel='link';
namel='Мои питомцы';
}
if(legendsFindText('Ваши питомцы')) {
if(legendsFindLink('Отозвать')&&legendsFindLink('Выгнать')) {
if(!legendsFindLink('Лечить')) localStorage.setItem('kk', 'бой');
typel='link';
namel='Город';
}
if(legendsFindLink('Лечить')) {
typel='link';
namel='Лечить';
}
}

if(legendsFindText('Вы вылечели питомца')) {
localStorage.setItem('kk', 'бой');
typel='link';
namel='Город';
}
}
if(kk=="бой") {
if(legendsFindText('Тренировки')&&legendsFindText('Дворец')) {
typel='link';
namel='Тренировки';
}
if(legendsFindText('Тренировки')&&legendsFindText('Портал')) {
typel='link';
namel='Портал';
}

if(legendsFindText('Портал')&&legendsFindText('Без ожидания боя')) {
document.getElementsByName('notime')[0].checked = true;
legendsClick('Вызвать на поединок', 1000/speed);
}
ud=localStorage.getItem('ud');
if(ud=='п'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'л');
typel='link';
namel='Ударить правой рукой';
} 
if(ud=='л'&&legendsFindLink('Ударить')) {
localStorage.setItem('ud', 'п');
typel='link';
namel='Ударить левой рукой';
}
if(legendsFindText('успешно вызвали')) {
typel='link';
namel='бой';
}
if(legendsFindLink('Покинуть бой')) {
typel='link';
namel='Покинуть бой';
}
if(legendsFindText('Вы уверены, что хотите покинуть бой')) {
localStorage.setItem('kk', 'ларцы');
typel='url';
namel='http://m-ages.com.ua/leave_b.php?yes';
}
//Книга
if(legendsFindText('Книга света')&&!legendsFindText('До использования')) {
typel='url';
namel='http://m-ages.com.ua/use_book.php?light,5';	
}
}
if(kk=="ларцы") {
if(legendsFindLink('Персонаж')) {
typel='link';
namel='Персонаж';
}
if(legendsFindText('Всего параметров')) {
typel='link';
namel='Мешок';
}
if(legendsFindLink('Открыть все ларцы')) {
localStorage.setItem('kk', 'сообщения');
typel='link';
namel='Открыть все ларцы';
}
}
if(kk=="сообщения") {
typel='url';
namel='http://m-ages.com.ua/input.php';
if(legendsFindText('Входящие')) {
localStorage.setItem('kk', 'питомец');
typel='link';
namel='Город';
}
}
}
if(legendsFindText('Мешок пуст!')) {
localStorage.setItem('kk', 'бой');
typel='link';
namel='Город';
}
if(fk=='0') {
document.getElementById('enable').innerHTML="ВЫКЛ";
}
gga=localStorage.getItem('gga');
if(!legendsFindText('images/bafs/vip.png')&&legendsFindText('Дворец')) {
if(legendsFindLink('Город')) {
localStorage.setItem('gga', 'vip');
typel='url';
namel='http://m-ages.com.ua/gold.php?vip';
}
}
if(gga=="vip") {
if(legendsFindLink('Город')) {
localStorage.setItem('gga', 'отбой');
typel='link';
namel='Город';
}
}
if(fk == "2"||fk == "7") {
if(typel=="link") legendsLink(legendsFindLink(namel), speed);
if(typel=="url") legendsLink(namel, speed);
} else {
if(typel=="link") legendsLink(legendsFindLink(namel), 1000/speed);
if(typel=="url") legendsLink(namel, 1000/speed);
}
}
)();
