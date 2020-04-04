/**
 * init ddp rate limiter
 */
import { Meteor } from 'meteor/meteor';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

Meteor.startup(() => {
    console.log('init ddp rate limiter error message');
    DDPRateLimiter.setErrorMessage('You are too fast.');

    // call method 5 times/s
    console.log('init ddp rate limiter method rule');
    DDPRateLimiter.addRule(
        {
            type: 'method',
            name() {
                return true;
            },
            userId() {
                return true;
            },
            connectionId() {
                return true;
            },
        },
        5,
        1000,
    );

    // subscription 5 times/s
    console.log('init ddp rate limiter subscription rule');
    DDPRateLimiter.addRule(
        {
            type: 'subscription',
            name() {
                return true;
            },
            userId() {
                return true;
            },
            connectionId() {
                return true;
            },
        },
        5,
        1000,
    );
});
