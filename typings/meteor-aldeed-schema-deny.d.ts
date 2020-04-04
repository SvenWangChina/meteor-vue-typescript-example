/**
 * aldeed:schema-deny
 */
// declare module 'simpl-schema' {
//     module SimpleSchema {
//         interface SchemaDefinition {
//             denyUpdate?: boolean;
//         }
//     }
// }
declare namespace SchemaDeny {
    namespace SimpleSchema {
        interface SchemaDefinition {
            denyUpdate?: boolean;
        }
    }
}
