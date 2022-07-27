# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Users seed information:

|firstName|lastName|email|password|image|roleId|createdAt|updatedAt|
|:----|:----|:----|:----|:----|:----|:----|:----|
|Jasmine|Chellam|jchellam0@cbsnews.com|lJGRQsZ9Pnx|8cee83bafdb828b1af7bbf669e09deb2|2|2022-01-20 21:45:33|2022-03-12 13:11:07|
|Eveline|MacKill|emackill1@webeden.co.uk|Q2nXUOny|5a1dcc65b51848ae2e051b14b7641e4a|2|2021-08-22 04:48:48|2022-02-21 06:05:49|
|Spence|Rasch|srasch2@webnode.com|hdlo89KKc5Ua|508b6de4330c828512069c2b1e5fe42c|2|2022-06-21 21:09:17|2021-12-25 17:53:12|
|Fayre|Kenefick|fkenefick3@goo.gl|kb96rFR|dd47e71a84a49f6c6910ec795f7ef7a8|1|2022-05-05 19:52:06|2022-04-19 23:23:19|
|Randee|Verriour|rverriour4@ameblo.jp|AYy39l6SFWL|4fe4325cfbc1ef1160986161b585208d|2|2022-03-04 00:32:46|2021-07-26 07:22:31|
|Bridgette|Lepper|blepper5@merriam-webster.com|oxrmeillqz|1ed34a1443ce699b6514a6fee869a6b0|1|2021-12-25 13:06:10|2021-09-26 22:52:53|
|Charlean|Kondratenya|ckondratenya6@flavors.me|asJhcjf|b3da1c2023241d651454828534f3339b|1|2022-03-27 12:05:58|2022-05-15 14:18:56|
|Elwin|Karpenko|ekarpenko7@china.com.cn|la9WqCqY|59899123baf5db05078508486ba6e3ad|1|2022-04-09 19:58:49|2022-02-27 18:52:19|
|Bernadette|Shiell|bshiell8@g.co|jEJLuRj|4351c060564d296921f53ae1de7988fc|2|2021-09-08 02:54:01|2022-04-12 02:56:39|
|Christal|Ower|cower9@china.com.cn|twacVb9jz0v|7e34e42547d7e72145ad84f86c8dc1de|1|2021-08-09 19:06:50|2021-10-11 15:25:53|
|Rickie|Farahar|rfarahara@cocolog-nifty.com|6yF4sKuOk|225971b5f8f9b452d63abacc4ac8c430|2|2022-03-13 00:01:30|2021-09-09 19:07:56|
|Orly|Handasyde|ohandasydeb@opensource.org|v8IGIV|85b67b47d3292523cce3fe0f773d6f17|1|2022-03-27 19:56:00|2022-05-01 21:39:27|
|Elysha|Keson|ekesonc@time.com|qSwYWs80sK|04ee3b6124c09758ffc1bbf458de07e1|1|2022-02-23 21:40:53|2021-08-08 04:06:08|
|Debbie|Francomb|dfrancombd@usatoday.com|57tL5tf3x|801b738daa34190386f2110c064b2da3|1|2021-12-20 02:02:12|2022-04-14 09:20:01|
|Fenelia|D'Alessio|fdalessioe@dion.ne.jp|GcTuJP|da36c4d8f990892096fd7022bfa213cb|2|2021-11-24 01:52:29|2022-04-21 10:32:06|
|Eleanore|Mantrup|emantrupf@salon.com|kbIKKPr|765995eea904e07a4c6f1afb76fd8bbe|2|2021-08-04 05:03:25|2021-08-09 03:03:47|
|Charin|Klimecki|cklimeckig@mayoclinic.com|qhdkOB|7439e47fa41c8595293d1a5c58d2255b|2|2022-04-20 15:30:37|2021-09-08 20:09:53|
|Tabbi|Folbig|tfolbigh@macromedia.com|PBLgeLN|2f15cb21c0f985351ac7bd449e25ee0c|2|2022-07-06 20:58:30|2022-02-13 08:22:40|
|Bernice|Harrad|bharradi@smugmug.com|pcKzLcaaMIQF|0d77c775c22837502980c041a0b7aec0|1|2021-07-27 11:13:06|2022-02-01 01:49:55|
|Mariann|Peak|mpeakj@ask.com|8i9R6MX|34ae5bf3996abb79170de143120d2a9a|1|2021-10-12 11:35:00|2022-01-07 02:19:56|
|Jamie|Vernon|jvernon0@un.org|wSJ1nnzCmO|34ae5bf3996abb79170de143120d2a9a|1|11/27/2021|10/4/2021|
|Derron|Kinch|dkinch1@spiegel.de|nlWW7Fj0Mc|34ae5bf3996abb79170de143120d2a9a|1|8/30/2021|8/11/2021|
|Betta|Simmonds|bsimmonds2@pen.io|zgcMaXzKnzXz|34ae5bf3996abb79170de143120d2a9a|1|9/13/2021|9/27/2021|
|Kristoffer|Ryott|kryott3@opera.com|RmRugDskNJQ4|34ae5bf3996abb79170de143120d2a9a|2|11/7/2021|4/24/2022|
|Teri|Mitchener||tmitchener4@ucoz.com|IbPHHBfFu|34ae5bf3996abb79170de143120d2a9a|2|1/12/2022|8/8/2021|
|Ellery|Exter|eexter5@marketwatch.com |oDI8qUZ|34ae5bf3996abb79170de143120d2a9a|1|1/24/2022|11/1/2021|
|Sela|Pandie|spandie6@blogtalkradio.com|5RaX4a4dKke|34ae5bf3996abb79170de143120d2a9a|1|5/19/2022|6/28/2022|
|Mellisent|Escolme|mescolme7@bbc.co.uk|OMjrIn|34ae5bf3996abb79170de143120d2a9a|2|3/5/2022|11/26/2021|
|Kaja|Schwander|kschwander8@merriam-webster.com|VB5Stujnu|34ae5bf3996abb79170de143120d2a9a|2|2/25/2022|2/15/2022|
|Elonore|Misselbrook|emisselbrook9@npr.org|1cjAV3XIWP|34ae5bf3996abb79170de143120d2a9a|1|4/19/2022|4/16/2022|
|Alina|Webb-Bowen|awebbbowena@dagondesign.com|3zNxsrLQEF1b|34ae5bf3996abb79170de143120d2a9a|1|10/22/2021|2/13/2022|
|Elane|Luigi|eluigib@hatena.ne.jp|BNczByIRY|34ae5bf3996abb79170de143120d2a9a|1|5/1/2022|10/8/2021|
|Andee|Streets|astreetsc@cdbaby.com|b8QfMcWLZh8|34ae5bf3996abb79170de143120d2a9a|2|11/22/2021|10/30/2021|
|Pansie|Grimsdale|pgrimsdaled@nifty.com|UKjjPhKA|34ae5bf3996abb79170de143120d2a9a|2|12/10/2021|2/24/2022|
|Dulciana|Balfe|dbalfee@mozilla.org|05N6iL|34ae5bf3996abb79170de143120d2a9a|2|1/2/2022|6/27/2022|


