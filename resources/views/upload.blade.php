<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Fajla</title>
</head>
<body>
    <h1>Upload Fajla</h1>

    
    @if(session('success'))
        <p>{{ session('success') }}</p>
        <p>Putanja fajla: {{ session('path') }}</p>
    @endif

    <form action="{{ route('upload.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="file" name="file" accept="image/*,application/pdf">
        <button type="submit">Upload</button>
    </form>
</body>
</html>
