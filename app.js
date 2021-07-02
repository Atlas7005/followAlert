require("dotenv").config();
const { ApiClient } = require("twitch");
const { ClientCredentialsAuthProvider } = require("twitch-auth");
const { EventSubListener } = require("twitch-eventsub");
const { NgrokAdapter } = require("twitch-eventsub-ngrok");

const io = require("socket.io")(6508, {
    cors: {
        origin: "*"
    }
});

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const userId = process.env.userId;

const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

(async function() {
    await apiClient.helix.eventSub.deleteAllSubscriptions();
    const listener = new EventSubListener(apiClient, new NgrokAdapter(), process.env.randomTxt);
    await listener.listen();

    const followListener = await listener.subscribeToChannelFollowEvents(userId, e => {
        io.sockets.emit("follow", e._data.user_name);
    });
})();
