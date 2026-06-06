function changePage(pageName) {
    alert("आप " + pageName + " पेज पर हैं!");
    
    // यहाँ आप बाद में यह लिख सकते हैं कि कौन सी स्क्रीन दिखानी है
    const feed = document.getElementById('feed');
    if(pageName === 'Profile') {
        feed.innerHTML = "<h1>प्रोफाइल सेक्शन यहाँ दिखेगा</h1>";
    } else {
        feed.innerHTML = "<h1>" + pageName + " सेक्शन है</h1>";
    }
}
