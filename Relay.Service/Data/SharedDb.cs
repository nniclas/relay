using System.Collections.Concurrent;
using Relay.Service.Models;

namespace Relay.Service.Data;

public class SharedDb 
{
    private readonly ConcurrentDictionary<string, UserConnection> connections = new ();

    public ConcurrentDictionary<string, UserConnection> Connections => connections;
}