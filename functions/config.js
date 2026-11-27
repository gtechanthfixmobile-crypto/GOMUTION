export async function onRequestGet(context) {
  const rawValue = context.env.FIREBASE_Config;

  if (!rawValue || typeof rawValue !== "string") {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "FIREBASE_Config environment variable is not set.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  let cleaned = rawValue.trim();

  // If stored with a JS declaration like `const firebaseConfig = { ... };`, extract `{ ... }`
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }

  // Convert unquoted JS-style keys like `apiKey: "..."` into valid JSON `"apiKey": "..."` if needed
  const jsonNormalized = cleaned.replace(
    /([{,]\s*)([A-Za-z0-9_$]+)\s*:/g,
    '$1"$2":'
  );

  let parsedConfig = null;
  try {
    parsedConfig = JSON.parse(jsonNormalized);
  } catch (err) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Could not parse FIREBASE_Config into JSON.",
        details: err.message,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      rawText: rawValue,
      firebaseConfig: parsedConfig,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    }
  );
}
