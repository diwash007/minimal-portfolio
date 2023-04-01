import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title>Diwash Dahal</title>
				<meta name="description" content="Diwash Dahal's personal website" />
				<meta name="author" content="Diwash Dahal" />

				{/* OG */}
				<meta property="og:title" content="Diwash Dahal" />
				<meta property="og:description" content="Diwash Dahal's personal website" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://diwashdahal.com.np" />
				<meta property="og:image" content="/thumb.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
			</head>
			<body className='max-w-screen-sm mx-auto selection:bg-primary selection:text-white font-ubuntu'>
				<div>
					{children}
				</div>
			</body>
		</html>
	)
}
