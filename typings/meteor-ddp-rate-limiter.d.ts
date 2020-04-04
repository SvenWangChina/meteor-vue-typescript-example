/**
 * ddp-rate-limiter
 */
declare module 'meteor/ddp-rate-limiter' {
    namespace DDPRateLimiter {
        function setErrorMessage(message: string | Function): void;
        function getErrorMessage(): string;
    }
}
