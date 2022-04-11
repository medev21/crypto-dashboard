// dependencies
import { EffectCallback, useEffect } from 'react';

/**
 *
 * @param callBack useEffect inside logic
 * @returns useEffect results
 */

const useFirstMount = (callback: EffectCallback) => {
    return useEffect(callback, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useFirstMount;
