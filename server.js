const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Supabaseの設定
const supabaseUrl = 'https://eiwggkyporhnmhfvhpvh.supabase.co'; // SupabaseのURL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpd2dna3lwb3Jobm1oZnZocHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzODQyODgsImV4cCI6MjA3NDk2MDI4OH0.BdcvCdqXSWHiUNmS4GT7eaa_WmmC9RyFCIhlY3BBiBk'; // Supabaseのanonキー
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('新しいユーザーが接続しました');

    // メッセージをロードして送信
    loadMessages(socket);

    socket.on('sendMessage', async (message) => {
        // Supabaseにメッセージを挿入
        const { data, error } = await supabase
            .from('messages')
            .insert([{ content: message }]);

        if (error) {
            console.error('メッセージの挿入エラー:', error);
        } else {
            io.emit('receiveMessage', message); // 他のクライアントに送信
        }
    });

    socket.on('disconnect', () => {
        console.log('ユーザーが切断しました');
    });
});

// メッセージをロードする関数
async function loadMessages(socket) {
    const { data: messages, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('メッセージの取得エラー:', error);
    } else {
        socket.emit('loadMessages', messages.map(msg => msg.content));
    }
}

server.listen(3000, () => {
    console.log('サーバーがポート3000で起動しました');
});
