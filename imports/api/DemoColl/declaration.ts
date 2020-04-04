/**
 * collection fields
 *
 * @export
 * @interface DemoDocument
 */
export interface DemoDocument {
    // fields
    _id: string;
    content: string;
    createdAt: Date;
    createdAtDay: Date;
    removed: boolean;

    // helpers
    /**
     * format createdAt
     *
     * @param {string} [format='YYYY-MM-DD'] - format
     * @returns {string}
     */
    createdAtStr(format?: string): string;
}
