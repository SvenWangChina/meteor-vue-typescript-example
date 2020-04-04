declare module 'meteor/konecty:user-presence' {
    namespace UserPresence {
        // anywhere
        function start(userId?: string): void;

        // Client
        let awayTime: number;
        let awayOnWindowBlur: boolean;
        let callbacks: Function[];
        let connected: boolean;
        let started: boolean;
        let userId: string | '';

        function onSetUserStatus(callback: Function): void;
        function runCallbacks(user: any, status: string): void;
        function startTimer(): void;
        function stopTimer(): void;
        function restartTimer(): void;
        function setAway(): void;
        function setOnline(): void;

        // Server
        function activeLogs(): void;
        function removeConnectionsByInstanceId(instanceId: any): void;
        function createConnection(userId: string, connection: any, status: string, metadata: any): void;
        function setConnection(userId: string, connection: any, status: string): void;
        function setDefaultStatus(userId: string, status: string): void;
        function removeConnection(connectionId: string): void;
    }

    namespace UserPresenceMonitor {
        function onSetUserStatus(callback: Function): void;
        function start(): void;
        function processUserSession(record: any, action: string): void;
        function processUser(id: string, fields: any): void;
        function setStatus(id: string, status: string, metadata: any): void;
    }
}
