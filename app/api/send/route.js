export async function POST(req) {
  const data = await req.json();

  console.log("FORM DATA RECEIVED:", data);

  return Response.json({
    success: true,
    message: "Form received successfully",
  });
}