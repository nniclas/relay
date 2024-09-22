using Microsoft.AspNetCore.SignalR;
using Relay.Service.Data;
using Relay.Service.Models;

namespace Relay.Service;

public class ChatHub : Hub
{
    private readonly SharedDb db;

    public ChatHub(SharedDb sharedDb) => db = sharedDb;
    public async Task JoinChat(UserConnection connection)
    {
        await Clients.All.SendAsync("ReceiveMessage", "admin", $"{connection.Username} is online");
    }

    public async Task JoinChatRoom(UserConnection connection)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
        db.Connections[Context.ConnectionId] = connection;
        await Clients.Group(connection.ChatRoom).SendAsync("ReceiveMessage", "admin", $"{connection.Username} is online in ${connection.ChatRoom}");
    }

    public async Task SendMessage(string msg) {
        Console.WriteLine("sdkljhdskg");
        if (db.Connections.TryGetValue(Context.ConnectionId, out UserConnection connection))
        {
            await Clients.Group(connection.ChatRoom)
                .SendAsync("ReceiveSpecificMessage", connection.Username, msg);
        }
    }
}