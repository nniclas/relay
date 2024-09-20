using Microsoft.AspNetCore.SignalR;
using Relay.Service.Models;

namespace Relay.Service;

public class ChatHub : Hub
{
    public async Task JoinChat(UserConnection connection)
    {
        await Clients.All.SendAsync("ReceiveMessage", "admin", $"{connection.Username} is online");
    }

    public async Task JoinChatRoom(UserConnection connection)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
        await Clients.Group(connection.ChatRoom).SendAsync("ReceiveMessage", "admin", $"{connection.Username} is online in ${connection.ChatRoom}");
    }
}