# school-internet-
school internet β
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ログインフォーム</title>
</head>
<h1>yahoo!<img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEX/////AAD/ADP/x8v/ACz/AB//ACP/3+L/+Pn/ABH/AC7/ABb/ACn/AAX/ABr/4+X/6ev/Y3L/qbD/doP/8fP/tLn/b3r/RFn/KkX/lp//kpv/Nk7/oKj/19r/UmX/f4r/u8D/i5X/0NT/W2z/FTn/IT+uDGIDAAAA9klEQVQ4je2S23KDIBCGYTmfNEKibUwbE+v7v2LxkDGD2Oltp/lvWOBb9t9hEXrpX4lhZ3iUwRiLn8CS+GAAbBCHY3IlN7BXAGzGThg7xpjCuEbN23ta41wAbedQkAvXqvYfSCrN3WdC1hz4dYlDMZTj2jEAdUirtxRUN0VVLDonW+C3jU1J9ZQuW+yXo/ggzXQvHOgBCa7uy8G9ANNlQOQN2J7x8rG/WtrkuGiOAuWreQC38wGxS1qtVpQNeS4Bz4ZtfyYHksrvcBPY710+6dhT0E05j0b5ddnpJA6ZisMwDtspboOalq0kWTU+SW7DL0y89Gf0DYdWChoACBdyAAAAAElFTkSuQmCC" alt = "yahoo!"></h1>
<p>ただいまサーバーが混乱しています。ログインとサインアップは本サイトで行ってください</p>
<head>
    <meta charset="UTF-8">
    <title>ログイン</title>
    <script>
        function handleSubmit(event) {
            event.preventDefault(); // フォームの送信を防ぐ
            alert("ログイン完了"); // アラートを表示
            // ここで、必要な処理を追加できます
        }
    </script>
</head>
<body>
    <form onsubmit="handleSubmit(event)">
        <input type="text" placeholder="アカウント" required><br>
        <input type="password" placeholder="パスワード" required><br>
        <input type="submit" value="ログイン">
    </form>
</body>
</html>

