(function (){
    
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.src = browser.runtime.getURL('injection.js');
    document.body.appendChild(script);
    
})();

