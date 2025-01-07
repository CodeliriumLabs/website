import '/Volumes/T7 Shield/codeliriumweb/src/app/globals.css'

export const metadata = {
  title: 'Codelirium Labs',
  description: 'Where Innovation Meets Code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}