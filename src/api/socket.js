import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3005"; // Replace with your server URL

class SocketService {
    constructor() {
        this.socket = null;
    }

    connect() {
        if (!this.socket) {
            this.socket = io(SOCKET_URL);

            this.socket.on("connect", () => {
                console.log("Connected to Socket.io server");
            });

            this.socket.on("disconnect", () => {
                console.log("Disconnected from Socket.io server");
            });
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    on(event, callback) {
        if (this.socket) {
            this.socket.on(event, callback);
        }
    }

    emit(event, data) {
        if (this.socket) {
            this.socket.emit(event, data);
        }
    }
}

const socketService = new SocketService();
export default socketService;