var text = "I like you!";
var sleeptime = 200;
var fromlang = "en";

var langcode = new Array("tr","zh-TW","zh-CN","da","eu","ja","mi","jw","gl","ca","kn","ne","af","fy","be","lt","ig","is","hu","id","su","hi","gu","ky","es","hr","iw","el","hy","az","ny","bn","ps","la","lv","fr","bs","fa","pl","fi","am","ar","sq","ru","bg","sd","xh","zu","kk","cy","co","hmn","en","haw","ku","no","pa","th","ta","te","ht","uk","uz","ur","so","mt","ms","mk","mg","mr","ml","km","eo","ceb","cs","sn","nl","ka","sw","sk","sl","tl","vi","tg","sr","yi","et","ga","sv","st","it","pt","mn","ha","lo","de","my","lb","si","yo","ko","sm","ro","gd");
var langname = new Array("土耳其文","中文(繁體)","中文(簡體)","丹麥文","巴斯克文","日文","毛利文","爪哇文","加里西亞文","加泰羅尼亞文","卡納達文","尼泊爾文","布爾文","弗利然文","白俄羅斯文","立陶宛文","伊博文","冰島文","匈牙利文","印尼文","印尼巽他文","印度文","印度古哈拉地文","吉爾吉斯文","西班牙文","克羅埃西亞文","希伯來文","希臘文","亞美尼亞文","亞塞拜然文","奇切瓦文","孟加拉文","帕施圖文","拉丁文","拉脫維亞文","法文","波西尼亞","波斯文","波蘭文","芬蘭文","阿姆哈拉文","阿拉伯文","阿爾巴尼亞文","俄文","保加利亞文","信德文","南非柯薩文","南非祖魯文","哈薩克文","威爾斯文","科西嘉文","苗文","英文","夏威夷文","庫德文","挪威文","旁遮普文","泰文","泰米爾文","泰盧固文","海地克里奧文","烏克蘭文","烏茲別克文","烏爾都文","索馬里文","馬耳他文","馬來文","馬其頓文","馬拉加斯文","馬拉地文","馬拉雅拉姆文","高棉文","國際語文","宿霧文","捷克文","紹納文","荷蘭文","喬治亞文","斯瓦希里文","斯洛伐克文","斯洛維尼亞文","菲律賓文","越南文","塔吉克文","塞爾維亞文","意第緒文","愛沙尼亞文","愛爾蘭文","瑞典文","瑟索托文","義大利文","葡萄牙文","蒙古文","豪沙文","寮文","德文","緬甸文","盧森堡文","錫蘭文","優魯巴文","韓文","薩摩亞文","羅馬尼亞文","蘇格蘭的蓋爾文");
var res = "\n";
function Translate(i) {
	if (i >= 104) {
		console.log(res);
		return;
	}
	console.log("Translate "+i+" "+langcode[i]+" "+langname[i]);
	location.hash = "#"+fromlang+"/"+langcode[i]+"/"+text;
	setTimeout( function(){ GetText(i) } ,sleeptime);
}
function GetText(i) {
	if (result_box.lang != langcode[i]) {
		setTimeout( function(){ GetText(i) } ,sleeptime);
		console.log("Wait!");
		return ;
	}
	console.log(result_box.innerText);
	res += result_box.innerText+" ("+langname[i]+")\n";
	Translate(i+1);
}
Translate(0);
