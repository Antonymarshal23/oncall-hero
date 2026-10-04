import { useState } from "react";
import "./App.css";

const API = "http://localhost:3000";

function App() {
  const [name, setName] = useState("Antony");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const makeCall = async (event) => {
    event.preventDefault();

    if (!phone.trim()) {
      setResult({
        type: "error",
        message: "Please enter a phone number.",
      });

      return;
    }

    setLoading(true);
    setResult(null);

    try {
      console.log("Sending call request...");

      const response = await fetch(`${API}/call`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          phone: phone.trim(),
          customerName: name.trim() || "Customer",
        }),
      });

      const data = await response.json();

      console.log("Backend response:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Backend call request failed"
        );
      }

      setResult({
        type: "success",
        message: data.message || "Call completed successfully.",
        data,
      });

    } catch (error) {
      console.error("Frontend error:", error);

      setResult({
        type: "error",
        message: error.message || "Failed to connect to backend.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      <div className="phone-card">

        <div className="icon">
          ☎
        </div>

        <h1>OnCall Hero</h1>

        <p className="subtitle">
          AI Phone Calling Platform
        </p>

        <form onSubmit={makeCall}>

          <label htmlFor="name">
            Customer Name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter customer name"
          />

          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+919876543210"
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "☎ Calling..." : "☎ Make Call"}
          </button>

        </form>

        {result && (
          <div className={`result ${result.type}`}>

            <div className="result-title">
              {result.type === "success"
                ? "✓ Call Successful"
                : "✕ Call Failed"}
            </div>

            <p>
              {result.message}
            </p>

            {result.data?.callId && (
              <p>
                <strong>Call ID:</strong>{" "}
                {result.data.callId}
              </p>
            )}

            {result.data?.status && (
              <p>
                <strong>Status:</strong>{" "}
                {result.data.status}
              </p>
            )}

          </div>
        )}

        <div className="footer">
          Node.js + React + CALL-E
        </div>

      </div>

    </div>
  );
}

export default App;