import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  MessageCircle,
  Send,
  User,
  Bot,
  RefreshCw,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

interface ChatRoom {
  id: string;
  user: {
    name: string;
    email: string;
  };
  status: 'active' | 'closed';
  lastMessage: string;
  unreadCount: number;
  createdAt: Date;
}

interface Message {
  id: string;
  content: string;
  senderType: 'user' | 'admin';
  senderName: string;
  timestamp: Date;
}

const AdminChatManager = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Mock data since no backend is available
    const mockChatRooms: ChatRoom[] = [
      {
        id: '1',
        user: { name: 'John Doe', email: 'john@example.com' },
        status: 'active',
        lastMessage: 'Hello, I need help with my account',
        unreadCount: 2,
        createdAt: new Date(Date.now() - 1000 * 60 * 30)
      },
      {
        id: '2',
        user: { name: 'Jane Smith', email: 'jane@example.com' },
        status: 'active',
        lastMessage: 'Thank you for your help!',
        unreadCount: 0,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2)
      }
    ];

    setChatRooms(mockChatRooms);
    setIsLoading(false);
  }, []);

  const loadMessages = (roomId: string) => {
    // Mock messages
    const mockMessages: Message[] = [
      {
        id: '1',
        content: 'Hello, I need help with my account',
        senderType: 'user',
        senderName: 'John Doe',
        timestamp: new Date(Date.now() - 1000 * 60 * 30)
      },
      {
        id: '2',
        content: 'Hi! I\'d be happy to help. What specific issue are you experiencing?',
        senderType: 'admin',
        senderName: 'Support Team',
        timestamp: new Date(Date.now() - 1000 * 60 * 25)
      }
    ];
    setMessages(mockMessages);
  };

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId);
    loadMessages(roomId);
    
    // Mark as read
    setChatRooms(prev => prev.map(room => 
      room.id === roomId ? { ...room, unreadCount: 0 } : room
    ));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedRoom) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      senderType: 'admin',
      senderName: 'Support Team',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Update last message in room list
    setChatRooms(prev => prev.map(room => 
      room.id === selectedRoom 
        ? { ...room, lastMessage: newMessage }
        : room
    ));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">Loading chats...</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Chat Rooms List */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            Active Chats
          </h3>
          <Badge variant="secondary">
            {chatRooms.filter(room => room.status === 'active').length}
          </Badge>
        </div>
        
        <ScrollArea className="h-[500px]">
          <div className="space-y-2">
            {chatRooms.map((room) => (
              <div
                key={room.id}
                onClick={() => handleRoomSelect(room.id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedRoom === room.id 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'hover:bg-muted/50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{room.user.name}</h4>
                  {room.unreadCount > 0 && (
                    <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {room.unreadCount}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-2 truncate">
                  {room.lastMessage}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(room.createdAt)}
                  </span>
                  <Badge 
                    variant={room.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {room.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Chat Messages */}
      <Card className="lg:col-span-2">
        {selectedRoom ? (
          <div className="h-full flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    {chatRooms.find(room => room.id === selectedRoom)?.user.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {chatRooms.find(room => room.id === selectedRoom)?.user.email}
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  Active
                </Badge>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderType === 'admin' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.senderType === 'admin' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          message.senderType === 'admin' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {message.senderType === 'admin' ? (
                          <Bot className="h-4 w-4" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.senderType === 'admin'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {message.senderName} • {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your response..."
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select a chat to start messaging</p>
              <p className="text-sm mt-1">Note: This is a demo system. Backend integration required for real chat functionality.</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export { AdminChatManager };