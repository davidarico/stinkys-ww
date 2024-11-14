export async function GET(request) {
    return new Response(JSON.stringify({ message: `Bar: ${new Date().toLocaleString()}` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
    });
}