<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Web Progaming-Framework Laravel</title>
</head>
<body>
<h3>{{ $sib }}</h3>
	<p>judul artikel</p>
	<ul>
		@foreach($judul_artikel as $ja)
		<li>{{ $ja}}</li>
		@endforeach
	</ul>
</body>
</html>