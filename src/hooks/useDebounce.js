// src/hooks/useDebounce.js
const { useState, useEffect } = require("react");

/**
 * A reusable debounce hook that:
 * 1) Takes in a `value` (like a text string).
 * 2) Delays updating `debouncedValue` until `delay` ms have passed
 *    without `value` changing.
 * 3) Returns the debounced value for you to use in an effect or wherever needed.
 *
 * Example usage:
 *    const debouncedSearchTerm = useDebounce(searchTerm, 500);
 */
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after `delay` ms
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // If `value` changes again before the delay is up, we clear the timer
    // so we don't set the value prematurely.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

module.exports = useDebounce;
