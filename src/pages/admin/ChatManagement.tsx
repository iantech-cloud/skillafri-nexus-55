import { AdminChatManager } from '@/components/AdminChatManager';

const ChatManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Live Chat Management</h1>
        <p className="text-muted-foreground">Manage customer support conversations</p>
      </div>
      <AdminChatManager />
    </div>
  );
};

export default ChatManagement;