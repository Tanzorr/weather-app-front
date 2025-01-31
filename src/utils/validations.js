export const validateCity = (city) => {
  if (!city.trim()) return 'City name is required';
  if (city.length < 3) return 'City name must be at least 3 characters';
  if (city.length > 50) return 'City name must be less than 50 characters';
  if (!/^[a-zA-Z\s]+$/.test(city))
    return 'City name must contain only letters and spaces';
  if (/^\s/.test(city)) return 'City name must not start with a space';
  return null;
};
