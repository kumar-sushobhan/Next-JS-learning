"use client";
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    // global error must include html and body tags
    <html>
      <body>
        <h1>An global error occurred</h1>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
        {error.digest && <p>Error Digest: {error.digest}</p>}
      </body>
    </html>
  );
}
