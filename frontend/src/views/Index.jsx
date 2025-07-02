import React from "react";
import { io } from "socket.io-client";

export default function index() {
  const socket = io("http://localhost:3000");

  const [qr, setQR] = useState(null);
  const [status, setStatus] = useState("Waiting for QR...");

  useEffect(() => {
    socket.on("qr", (dataUrl) => {
      setQR(dataUrl);
      setStatus("Scan the QR with WhatsApp");
    });

    socket.on("ready", () => {
      setStatus("✅ WhatsApp Connected");
      setQR(null);
    });

    socket.on("disconnect", () => {
      setStatus("❌ Disconnected");
    });

    return () => {
      socket.off("qr");
      socket.off("ready");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div>
      <h2>{status}</h2>
      {qr && <img src={qr} alt="WhatsApp QR Code" />}
    </div>
  );
}
