/**
 * This fetches an UUID for the key
 * props utilizing the crypto library
 *
 * Need this conditional to check the window
 * since NextJS prerenders, this checking in
 * the client side
 *
 * @returns UUID
 */
export function getUUID(): string {
    if (typeof window !== 'undefined') {
        return window.crypto.randomUUID();
    }
}
