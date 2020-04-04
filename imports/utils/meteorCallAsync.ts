/**
 * use async for Meteor.call
 *
 * @exports meteorCallAsync
 * @requires Meteor
 * @requires FirstArgument
 * @requires KnownMethods
 * @template K
 *
 * @param {K} methodName
 * @param {FirstArgument<KnownMethods[K]>} arg
 * @param {DDP.DDPStatic} [server]
 * @returns {Promise<UnpackPromise<ReturnType<KnownMethods[K]>>>}
 *
 * @example
 *  meteorCallAsync('Common.methods.getTime', {})
 *      .then((result: number): void => {
 *          console.log(result);
 *      })
 *      .catch((error: Meteor.Error): void => {
 *          console.log(error);
 *      });
 */
import { Meteor } from 'meteor/meteor';
import { DDP } from 'meteor/ddp';
import { FirstArgument } from 'meteor/mdg:validated-method';

import KnownMethods from './methodTypes';

type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

export default function meteorCallAsync<K extends keyof KnownMethods = keyof KnownMethods>(
    methodName: K,
    arg: FirstArgument<KnownMethods[K]>,
    server?: DDP.DDPStatic
): Promise<UnpackPromise<ReturnType<KnownMethods[K]>>> {
    return new Promise<UnpackPromise<ReturnType<KnownMethods[K]>>>(
        (resolve: Function, reject: Function): void => {
            const ddpServer: any = server ? server : Meteor;
            ddpServer.call(methodName, arg, (error: Meteor.Error, result: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        }
    );
}
