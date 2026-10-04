import "dotenv/config";
import express from "express";
import cors from "cors";
import { CalleClient } from "@call-e/calle";

const app = express();
const PORT = process.env.PORT || 4000;

if (!process.env.CALLE_API_KEY) {
  console.error("ERROR: CALLE_API_KEY is missing in .env");
  process.exit(1);
}

const client = new CalleClient({
  apiKey: process.env.CALLE_API_KEY,
});

app.use(cors());
app.use(express.json());

// ==============================
// HEALTH CHECK
// ==============================

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "CALL-E backend is running",
    port: PORT,
  });
});

// ==============================
// MAKE PHONE CALL
// ==============================

app.post("/call", async (req, res) => {
  try {
    const { phone, customerName } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    const name = customerName || "Customer";

    console.log("");
    console.log("================================");
    console.log("CALL-E CALL STARTED");
    console.log("================================");
    console.log("Customer:", name);
    console.log("Phone:", phone);
    console.log("================================");

    const task = `
You are making an authorized test phone call.

The person's name is ${name}.

Start the conversation by saying:

"Hello ${name}. This is a test call from my Node.js application using CALL-E."

Then ask:

"Can you hear me clearly?"

Wait for the person's response.

If they respond positively, say:

"Thank you. This was only an integration test. Have a great day."

Then end the call.

Do not ask for passwords.
Do not ask for OTPs.
Do not ask for banking information.
Do not request sensitive personal information.

This is an authorized integration test.
`;

    const call = await client.calls.createAndWait({
      task,

      recipients: [
        {
          phones: [phone],
          region: "IN",
          locale: "en-IN",
        },
      ],
    });

    console.log("");
    console.log("================================");
    console.log("CALL-E CALL FINISHED");
    console.log("================================");
    console.log("Call ID:", call?.id);
    console.log("Status:", call?.status);
    console.log("================================");

    return res.json({
      success: true,
      message: "Call completed successfully",
      callId: call?.id || null,
      status: call?.status || null,
      result: call,
    });

  } catch (error) {
    console.error("");
    console.error("================================");
    console.error("CALL-E ERROR");
    console.error("================================");
    console.error(error);
    console.error("================================");

    return res.status(500).json({
      success: false,
      message: error?.message || "CALL-E call failed",
    });
  }
});

// ==============================
// START SERVER
// ==============================

app.listen(PORT, () => {
  console.log("");
  console.log("================================");
  console.log("      ONCALL HERO BACKEND");
  console.log("================================");
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/health`);
  console.log("================================");
  console.log("");
});