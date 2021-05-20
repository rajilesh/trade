var app = document.createElement('div');
app.id = 'app';
document.querySelector('body').appendChild(app);
setTimeout(function(){

document.getElementById('app').style = ` position: fixed;
left: 0;
top: 0;
right: 0;
overflow: auto;
height: 100vh;
z-index: 9999999;
display:none;`;
},1000);


window.addEventListener("keydown", (e) => {
    if (e.key == "q") {
      document.getElementById('app').style.background = 'none';
        document.getElementById('app').style.display = document.getElementById('app').style.display =='none' ? 'block' : 'none';
    //   th.autoFetch();
    //   this.history_active ='';
    }else if (e.key == "w") {
      document.getElementById('app').style.background = '#fff';
      document.getElementById('app').style.display = document.getElementById('app').style.display =='none' ? 'block' : 'none';
  //   th.autoFetch();
  //   this.history_active ='';
  }else if(e.key){
    //   th.history.forEach((o,i)=>{
    //     if(i==e.key-1)
    //     {
    //     th.applyStoredData(o);
    //     }
    //   })

    }
  });

// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        console.log(firstHref);
  
        // This line is new!
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
      }
    }
  );