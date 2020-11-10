import { useState } from 'react';

export function useCount(srartCount) {
    const [count, setCount] = useState(srartCount || 1);

    const onChange = e => setCount(e.target.value);

    return {count, setCount, onChange};
};