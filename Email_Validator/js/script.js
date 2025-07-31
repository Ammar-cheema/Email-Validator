// let results = {
//      "tag": "",
//      "free": false,
//      "role": false,
//      "user": "221400040",
//      "email": "221400040@gift.edu.pk",
//      "score": 0.8,
//      "state": "deliverable",
//      "domain": "gift.edu.pk",
//      "reason": "valid_mailbox",
//      "mx_found": true,
//      "catch_all": null,
//      "disposable": false,
//      "smtp_check": true,
//      "did_you_mean": "",
//      "format_valid": true
//    }
   
   let submitBtn = document.getElementById('submit-btn');

   submitBtn.addEventListener('click', async (e) => {
     console.log("ammar");
       e.preventDefault();
       console.log('clicked');
       let key = 'ema_live_ajkYTWzDP2S2sBCtox5yI632ht2fhjRGSSJbgCq0';
       let email = document.getElementById("username").value;
       let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
       url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_ajkYTWzDP2S2sBCtox5yI632ht2fhjRGSSJbgCq0&email=support@emailvalidation.io
       `
       let res = await fetch(url);
       let result = await res.json();
       let resultContainer = document.getElementById('result-Container');
       let str = ``;
       for (let key of Object.keys(result)) {
           str = str + `<div> ${key} : ${result[key]} </div>`;
       }
       console.log(str);
       resultContainer.innerHTML = str;
   });
   